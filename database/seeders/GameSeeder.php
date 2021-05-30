<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('games')->insert([
            'title' => 'Rocket League',
            'description' => 'Rocket League is a vehicular soccer video game developed and published by Psyonix.'
        ]);

        DB::table('games')->insert([
            'title' => 'League of Legends',
            'description' => 'League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games.'
        ]);

        DB::table('games')->insert([
            'title' => 'Counter-Strike: Global Offensive',
            'description' => 'Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment.'
        ]);

        DB::table('games')->insert([
            'title' => 'Valorant',
            'description' => 'Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows.'
        ]);

        DB::table('games')->insert([
            'title' => 'Apex Legends',
            'description' => 'Apex Legends is a free-to-play hero battle royale game developed by Respawn Entertainment and published by Electronic Arts.'
        ]);

        DB::table('games')->insert([
            'title' => 'Overwatch',
            'description' => 'Overwatch is a 2016 team-based multiplayer first-person shooter developed and published by Blizzard Entertainment.'
        ]);

        DB::table('games')->insert([
            'title' => 'TrackMania',
            'description' => 'TrackMania is a series of racing games for Windows, PlayStation 4, Xbox One, Nintendo DS and Wii developed by Nadeo and Firebrand Games.'
        ]);

    }
}
