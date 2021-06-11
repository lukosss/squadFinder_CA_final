<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('game_id')->constrained('games', 'id')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('rank_id')->nullable()->constrained('ranks', 'id')->onDelete('cascade');
            $table->string('ingame_name')->nullable();
            $table->string('comment')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_users');
    }
}
