<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeacherBasicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teacher_basics', function (Blueprint $table) {
            $table->id()->startingValue(1);
            $table->timestamps();
            $table->string('name');
            $table->string('IDNum')->unique();
            // uuid
            $table->foreignId('user_id')->nullable()->constrained();
            // bind user id
            $table->integer('group');
            //1. 领导
            //2. 考试学科任课教师
            //3. 非考试学科任课教师
            //4. 教辅
            $table->integer('rank');
            //1. 初级教师 -> 二级教师
            //2. 二级教师 -> 一级教师
            //3. 一级教师 -> 高级教师
            //4. 高级教师 -> 正高级教师
            $table->integer('fromYear');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teacher_basics');
    }
}
