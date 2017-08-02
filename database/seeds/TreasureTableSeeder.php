<?php

use Illuminate\Database\Seeder;

class TreasureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Treasure::class, 100)->create();
    }
}
