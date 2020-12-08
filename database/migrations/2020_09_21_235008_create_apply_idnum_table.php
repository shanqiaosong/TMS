<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplyIdnumTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apply_idnum', function (Blueprint $table) {
            $table->id()->startingValue(1);
            $table->timestamps();
            $table->foreignId('user_id');
            $table->string('IDNum');
            $table->integer('status');
            // 1: applying
            // 2: approved
            // 3: denied
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apply_idnum');
    }
}
