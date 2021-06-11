<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Game;
use App\Models\GameUser;
use App\Models\Rank;
use App\Models\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index(): Renderable
    {
        $users = User::get();
        $games = Game::get();
        $gamesAdded = GameUser::get();
        $ranks = Rank::get();
        $cities = City::get();

        $mostPopularGameId = GameUser::select('game_id')
            ->groupBy('game_id')
            ->orderByRaw('COUNT(*) DESC')
            ->limit(1)
            ->get();

        $mostPopularGame = Game::find($mostPopularGameId);

        $mostPopularGamePlayers = GameUser::where('game_id', 4)->get();

        $latestUser = User::latest()->first();

        $latestGame = Game::latest()->first();

        if (Auth::user()->role_id === 1) {
            return view('admin.home', compact('users', 'games', 'gamesAdded', 'ranks', 'cities', 'mostPopularGame', 'mostPopularGameId', 'mostPopularGamePlayers', 'latestUser', 'latestGame'));
        }

        return view('home');
    }
}
