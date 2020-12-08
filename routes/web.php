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

