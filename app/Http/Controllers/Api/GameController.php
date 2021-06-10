<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GameController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return response(Game::with('ranks', 'images')->get());
    }

    /**
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function show(Request $request, $id): Response
    {
        $game = Game::query();

        if ($request->ranks) {
            $game->with('ranks');
        }

        if ($request->images) {
            $game->with('images');
        }

        $game = $game->where('id', $id)->first();

        if (!$game) {
            return response(['status' => 404, 'message' => 'game not found']);
        }

        return response($game);
    }
}
