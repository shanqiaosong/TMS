<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CalcResult extends Model
{
    //
    protected $fillable=[
        'teacher_basic_id',
        'year',
        'score',
        'inPenalty',
        'rank',
        'group',
        'name',
        'IDNum',
        'detail',
        'fromYear'
    ];
    protected $casts = [
        'detail' => 'array'
    ];
}
