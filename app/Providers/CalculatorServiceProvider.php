<?php

namespace App\Providers;

use App\Http\Services\CalculatorService;
use Illuminate\Support\ServiceProvider;

class CalculatorServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
        $this->app->bind('App\Http\Services\CalculatorService', function () {
            return new CalculatorService(
                $this->app->make('App\Http\Services\ConfigService')
            );
        });
    }
}
