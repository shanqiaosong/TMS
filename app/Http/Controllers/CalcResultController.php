<?php

namespace App\Http\Controllers;

use App\CalcResult;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class CalcResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function index(Request $request)
    {
        //处理查询：
        if (array_key_exists('query',$request->all())){
            //return [$request->year,$request->query()];
            $data = CalcResult::where('year',$request->year)->where('name',$request->query()['query'])->get();
            return $data;
        }
        //
        $year=$request->year;
        $pageSize=$request->pageSize;
        $group=$request->group;
        $rank=$request->rank;
        $query=DB::table('calc_results')
            ->select('id','teacher_basic_id','year','score','inPenalty','rank','group','name','IDNum')
            ->where('year',$year);
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
        $result=$query
            ->orderBy('score','desc')
            ->paginate($pageSize);
        $data=$result->items();
        return [
            'data'=>$data,
            'total'=>$result->total()
        ];
    }

//    public function getMyResID(){
//        $res=
//        return $res;
//    }

    public function getDetail(Request $request){
        if (Gate::allows('seeDetail',$request->id)){
            $res = CalcResult::find($request->id);
            $return=$res->toArray();
            $return['detail']=$res->detail;
            return $res;
        }else{
            abort(401,'不能查看他人成绩信息。');
        }
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
    public function store(Request $request)
    {
        //
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
