<?php

use Illuminate\Database\Seeder;

class MonsterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Monster::class, 50)->create();
    }
}
