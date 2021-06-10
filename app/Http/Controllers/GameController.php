<?php

namespace App\Http\Controllers;

use App\Http\Requests\GameRequest;
use App\Models\Game;
use App\Models\Rank;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Throwable;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        $games = Game::with('ranks', 'images')->get();
        return view('admin.games.index', compact('games'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new Game());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param GameRequest $request
     * @return RedirectResponse
     * @throws Throwable
     */
    public function store(GameRequest $request): RedirectResponse
    {
        return $this->update($request, new Game());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Game $game
     * @return View
     */
    public function edit(Game $game): View
    {
        $model = $game->load('ranks');
        $ranks = Rank::get();
        return view('admin.games.edit', compact('model', 'ranks'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param GameRequest $request
     * @param Game $game
     * @return RedirectResponse
     * @throws Throwable
     */
    public function update(GameRequest $request, Game $game): RedirectResponse
    {
        $game->updateGames($request);
        $game->createGame($request);
        return redirect()->route('admin.games.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(int $id): RedirectResponse
    {
        $game = Game::find($id);
        $game->delete();

        return redirect()->route('admin.games.index');
    }
}
