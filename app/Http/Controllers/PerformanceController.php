<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePerformance;
use App\Performance;
use App\TeacherBasic;
use Illuminate\Http\Request;

class PerformanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Performance[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        return Performance::where('teacher_basic_id',$request->teacher_basic_id)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function store(StorePerformance $request)
    {
        //
        if (!TeacherBasic::find($request->teacher_basic_id)){
            abort(404,'没有找到对应的教师。');
        }
        $obj=new Performance([
            'teacher_basic_id'=>$request->teacher_basic_id,
            'year'=>$request->year,
            'points'=>$request->points,
            'type'=>$request->type,
            'level'=>$request->level,
            'title'=>$request->title,
        ]);
        $obj->save();

        return [
            'message'=>'OK',
            'newID'=>$obj->id,
        ];
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return array
     */
    public function update(StorePerformance $request, $id)
    {
        //
        if($performance=Performance::find($id)){

            if (!TeacherBasic::find($request->teacher_basic_id)){
                abort(404,'没有找到对应的教师。');
            }
            $performance->update([
                'teacher_basic_id'=>$request->teacher_basic_id,
                'year'=>$request->year,
                'points'=>$request->points,
                'type'=>$request->type,
                'level'=>$request->level,
                'title'=>$request->title,

            ]);
        }else{
            abort(404,'没有找到对应的记录。');
        }

        return [
            'message'=>'OK',
            'newID'=>$id,
        ];
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
        if($performance=Performance::find($id)){
            $performance->delete();
            return response()->OK();
        }else{
            abort(404,'没有对应记录。');
        }

    }
}
