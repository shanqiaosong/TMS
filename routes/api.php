<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix'=>'1.0','middleware'=>['auth','disabled']],function(){

    // 录入员和以上可以访问
    Route::middleware(['fill'])->group(function (){
        // 教师信息管理（列表和查询）
        Route::resource('teachers','TeacherBasicController');
        // 教师基本分数管理
        Route::get('points/{teacherid}/','TeacherBasicPointController@index');
        Route::post('points/{teacherid}/in/{year}','TeacherBasicPointController@store');
        // 教师奖励惩罚分数管理
        Route::resource('performances','PerformanceController');
        Route::resource('punishments','PunishmentController');
        // 计算结果（列表和查询）
        Route::get('results','CalcResultController@index');
        // 计算一个教师的年度结果（用于判断是否缺失信息）
        Route::get('/score/teacher/{teacherID}/in/{year}','CalculatorController@calcOneTeacherWrap');
        // 计算所有教师年度结果
        Route::post('/score/year/{year}','CalculatorController@calcAll');
        // 绑定信息（列表）
        Route::get('/binding','BindingController@index');
        // 绑定和拒绝
        Route::post('/binding/bind','BindingController@bindUser');
        Route::post('/binding/deny','BindingController@denyUser');
        // 获取设置
        Route::get('/config/{teacher_id}','ConfigController@getConfig');
        // 获取全部设置
        Route::get('/all_config/','ConfigController@getAllConfig');
        // 编辑设置
        Route::post('/edit_config/','ConfigController@changeAllConfig');
    });

    // 获取分数解释（只有管理员、录入员、教师本人可以获知）
    Route::get('/score/detail/{id}','CalcResultController@getDetail');
    // 身份证验证
    Route::get('helpers','HelperController@validateID');
    // 登陆获取信息
    Route::get('/info','RoleController@getInfo');
    // 申请绑定身份证号
    Route::get('/apply','ApplyController@apply');
    // 获取我的绑定信息
    Route::get('/binding/getInfo','BindingController@getMyBindingInfo');

    Route::middleware(['admin'])->group(function (){
        // 获取总体信息
        Route::get('/console/status','ConsoleController@getStatus');
        // 服务器管理
        Route::get('/console/artisan','ConsoleController@artisan');
        // 角色管理
        Route::get('/role/{user}','RoleController@getRole');
        Route::post('/role/{user}','RoleController@setRole');
        // 通知管理
        Route::namespace('Blog\Admin')->prefix('blog')->group(function(){
            Route::post('/upload', 'ArticleController@uploadFileApi');
            Route::get('/articles', 'ArticleController@index');
            Route::post('/articles', 'ArticleController@store');
            Route::get('/articles/publish/{id}', 'ArticleController@publish');
            Route::get('/articles/top/{id}', 'ArticleController@top');
            Route::get('/articles/delete/{id}', 'ArticleController@destroy');
            Route::post('/articles/markdown', 'ArticleController@markdown');
            Route::get('/articles/{id}', 'ArticleController@show');
            Route::post('/import', 'ArticleController@import');
            Route::get('/tags', 'TagController@index');
            Route::get('/tags/delete/{id}', 'TagController@destroy');

//            Route::get('/comments', 'CommentController@index');
//            Route::get('/comments/delete/{id}', 'CommentController@destroy');
//            Route::get('/blacklist', 'BlacklistController@index');
//            Route::get('/blacklist/delete/{id}', 'BlacklistController@destroy');
//            Route::post('/blacklist', 'BlacklistController@store');
//
//            Route::get('/settings', 'SettingController@index');
//            Route::post('/settings', 'SettingController@store');
//
//            Route::get('/users/{id}', 'UserController@show');
//            Route::post('/users/{id}', 'UserController@update');
//            Route::post('/users/{id}/password', 'UserController@changePassword');
        });
    });


    Route::get('/tags/{name}', 'Blog\TagController@show')->name('tags.show')->where('name', '.*');


});
