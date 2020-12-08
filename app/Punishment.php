<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Punishment extends Model
{
    //
    protected $fillable=[
        'teacher_basic_id',
        'year',
        'points',
        'type',
        'penaltyYears',
        'description',
    ];
}
