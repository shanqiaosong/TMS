<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    //
    protected $fillable=[
        'created_at',
        'updated_at',
        'teacher_basic_id',
        'year',
        'points',
        'type',
        'level',
        'title'
    ];
}
