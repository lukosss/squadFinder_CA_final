<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameRelationshipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_relationships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('game_id')->constrained('games_lists', 'id');
            $table->foreignId('user_id')->constrained('users', 'id');
            $table->foreignId('rank_id')->nullable()->constrained('ranks', 'id');
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
        Schema::dropIfExists('game_relationships');
    }
}
