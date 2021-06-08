<?php

use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\GameUserController;
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
    Route::post('/store', [UserController::class, 'store']);
    Route::patch('/{id}', [ProfileController::class, 'update'])->middleware('auth:sanctum');
    Route::delete('/{id}', [UserController::class, 'destroy']);
});

//Cities
Route::get('/cities', [ProfileController::class, 'getCities']);

//Games
Route::get('/games', [GameController::class, 'index']);
Route::get('/games/{id}', [GameController::class, 'show']);

//Assigned games
Route::get('/selected-games', [DashboardController::class, 'indexSelected']);
Route::get('/selected-games/my-games', [DashboardController::class, 'indexMySelected'])->middleware('auth:sanctum');
Route::patch('/selected-games/my-games/{id}', [DashboardController::class, 'update'])->middleware('auth:sanctum');
Route::post('/selected-games/add-game', [GameUserController::class, 'store'])->middleware('auth:sanctum');
Route::delete('/selected-games/delete/{id}', [DashboardController::class, 'destroy'])->middleware('auth:sanctum');
