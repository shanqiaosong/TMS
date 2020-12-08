<?php

namespace App\Http\Controllers;

use App\CalcResult;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class DownloadExcelController extends Controller
{
    //
    public function getFinal($year){
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $data=CalcResult::where('year',$year)->orderBy('score','desc')->get()->makeHidden(
            [
                'created_at',
                'updated_at',
                'id',
                'teacher_basic_id',
                'year',
            ]);
        $results=[];
        foreach($data as $rec){
            $result=[
                'name'=>$rec->name,
                'IDNum'=>$rec->IDNum,
                'group'=>['','领导','考试学科任课教师','非考试学科任课教师','教辅'][$rec->group],
                'rank'=>['', '初级教师', '二级教师', '一级教师', '高级教师', '正高级教师'][$rec->rank],
                'score'=>$rec->score,
                'inPenalty'=>$rec->inPenalty?'不可晋升':'正常晋升',
            ];
            array_push($results,$result);
        }
        //dd($results);
        $sheet->fromArray($results,null,'A2',true);
        $sheet->setCellValue('A1', '姓名');
        $sheet->setCellValue('B1', '身份证号');
        $sheet->setCellValue('C1', '岗位');
        $sheet->setCellValue('D1', '职级');
        $sheet->setCellValue('E1', '得分');
        $sheet->setCellValue('F1', '备注');
        $spreadsheet->getActiveSheet()->getStyle('A1:F1')->getFont()->setBold(true);
        $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(9);
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(12);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(12);
        $spreadsheet->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
        $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(9);
        $spreadsheet->getActiveSheet()->setAutoFilter(
            $spreadsheet->getActiveSheet()
                ->calculateWorksheetDimension()
        );
        $writer = new Xlsx($spreadsheet);
        $fileName='/tmp/'.$year.'年度教师评级成绩表 '.date('Y-m-d').'.xlsx';
        $writer->save($fileName);
        return response()->download($fileName)->deleteFileAfterSend();
    }
}
