<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GameUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RankController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginControllerFront;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::post('/loginFront', [LoginControllerFront::class, 'authenticate']);
Route::post('/registerFront', [LoginControllerFront::class, 'register']);

Route::prefix('admin')
    ->middleware('auth')
    ->name('admin.')->group(function(){
        Route::get('/', [HomeController::class, 'index']);
        Route::get('home', [HomeController::class, 'index']);
        Route::resource('users',UserController::class);
        Route::resource('games',GameController::class);
        Route::resource('cities',CityController::class);
        Route::resource('ranks',RankController::class);
        Route::resource('game-user',GameUserController::class);

        Route::get('game-users/selections',[GameUserController::class,'selections'])->name('game-user.selections');

    });
