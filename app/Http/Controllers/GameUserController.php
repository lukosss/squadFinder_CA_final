<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\GameUser;
use App\Models\Rank;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GameUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        $gameUsers = GameUser::with(['game', 'rank', 'user'])->get();
        return view('admin.userGames.index', compact('gameUsers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(): View
    {
        return $this->edit(new GameUser());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        return $this->update($request, new GameUser());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param GameUser $gameUser
     * @return View
     */
    public function edit(GameUser $gameUser): View
    {
        $model = $gameUser->load(['rank','user','game']);
        $games = Game::get();
        $ranks = Rank::get();
        $users = User::get();

        return view('admin.userGames.edit', compact('model', 'games', 'ranks', 'users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param GameUser $gameUser
     * @return RedirectResponse
     */
    public function update(Request $request, GameUser $gameUser): RedirectResponse
    {
        $gameUser->fill($request->all())->save();
        return redirect()->route('admin.game-user.index');
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function selections(Request $request): Response
    {
        $gameId = $request->modelId;
        $term = $request->searchTerm;

        $ranks = Rank::with('games')->whereHas('games', function ($query) use ($gameId) {
            $query->where('game.id', $gameId);
        })->where(function ($query) use ($term) {
            return $term ? $query->where('title', 'like', $term . '%') : $query;
        })->get();

        $results = [];
        foreach ($ranks as $rank) {
            $results[] = [
                'id' => $rank->id,
                'text' => $rank->rank_name
            ];
        }

        return response($results);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $game = GameUser::find($id);
        $game->delete();

        return redirect()->route('admin.game-user.index');
    }
}
