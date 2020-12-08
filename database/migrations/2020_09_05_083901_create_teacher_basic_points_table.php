<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeacherBasicPointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teacher_basic_points', function (Blueprint $table) {
            $table->id()->startingValue(1);
            $table->timestamps();
            $table->foreignId('teacher_basic_id')->constrained();
            $table->integer('year');
            $table->float('positionPoints')->default(0); //岗位职责加分
            $table->float('workloadPoints')->default(0); //工作量加分
            $table->float('assessmentPoints')->default(0); //考核加分
            $table->float('moralityPoints')->default(0); //师德师风

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teacher_basic_points');
    }
}
