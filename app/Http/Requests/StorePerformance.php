<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePerformance extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'teacher_basic_id'=>'required',
            'year'=>'digits:4|required',
            'points'=>'numeric',
            'type'=>'in:1,2|required',
            'level'=>'required',
            'title'=>'required'
        ];
    }
    public function attributes()
    {
        return [
            'teacher_basic_id'=>'教师编号',
            'year'=>'年份',
            'points'=>'加分',
            'type'=>'类型',
            'level'=>'等级',
            'title'=>'标题'
        ];
    }
}
