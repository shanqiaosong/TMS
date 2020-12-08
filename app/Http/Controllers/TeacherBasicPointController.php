<?php

namespace App\Http\Controllers;

use App\Performance;
use App\Punishment;
use App\TeacherBasic;
use App\TeacherBasicPoint;
use Illuminate\Http\Request;

class TeacherBasicPointController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function index($teacherid)
    {
        //
        //return [$teacherid,$year];
       return TeacherBasic::getAllInfo($teacherid);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$teacherid,$year)
    {
        //
        //return [$teacherid,$year];
        if(TeacherBasic::where('id',$teacherid)->count()!=1){
            abort(406,'不存在这个教师。');
        }
        //return $request;
        $validatedData = $request->validate([
            'positionPoints' =>'required',
            'assessmentPoints'  =>'required',
            'workloadPoints'=>'required',
            'moralityPoints'=>'required',
        ],[
        ],[
            'positionPoints' =>'岗位职责得分',
            'assessmentPoints'  =>'考核得分',
            'workloadPoints'=>'工作量得分',
            'moralityPoints'=>'师德师风得分',
        ]);
        //return $validatedData['positionPoints'];

        $points=TeacherBasicPoint::firstOrCreate(
            [
                'teacher_basic_id' => $teacherid,
                'year'=>$year
            ]
        );
        $points->update([
            'positionPoints' => $validatedData['positionPoints'],
            'assessmentPoints' => $validatedData['assessmentPoints'],
            'workloadPoints'=>$validatedData['workloadPoints'],
            'moralityPoints'=>$validatedData['moralityPoints'],
        ]);

        return response()->OK();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
