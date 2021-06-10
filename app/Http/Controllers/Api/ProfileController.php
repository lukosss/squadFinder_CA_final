<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getCities(): Response
    {
        return response(City::get());
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(): Response
    {
        $userId = auth('sanctum')->user()->id;
        return User::where('id', $userId)->with('role', 'images')->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function update(Request $request): Response
    {
        $userId = auth('sanctum')->user()->id;
        $user = User::findOrFail($userId);
        $user->updateUser($request);
        return response(['status' => 'ok', 'message' => 'Updated successfully']);
    }
}
