<?php

namespace App\Http\Controllers;

use App\CalcResult;
use App\Http\Services\CalculatorService;
use App\TeacherBasic;
use App\TeacherBasicPoint;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    //

    public function calcOneTeacherWrap($teacherID,$year,CalculatorService $calc){
        return $calc->calcOneTeacherWrap($teacherID,$year);
    }

    public function calcAll($year,CalculatorService $calc){
        // 如果 $year == 2020 ，则计算 2019-2020 和之前的成绩
        // 计算并保存
        // 首先删除数据
        CalcResult::where('year',$year)->delete();
        $scores= $calc->calcAll($year);
        //return $scores;
        foreach ($scores as $score){
            $score=(object)$score;
            if (!$score->err){
                $obj=new CalcResult([
                    'teacher_basic_id'=>$score->id,
                    'year'=>$year,
                    'fromYear'=>$score->fromYear,
                    'score'=>$score->totalScores,
                    'inPenalty'=>$score->inPenalty,
                    'rank'=>$score->rank,
                    'group'=>$score->group,
                    'name'=>$score->name,
                    'IDNum'=>$score->IDNumTail,
                    'detail'=>$score->detail
                ]);
                $obj->save();

            }
        }

        return response()->OK();
    }
}
