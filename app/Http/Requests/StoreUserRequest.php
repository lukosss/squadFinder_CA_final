<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest
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

        $userId = auth('sanctum')->user()->id;

        return [

            'first_name' => 'required|max:20',
            'email' => 'required|email|unique:users,email,' . ($userId ?? ''),
            'password' => 'sometimes|string|min:6',
//            'avatar_logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:1024'
        ];
    }
}
