<?php

namespace App\Providers;

use App\CalcResult;
use App\TeacherBasic;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();


        //
        Gate::define('admin', function ($user) {
            return $user->role&&$user->role->roles==1;
        });

        Gate::define('fill', function ($user) {
            return $user->role&&$user->role->roles==2;
        });

        Gate::define('disabled', function ($user) {
            return $user->role&&$user->role->roles==4;
        });

        Gate::define('seeDetail', function ($user,$id) {
            if (($user->role)&&($user->role->roles==2||$user->role->roles==1)){
                return true;
            }
            if (TeacherBasic::find(CalcResult::find($id)->teacher_basic_id)->user_id==$user->id){
                return true;
            }
            return false;
        });

    }
}
