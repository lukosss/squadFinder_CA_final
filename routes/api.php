<?php

use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\GameUserController;
use App\Http\Controllers\LoginControllerFront;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//User
Route::get('/users', [DashboardController::class, 'index']);
Route::prefix('/user')->group(function () {
    Route::get('/me', [ProfileController::class, 'show'])->middleware('auth:sanctum');
    Route::patch('/{id}', [ProfileController::class, 'update'])->middleware('auth:sanctum');
});

//Cities
Route::get('/cities', [ProfileController::class, 'getCities']);

//Games
Route::get('/games', [GameController::class, 'index']);
Route::get('/games/{id}', [GameController::class, 'show']);

//Assigned games
Route::prefix('/selected-games')->group(function () {
    Route::get('/', [DashboardController::class, 'indexSelected']);
    Route::get('/my-games', [DashboardController::class, 'indexMySelected'])->middleware('auth:sanctum');
    Route::patch('/my-games/{id}', [DashboardController::class, 'update'])->middleware('auth:sanctum');
    Route::post('/add-game', [GameUserController::class, 'store'])->middleware('auth:sanctum');
    Route::delete('/delete/{id}', [DashboardController::class, 'destroy'])->middleware('auth:sanctum');
});
