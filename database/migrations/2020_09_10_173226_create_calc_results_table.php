<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalcResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calc_results', function (Blueprint $table) {
            $table->id()->startingValue(1);
            $table->timestamps();
            $table->foreignId('teacher_basic_id');
            $table->integer('year');
            $table->integer('fromYear');
            $table->float('score');
            $table->boolean('inPenalty');
            $table->integer('rank');
            $table->integer('group');
            $table->string('name');
            $table->string('IDNum');
            $table->json('detail');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calc_results');
    }
}
