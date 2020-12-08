<?php


namespace App\Http\Services;


use App\TeacherBasic;

class CalculatorService
{
    public function __construct(\App\Http\Services\ConfigService $conf){
        $this->conf=$conf;
        $this->kParam=$this->conf->getkParam();
        $this->importantYears=$this->conf->getImportantYears();
    }

    // 对每年信息进行初步计算和汇总
    public function index($teacherID,$year){
        // 获取这个教师每年的全部详细数据（包括基本分数和加分扣分）
        $data=TeacherBasic::getAllInfo($teacherID);
        $results=[
            'inPenalty'=>false,
            'scores'=>[],
            'details'=>[]
        ];
        // 对于每年的数据
        foreach ($data as $yearData){
            // 只考虑$year之前的数据
            if ($yearData['year']<$year){
                // 简单汇总
                $oneYearRes=$this->calcOneYear($yearData);
                if($oneYearRes['earliestPossibleYear']>$year){
                    // 检查惩罚是否过期
                    $results['inPenalty']=true;
                }
                $results['scores'][$yearData['year']]=$oneYearRes['totalPoint'];
                $results['details'][$yearData['year']]=[
                    'detail'=>$oneYearRes['detail'],
                    'totalPoint'=>round($oneYearRes['totalPoint'],2),
                    'resultInPenalty'=>($oneYearRes['earliestPossibleYear']>$year)
                ];
            }
        }
        return $results;
    }

    //计算某个教师每年的数据并汇总(从晋升年开始，到 $year 的前一年)
    //并检查是否存在数据缺失
    public function calcOneTeacher($teacher,$year){
        $errYears=[];
        $err=false;
        $totalScores=0;
        $oneTeacherData=$this->index($teacher->id,$year);
        $details=[];
        for($inYear=$teacher->fromYear;$inYear<$year;$inYear++){
            $detail=[];
            $kParam=1;
            if ($inYear>=$year-$this->importantYears){
                // 重要年份
                $kParam=$this->kParam;
            }
            if(!array_key_exists($inYear,$oneTeacherData['scores'])){
                // 如果缺失，则报告
                $err=true;
                array_push($errYears,$inYear);
            }else{
                $totalScores+=$oneTeacherData['scores'][$inYear]*$kParam;
                $detail[$inYear]=['info'=>$oneTeacherData['details'][$inYear],
                    'kParam'=>$kParam];
            }
            array_push($details,$detail);
        }

        // 不可以计算晋升之前的分数
        if ($teacher->fromYear>=$year){
            $err=true;
        }

        $result=[
            'id'=>$teacher->id,
            'name'=>$teacher->name,
            'rank'=>$teacher->rank,
            'group'=>$teacher->group,
            'IDNumTail'=>'***'.substr($teacher->IDNum,15,3),
            'fromYear'=>$teacher->fromYear,
            'scores'=>$oneTeacherData['scores'],
            'inPenalty'=>$oneTeacherData['inPenalty'],
            'totalScores'=>round($totalScores,2),
            'err'=>$err,
            'errYears'=>$errYears,
            'detail'=>$details
        ];
        return $result;
    }

    public function calcOneTeacherWrap($teacherID,$year){
        return $this->calcOneTeacher(TeacherBasic::find($teacherID),$year);
    }

    public function calcOneYear($record){
        // 使用一年的详细数据算出此年的分数之和，并判断惩罚时长
        $data=$record;
        $qualificationPoints=$this->conf->getQualificationPoints();
        $totalPoint=
            $data->positionPoints+
            $data->workloadPoints+
            $data->assessmentPoints+
            $data->moralityPoints+
            $qualificationPoints;
        $details=[
            'positionPoints'=>$data->positionPoints,
            'workloadPoints'=>$data->workloadPoints,
            'assessmentPoints'=>$data->assessmentPoints,
            'moralityPoints'=>$data->moralityPoints,
            'qualificationPoints'=>$qualificationPoints,
            'performances'=>[],
            'punishments'=>[]
        ];
        foreach ( $data->performances as $performance){
            $totalPoint+=$performance->points;
            array_push($details['performances'],$performance);
        }
        $earliestPossibleYear=0;
        foreach ($data->punishments as $punishment){
            $thisPossibleYear=$punishment->year+$punishment->penaltyYears+1;
            // 必须加一年，否则2019-2020学年惩罚一年，2020仍可以晋升
            if ($thisPossibleYear>$earliestPossibleYear){
                $earliestPossibleYear=$thisPossibleYear;
            }
            // 减去扣除的分数
            $totalPoint-=$punishment->points;
            // 记录细节
            array_push($details['punishments'],$punishment);
        }
        $details['earliestPossibleYear']=$earliestPossibleYear;
        return ['totalPoint'=>$totalPoint,
            'earliestPossibleYear'=>$earliestPossibleYear,
            'detail'=>$details];
    }

    // 计算所有教师 $year 的数据
    public function calcAll($year){
        // 如果 $year == 2020 ，则计算 2019-2020 和之前的成绩
        $teachers=TeacherBasic::all();
        $results=[];
        foreach ($teachers as $teacher){

            array_push($results,$this->calcOneTeacher($teacher,$year));
        }
        return $results;
    }
}
