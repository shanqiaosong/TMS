<?php

namespace App\Providers;

use App\Http\Services\IDNumService;
use Illuminate\Support\ServiceProvider;

class IDNumServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind('App\Http\Services\IDNumService', function () {
            return new IDNumService();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
