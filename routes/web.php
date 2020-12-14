<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

// 重定向到登录页
Route::redirect('/','/user')->name('login');

// 登录、注册等由 user.js 接管
Route::view('/user/{path?}','welcome')->where('path', '.*')
    ->middleware('guest');

Route::view('/reset','reset')->name('password.reset');

Route::middleware(['auth','disabled'])->group(function(){
    // 主页由 home.js 接管
    Route::view('/home/{path?}', 'home')->where('path', '.*')
        ->name('home');

    Route::middleware(['fill'])->group(function (){
        // 管理员页面由 admin.js 接管
        Route::view('/admin/{path?}','admin')->where('path', '.*');
        // 下载 Excel
        Route::get('/download/{year}','DownloadExcelController@getFinal');
    });

    Route::middleware(['admin'])->group(function(){
        // 日志查看
        Route::get('/logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
    });
});

Route::get('/test',function (\App\Http\Services\CalculatorService $calc){
    return $calc->index(5,2018);
});


Route::get('/blog', 'Blog\AdminController@index');

Route::get('/articles/search/{key}', 'Blog\ArticleController@search')->name('articles.search.get');
Route::post('/articles/search', 'Blog\ArticleController@search')->name('articles.search.post');
Route::get('/articles/list', 'Blog\ArticleController@list')->name('articles.list');
Route::resource('/articles', 'Blog\ArticleController');
Route::resource('/comments', 'Blog\CommentController');

Route::get('/wxlogin',function(\Illuminate\Http\Request $request){
    $client = new \GuzzleHttp\Client();
    $url='https://api.weixin.qq.com/sns/jscode2session?appid=wx2792c31e1df95693'.
        '&secret=fa071c2881521c8f4a3ca9195e02d307&js_code='.$request['code'].'&grant_type=authorization_code';
    $res=$client->get($url);
    \App\Events\DebugEvent::dispatch($request['scene']);
    return $res->getBody();
});

Route::get('wxcode',function (){

});

Route::get('wx/getCode',function (){
    $client=new \GuzzleHttp\Client();
    $url='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx2792c31e1df95693'.
        '&secret=fa071c2881521c8f4a3ca9195e02d307';
    $access=$client->get($url)->getBody()->getContents();
    $access=\GuzzleHttp\json_decode($access);
    $access=$access->access_token;
//    return $access;
    $url='https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='.$access;
    $scene=bin2hex(random_bytes(16));
    $pic=$client->post($url,[
        'body'=>json_encode([
            'scene'=>$scene
        ])
    ])->getBody()->getContents();
    return [
        'img'=>base64_encode($pic),
        'code'=>$scene
    ];
//    $response = Response::make($pic, 200);
//    $response->header('Content-Type', 'image/jpeg');
//    return $response;
});

Route::get('wx/login',function (){
    return view('wx.login');
});

Route::get('queue',function (){
    \App\Jobs\ProcessPodcast::dispatch();
});

Route::get('event',function (){
    \App\Events\DebugEvent::dispatch('test');
});
