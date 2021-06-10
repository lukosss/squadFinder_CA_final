<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'last_name' => 'nullable|max:25',
            'city_id' => 'integer',
            'role_id' => 'integer',
            'display_name' => 'nullable|max:30',
            'discord_username' => 'nullable|max:30',
            'steam_username' => 'nullable|max:30',
            'epic_username' => 'nullable|max:30',
            'origin_username' => 'nullable|max:30',
            'bio' => 'nullable|max:250',
            'email' => 'required|email|unique:users,email,' . ($this->route('user')->id ?? $userId),
            'password' => 'sometimes|string|min:6',
        ];
    }
}
