<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RankController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::prefix('admin')
//    ->middleware('auth')
    ->name('admin.')->group(function(){
        Route::get('/', [HomeController::class, 'index']);
        Route::get('home', [HomeController::class, 'index']);
        Route::resource('users',UserController::class);
        Route::resource('games',GameController::class);
        Route::resource('cities',CityController::class);
        Route::resource('ranks',RankController::class);

    });
