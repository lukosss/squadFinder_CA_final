<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ranks')->insert([
            'rank_name' => 'Unranked'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Bronze I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Bronze II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Bronze III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Silver I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Silver II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Silver III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Gold I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Gold II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Gold III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Platinum I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Platinum II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Platinum III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Diamond I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Diamond II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Diamond III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Champion I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Champion II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Champion III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Grand Champion I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Grand Champion II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Grand Champion III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Supersonic Legend'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Iron I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Iron II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Iron III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Immortal I'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Immortal II'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Immortal III'
        ]);

        DB::table('ranks')->insert([
            'rank_name' => 'Valorant'
        ]);


    }
}
