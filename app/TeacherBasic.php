<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TeacherBasic extends Model
{
    //
    protected $fillable=[
        'name',
        'IDNum',
        'fromYear',
        'rank',
        'group',
        'user_id'
    ];


    public function points()
    {
        return $this->hasMany('App\TeacherBasicPoint');
    }


    static public function getAllInfo($teacherid){
        $years= TeacherBasicPoint::where('teacher_basic_id',$teacherid)
            ->orderBy('year', 'desc')
            ->get();
        $result=[];
        foreach ($years as $record){
            $performances=Performance::where('teacher_basic_id',$teacherid)
                ->where('year',$record->year)
                ->orderBy('created_at','asc')
                ->get();
            $punishments=Punishment::where('teacher_basic_id',$teacherid)
                ->where('year',$record->year)
                ->orderBy('created_at','asc')
                ->get();


            $record->performances=$performances;
            $record->punishments=$punishments;
            array_push($result,$record);
        }
        return $result;
    }

}
