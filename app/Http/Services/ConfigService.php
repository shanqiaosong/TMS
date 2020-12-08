<?php


namespace App\Http\Services;


use Illuminate\Http\Request;

class ConfigService
{
    public function getConfig($group){
        $configFile=include config_path('tms.php');
        $result=$configFile['specific'][$group];
        return $result;
    }
    public function getAllConfig(){
        return file_get_contents(resource_path('js/config.json'));
//        $configFile=include config_path('tms.php');
//        return $configFile;
    }
    public function changeAllConfig($request){
        $fh = fopen(resource_path('js/config.json'), "w"); //w从开头写入 a追加写入
        fwrite($fh, $request->conf);
        fclose($fh);
        return response()->OK();
    }

    public function getQualificationPoints()
    {
        $configFile=include config_path('tms.php');
        return $configFile['common']['qualification'];
    }

    public function getkParam()
    {
        $configFile=include config_path('tms.php');
        return $configFile['common']['kParam'];
    }

    public function getImportantYears()
    {
        $configFile=include config_path('tms.php');
        return $configFile['common']['importantYears'];
    }
}
