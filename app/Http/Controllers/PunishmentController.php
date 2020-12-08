<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePunishment;
use App\Punishment;
use App\TeacherBasic;
use Illuminate\Http\Request;

class PunishmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Punishment::all();
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
     * @return \Illuminate\Http\Response
     */
    public function store(StorePunishment $request)
    {
        //
        if (!TeacherBasic::find($request->teacher_basic_id)){
            abort(404,'没有找到对应的教师。');
        }
        $obj=new Punishment([
            'teacher_basic_id'=>$request->teacher_basic_id,
            'year'=>$request->year,
            'points'=>$request->points,
            'type'=>$request->type,
            'penaltyYears'=>$request->penaltyYears,
            'description'=>$request->description,
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
    public function update(Request $request, $id)
    {
        //
        if($punishment=Punishment::find($id)){

            if (!TeacherBasic::find($request->teacher_basic_id)){
                abort(404,'没有找到对应的教师。');
            }
            $punishment->update([
                'teacher_basic_id'=>$request->teacher_basic_id,
                'year'=>$request->year,
                'points'=>$request->points,
                'type'=>$request->type,
                'penaltyYears'=>$request->penaltyYears,
                'description'=>$request->description,

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
        if($punishment=Punishment::find($id)){
            $punishment->delete();
            return response()->OK();
        }else{
            abort(404,'没有对应记录。');
        }
    }
}
