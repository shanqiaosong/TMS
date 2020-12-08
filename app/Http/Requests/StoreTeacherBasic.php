<?php

namespace App\Http\Requests;

use App\Http\Services\IDNumService;
use Illuminate\Foundation\Http\FormRequest;

class StoreTeacherBasic extends FormRequest
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
    public function rules(IDNumService $IDNumValidate)
    {
        return [
            //
            'name'=>'required|max:10|min:2',
            'IDNum'=>['required','max:18','min:18',function ($attribute, $value, $fail) use($IDNumValidate) {
                if (!$IDNumValidate->isChinaIDCard($value)) {
                    $fail('身份证号不合法。');
                }
            },],
            'group'=>'in:1,2,3,4|required',
            'rank'=>'in:1,2,3,4,5|required',
            'fromYear'=>'digits:4|required'
        ];
    }

    public function attributes()
    {
        return [
            'name' => '姓名',
            'IDNum'=>'身份证号',
            'group'=>'教师类别',
            'rank'=>'教师评级',
            'fromYear'=>'起始年份'
        ];
    }
}
