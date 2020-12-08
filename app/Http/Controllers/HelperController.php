<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelperController extends Controller
{
    //
    public function validateID(\App\Http\Services\IDNumService $service,Request $request)
    {
        //return 1;
        $legal = $service->isChinaIDCard($request->IDNum);
        if (!$legal) {
            return [
                'message' => 'OK',
                'result' => false,
                'help' => '身份证号不合法'
            ];
        }
        $exist = \App\TeacherBasic::where('IDNum', $request->IDNum)->count();
        if ($exist) {
            return [
                'message' => 'OK',
                'result' => false,
                'help' => '身份证号已存在'
            ];
        }
        return [
            'message' => 'OK',
            'result' => true
        ];
    }
}
