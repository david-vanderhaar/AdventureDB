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

		DB::table('monster__types')->insert([
		    'name' => 'Elton',
		    'stamina' => 5,
		    'defense' => 4,
		    'attack' => 7,
		    'created_at' => Carbon::now(),
		    'updated_at' => Carbon::now(),
		]);
		/*
		$m = new App\Monster_type;
		$m->name = "Elton";
		$m->stamina = 15;
		$m->defense = 1;
		$m->attack = 1;
		$m->created_at = Carbon\Carbon::now();
		$m->updated_at = Carbon\Carbon::now();
		$m->save();
		*/

		DB::table('monster__types')->insert([
		    'name' => 'Janine',
		    'stamina' => 10,
		    'defense' => 10,
		    'attack' => 10,
		    'created_at' => Carbon::now(),
		    'updated_at' => Carbon::now(),
		]);

		/*
		$m = new App\Monster_type;
		$m->name = "Janine";
		$m->stamina = 10;
		$m->defense = 10;
		$m->attack = 10;
		$m->created_at = Carbon\Carbon::now();
		$m->updated_at = Carbon\Carbon::now();
		$m->save();
		*/
    }
}
