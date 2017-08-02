<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class MonsterTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('monster__types')->insert([
		    'name' => 'Bear',
		    'stamina' => 3,
		    'defense' => 5,
		    'attack' => 9,
		    'created_at' => Carbon::now(),
		    'updated_at' => Carbon::now(),
		]);

		DB::table('monster__types')->insert([
		    'name' => 'Slime',
		    'stamina' => 1,
		    'defense' => 2,
		    'attack' => 3,
		    'created_at' => Carbon::now(),
		    'updated_at' => Carbon::now(),
		]);

		DB::table('monster__types')->insert([
		    'name' => 'Bandit',
		    'stamina' => 5,
		    'defense' => 4,
		    'attack' => 7,
		    'created_at' => Carbon::now(),
		    'updated_at' => Carbon::now(),
		]);
    }
}
