<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplyIdnum extends Model
{
    protected $table='apply_idnum';
    use HasFactory;
    protected $fillable=[
        'user_id',
        'status'
    ];
}
