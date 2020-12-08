<?php

namespace App\Http\Controllers;

use App\Http\Services\CalculatorService;
use App\TeacherBasic;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class ConsoleController extends Controller
{
    //
    public function getStatus(CalculatorService $calc){
        $data=TeacherBasic::all();
        $errNum=0;
        $bindNum=0;
        foreach ($data as $key => $rec){
            $metaData=$calc->calcOneTeacherWrap($rec->id,date("Y"));
            if ($metaData['err']){
                $errNum++;
            }
            if ($rec->user_id){
                $bindNum++;
            }
        }
        return [
            'dataPercent'=>round((1-$errNum/sizeof($data))*100,1),
            'teacherCount'=>sizeof($data),
            'errCount'=>$errNum,
            'userCount'=>User::all()->count(),
            'bindCount'=>$bindNum
        ];
    }
    public function artisan(Request $request){
        if ($request->cmd=='down'){
            return[
                'message'=>'OK',
                'cmd'=>'down',
                'response'=>
                    Artisan::call('down',[
                        '--secret'=>$request->secret
                    ])
            ];
        }
        if($request->cmd=='up'){
            return[
                'message'=>'OK',
                'cmd'=>'up',
                'response'=>Artisan::call('up')
            ];
        }
        if($request->cmd=='cache'){
            Artisan::call('route:cache');
            Artisan::call('view:cache');
            Artisan::call('config:cache');
            return[
                'message'=>'OK',
                'cmd'=>'cache',
            ];
        }
        if($request->cmd=='clear'){
            Artisan::call('route:clear');
            Artisan::call('view:clear');
            Artisan::call('config:clear');
            return[
                'message'=>'OK',
                'cmd'=>'clear',
            ];
        }
        return $request;
    }
}
