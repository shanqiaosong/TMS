<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePunishmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('punishments', function (Blueprint $table) {
            $table->id()->startingValue(1);
            $table->timestamps();

            $table->foreignId('teacher_basic_id')->constrained();
            $table->integer('year');
            $table->float('points');
            $table->integer('type');
            // 1. 无故漏岗
            // 2. 师德师风
            // 3. 业绩学术造假
            // 4. 病事假超2月
            $table->integer('penaltyYears')->nullable();
            $table->string('description')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('punishments');
    }
}
