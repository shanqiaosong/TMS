<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TeacherBasicPoint extends Model
{
    //
    protected $fillable=[
        'teacher_basic_id',
        'year',
        'positionPoints' ,
        'assessmentPoints',
        'workloadPoints',
        'moralityPoints',
    ];
}
