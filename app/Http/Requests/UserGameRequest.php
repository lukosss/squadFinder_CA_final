<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserGameRequest extends FormRequest
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
        return [
            'game_id' => 'required|integer',
            'user_id' => 'required|integer',
            'rank_id' => 'required|integer',
            'ingame_name' => 'nullable|max:25',
            'comment' => 'nullable|max:150',
        ];
    }
}
