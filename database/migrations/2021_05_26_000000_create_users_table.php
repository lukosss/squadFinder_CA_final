<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->default(2)->constrained('roles', 'id');
            $table->string('first_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->foreignId('city_id')->nullable()->constrained('cities', 'id');
            $table->string('last_name')->nullable();
            $table->string('display_name')->nullable();
            $table->string('bio')->nullable();
            $table->string('avatar_logo')->nullable();
            $table->string('discord_username')->nullable();
            $table->string('steam_username')->nullable();
            $table->string('epic_username')->nullable();
            $table->string('origin_username')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
