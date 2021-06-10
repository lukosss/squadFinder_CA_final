<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GameUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DashboardController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return response(User::with('images')->get());
    }

    /**
     * @return Response
     */
    public function indexSelected(): Response
    {
        return response(GameUser::with(['game', 'rank', 'user'])->get());
    }

    /**
     * @return Response
     */
    public function indexMySelected(): Response
    {
        $userId = auth('sanctum')->user()->id;
        return response(GameUser::with(['game', 'rank', 'user'])->where('user_id', $userId)->get());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function update(Request $request, $id): Response
    {
        $gameUserId = $id;
        $gameUser = GameUser::findOrFail($gameUserId);
        $gameUser->fill($request->all())->save();
        return response(['status' => 'ok', 'message' => 'Updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy(int $id): Response
    {
        $game = GameUser::find($id);
        $game->delete();

        return response(['status' => 'ok', 'message' => 'Deleted successfully']);
    }
}
