<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class CheckFill
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()->role&&(Gate::allows('fill')||Gate::allows('admin'))){ //如果是管理员或者录入员
            return $next($request);
        }else{
            abort('401','只有录入员可以访问。');
        }
    }
}
