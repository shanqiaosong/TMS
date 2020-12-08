<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeacherBasic;
use App\Http\Services\CalculatorService;
use App\TeacherBasic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeacherBasicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function index(Request $request,CalculatorService $calc)
    {
        //处理查询：
        if (array_key_exists('query',$request->all())){
            $data = TeacherBasic::where('name',$request->query())->orWhere('IDNum',$request->query())->get();
            foreach ($data as $key => $rec){
                $metaData=$calc->calcOneTeacherWrap($rec->id,date("Y"));
                $data[$key]->metaData=$metaData;
            }
            return $data;
        }
        $pageSize=$request->pageSize;
        $group=$request->group;
        $rank=$request->rank;
        $query=DB::table('teacher_basics');
        if ($group){
            $query->where(function($query)use($group){
                for ($i=0;$i<count($group);$i++){
                    $query->orWhere(
                        'group',$group[$i]
                    );
                }
            });
        }
        if ($rank){
            $query->where(function($query)use($rank){
                for ($i=0;$i<count($rank);$i++){
                    $query->orWhere(
                        'rank',$rank[$i]
                    );
                }
            });
        }
        //return [1,$pageSize];
        $result=$query->paginate($pageSize);
        //dd($result->items);
        $data=$result->items();
        foreach ($data as $key => $rec){
            $metaData=$calc->calcOneTeacherWrap($rec->id,date("Y"));
            $data[$key]->metaData=$metaData;
        }
        return [
            'data'=>$data,
            'total'=>$result->total()
        ];
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

    public function bindUser(){
        // TODO:使用已登陆的账号绑定
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreTeacherBasic $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTeacherBasic $request)
    {
        //

        if(TeacherBasic::where('IDNum',$request->IDNum)->count()==1){
            abort(406,'已经存在相同身份证号的记录。');
        }
        $teacher = new TeacherBasic();

        $teacher->name = $request->name;
        $teacher->IDNum = $request->IDNum;
        $teacher->group = $request->group;
        $teacher->rank = $request->rank;
        $teacher->fromYear = $request->fromYear;

        $teacher->save();
        return response()->OK();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,CalculatorService $calc)
    {
        //
        $result=TeacherBasic::find($id);
        $metaData=$calc->calcOneTeacherWrap($id,date("Y"));
        $result->metaData=$metaData;
        return $result;
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
     * @return \Illuminate\Http\Response
     */
    public function update(StoreTeacherBasic $request, $id)
    {
        //
        $obj=TeacherBasic::findOrFail($id);
        if ($obj->IDNum!=$request->IDNum){
            // 如果身份证号有更改
            if(TeacherBasic::where('IDNum',$request->IDNum)->count()==1){
                abort(406,'已经存在相同身份证号的记录。');
            }
        }
        $obj->update([
            'name' => $request->name,
            'IDNum' => $request->IDNum,
            'group' => $request->group,
            'rank' => $request->rank,
            'fromYear' => $request->fromYear,
        ]);

        return response()->OK();
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
        if ($teacher=TeacherBasic::find($id)){
            $teacher->points()->delete();
            $teacher->delete();

            return response()->OK();
        }else{
            abort(404,'没有相应记录。');
        }
    }
}
