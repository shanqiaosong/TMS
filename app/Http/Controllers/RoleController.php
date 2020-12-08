<?php

namespace App\Http\Controllers;

use App\ApplyIdnum;
use App\CalcResult;
use App\Role;
use App\TeacherBasic;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    //
    public function getRole($id){
        return Role::where('user_id',$id)->get();
    }
    public function setRole($id,Request $request){
        if (Auth::id()==$id){
            abort(401,'不能修改自己的权限。');
        }
        $role=Role::firstOrNew(['user_id' => $id]);
        $role->roles=$request->role;
        $role->save();
    }
    public function getInfo(){
        $teacher=TeacherBasic::where('user_id',Auth::id())->first();
        if ($teacher){
            // 获取今年成绩数据
            $res=CalcResult::where('year',Date('Y'))
                ->where('teacher_basic_id',$teacher->id)
                ->first();
            if ($res){
                $resID=$res->id;
            }else{
                $resID=-2;//无数据
            }
        }else{
            $resID=-3;//未绑定
        }

        $role=Auth::user()->role;
        $roles=$role?$role->roles:3;
        $apply=ApplyIdnum::where('user_id',Auth::id())->first();
        //dd($apply);
        $applyStatus=$apply?$apply->status:0;
        $pendingIDNum=$apply?$apply->IDNum:0;
        return ['role'=>$roles,
            'name'=>Auth::user()->name,
            'resID'=>$resID,
            'bind'=>$resID==-3?0:$teacher->IDNum,
            'bindStatus'=>$applyStatus,
            'pendingIDNum'=>$pendingIDNum
        ];
    }
}
