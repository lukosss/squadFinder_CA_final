<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        $userId = auth('sanctum')->user()->id;

        return [
            'first_name' => 'required|max:20',
            'email' => 'required|email|unique:users,email,' . ($this->route('user')->id ?? $userId),
            'password' => 'sometimes|string|min:6',
        ];
    }
}
