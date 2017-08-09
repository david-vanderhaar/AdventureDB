<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

// Adventurers
$factory->define(App\Adventurer::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name,
        'stamina' => $faker->numberBetween($min = 2, $max = 12),
        'attack' => $faker->numberBetween($min = 2, $max = 12),
        'defense' => $faker->numberBetween($min = 2, $max = 12),
        'treasure' => $faker->numberBetween($min = 0, $max = 5000),
        'active' => false,
        'monsters_defeated' => $faker->numberBetween($min = 0, $max = 100),
        'user_id' => $faker->numberBetween($min = 1, $max = 2), 
    ];
});

// Monsters
$factory->define(App\Monster::class, function (Faker\Generator $faker) {
/* Bounding Boxes
        ['Lexington'] = {
         'N': 38.211404,
         'S': 37.845256,
         'E': -84.282715,
         'W': -84.660415
        };

        ['LexingtonDowntown'] = {
          'N': 38.054707,
          'S': 38.036752,
          'E': -84.489183,
          'W': -84.503093
        };

        ['ChevyChase'] = {
          'N': 38.041314,
          'S': 37.990589,
          'E': -84.453474,
          'W': -84.515582
        };

        ['AwesomeInc'] = {
          'N': 38.0422392886,
          'S': 38.0416787663,
          'E': -84.4922482109,
          'W': -84.4929573798
        };
*/

    $monsterTypeIds = App\Monster_Type::all()->pluck('id')->all();

    return [
        'lat' => $faker->latitude($min = 38.0416787663, $max = 38.0422392886),
        'lng' => $faker->longitude($min = -84.4929573798, $max = -84.4922482109),
        'treasure' => $faker->numberBetween($min = 0, $max = 50),
        'adventurers_defeated' => 0,
        'active' => false,
        'monster_type_id' => $faker->randomElement($monsterTypeIds),

    ];
});

// Treasures
$factory->define(App\Treasure::class, function (Faker\Generator $faker) {
/* Bounding Boxes
        ['Lexington'] = {
         'N': 38.211404,
         'S': 37.845256,
         'E': -84.282715,
         'W': -84.660415
        };

        ['LexingtonDowntown'] = {
          'N': 38.054707,
          'S': 38.036752,
          'E': -84.489183,
          'W': -84.503093
        };

        ['ChevyChase'] = {
          'N': 38.041314,
          'S': 37.990589,
          'E': -84.453474,
          'W': -84.515582
        };

        ['AwesomeInc'] = {
          'N': 38.0422392886,
          'S': 38.0416787663,
          'E': -84.4922482109,
          'W': -84.4929573798
        };
 
*/

    $treasureTypeIds = App\Treasure_Type::all()->pluck('id')->all();

    return [
        'lat' => $faker->latitude($min = 38.0416787663, $max = 38.0422392886),
        'lng' => $faker->longitude($min = -84.4929573798, $max = -84.4922482109),
        'treasure_type_id' => $faker->randomElement($treasureTypeIds),

    ];
});