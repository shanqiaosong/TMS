<?php

namespace App\Common;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class MyUpload
{
    /**
    * 根据设置的存储盘存储
    */
    static public function uploadFile($file)
    {
        //使用：默认 Storage local 存储
        $fileName=$file->store('public/images');

        return Storage::url($fileName);
    }
}
