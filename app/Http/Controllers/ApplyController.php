<?php

namespace App\Http\Controllers;

use App\ApplyIdnum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApplyController extends Controller
{
    //
    public function apply(Request $request){
        $apply=ApplyIdnum::firstOrNew([
            'user_id'=>Auth::id()
        ]);
        $apply->IDNum=$request->IDNum;
        $apply->status=1;
        $apply->save();
        return response()->OK();
    }
}
