<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class TreasureTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('treasure__types')->insert([
		    'name' => 'copper',
		    'value' => 1,
		    
		    
		]);

		DB::table('treasure__types')->insert([
		    'name' => 'silver',
		    'value' => 5,
		    
		]);

		DB::table('treasure__types')->insert([
		    'name' => 'gold',
		    'value' => 20,
		    
		]);

		DB::table('treasure__types')->insert([
		    'name' => 'gem',
		    'value' => 100,
		    
		]);
    }
}
