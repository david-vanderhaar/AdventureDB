<?php

use Illuminate\Database\Seeder;

class AdventurerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Adventurer::class, 10)->create();
    }
}
