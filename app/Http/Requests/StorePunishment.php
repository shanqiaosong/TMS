<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePunishment extends FormRequest
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
            'type'=>'in:1,2,3,4|required',
            'penaltyYears'=>'integer|required',
            'description'=>'required'
        ];
    }
    public function attributes()
    {
        return [
            'teacher_basic_id'=>'教师编号',
            'year'=>'年份',
            'points'=>'扣分',
            'type'=>'类型',
            'penaltyYears'=>'惩罚年限',
            'description'=>'描述'
        ];
    }
}
