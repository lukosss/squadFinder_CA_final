<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\GameUser;
use App\Models\Rank;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(): View
    {
        return $this->edit(new Game());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        return $this->update($request, new Game());
    }

    /**
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function show(Request $request, $id): Response
    {
        $user = User::query();

        if ($request->images) {
            $user->with('images');
        }

        $user = $user->where('id', $id)->first();

        if (!$user) {
            return response(['status' => 404, 'message' => 'game not found']);
        }

        return response($user);
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
        return view('admin.games.edit', compact('model','ranks'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Game $game
     * @return RedirectResponse
     */
    public function update(Request $request, Game $game): RedirectResponse
    {
        $game->updateGames($request);
        $game->createGame($request);
        return redirect()->route('admin.games.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $game = Game::find($id);
        $game->delete();

        return redirect()->route('admin.games.index');
    }
}
