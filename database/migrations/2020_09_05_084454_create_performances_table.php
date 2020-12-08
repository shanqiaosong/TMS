<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerformancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performances', function (Blueprint $table) {
            // 工作业绩和学术成果
            $table->id()->startingValue(1);
            $table->timestamps();
            $table->foreignId('teacher_basic_id')->constrained();
            $table->integer('year');
            $table->float('points');
            $table->integer('type');
            // 1. 工作业绩
            // 2. 学术成果
            $table->string('level');
            $table->string('title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('performances');
    }
}
