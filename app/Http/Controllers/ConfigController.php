<?php

namespace App\Http\Controllers;

use App\Http\Services\ConfigService;
use App\TeacherBasic;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    //
    public function getConfig($teacher_id,ConfigService $config){
        $group=TeacherBasic::findOrFail($teacher_id)->group;
        return $config->getConfig($group);
    }
    public function getAllConfig(ConfigService $config){
        return $config->getAllConfig();
    }
    public function changeAllConfig(ConfigService $config,Request $request){
        return $config->changeAllConfig($request);
    }
}
