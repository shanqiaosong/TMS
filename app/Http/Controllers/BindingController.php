<?php

namespace App\Http\Controllers;

use App\ApplyIdnum;
use App\TeacherBasic;
use App\User;
use Illuminate\Http\Request;

class BindingController extends Controller
{
    //
    public function index(Request $request){
        //处理查询：
        if (array_key_exists('query',$request->all())){

            return User::where('users.name',$request->query())
                ->orWhere('users.email',$request->query())
                ->LeftJoin('teacher_basics','users.id','=','teacher_basics.user_id')
                ->LeftJoin('roles','users.id','=','roles.user_id')
                ->LeftJoin('apply_idnum','users.id','=','apply_idnum.user_id')
                ->select('users.id as userID','users.name as userName','users.email as userEmail','teacher_basics.id as teacherID','teacher_basics.name as teacherName','teacher_basics.IDNum','roles.roles')
                ->get();
        }
        return User::LeftJoin('teacher_basics','users.id','=','teacher_basics.user_id')
            ->LeftJoin('roles','users.id','=','roles.user_id')
            ->LeftJoin('apply_idnum','users.id','=','apply_idnum.user_id')
            ->select('users.id as userID',
                'users.name as userName',
                'users.email as userEmail',
                'teacher_basics.id as teacherID',
                'teacher_basics.name as teacherName',
                'teacher_basics.IDNum',
                'roles.roles',
                'apply_idnum.status as status',
                'apply_idnum.IDNum as pendingIDNum',
            )
            ->orderBy('userID','asc')
            ->paginate($request->pageSize);
    }

    public function bindUser(Request $request){
        //return 1;
        if (!User::find($request->userID) && $request->userID!=-1){
            abort(404,'没有找到对应的用户。');
        }
        $teacher=TeacherBasic::where('IDNum',$request->IDNum)->first();
        if ($teacher){
            if ($request->userID==-1){

                $teacher->user_id=null;
                $teacher->save();
                // 处理apply表的数据
                ApplyIdnum::where('IDNum',$request->IDNum)->update([
                    'status'=>1
                ]);
            }else if($teacher->user_id==$request->userID){
                abort(406,'未变化。');
            }
            else{
                TeacherBasic::where('user_id',$request->userID)->update([
                    'user_id'=>null
                ]);
                $teacher->user_id=$request->userID;
                $teacher->save();
                // 处理apply表的数据
                ApplyIdnum::where('user_id',$request->userID)->update([
                    'status'=>2
                ]);
            }

        }else{
            abort(404,'没有找到对应的教师。');
        }


        return response()->OK();
    }

    public function denyUser(Request $request){
        ApplyIdnum::where('user_id',$request->userID)->update([
            'status'=>3
        ]);
        return response()->OK();
    }

    public function getMyBindingInfo(){
        return 1;
    }
}
