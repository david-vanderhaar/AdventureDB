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

// Monster Factories

$factory->define(App\Monster::class, function (Faker\Generator $faker) { //default seed is downtown lexington
/* Bounding Boxes

        ['LexingtonDowntown'] = {
          'N': 38.054707,
          'S': 38.036752,
          'E': -84.489183,
          'W': -84.503093
        };

*/

    $monsterTypeIds = App\Monster_Type::all()->pluck('id')->all();

    return [
        'lat' => $faker->latitude($min = 38.036752, $max = 38.054707),
        'lng' => $faker->longitude($min = -84.503093, $max = -84.489183),
        'treasure' => $faker->numberBetween($min = 0, $max = 50),
        'adventurers_defeated' => 0,
        'active' => false,
        'monster_type_id' => $faker->randomElement($monsterTypeIds),

    ];
});

//Monster Type States
$factory->state(App\Monster::class, 'bear', function (Faker\Generator $faker) {
/*

        Monster Types
        Bear = 1,
        Slime = 2,
        Bandit = 3

*/

    return [

        'monster_type_id' => 1

    ];
});

$factory->state(App\Monster::class, 'slime', function (Faker\Generator $faker) {
/*

        Monster Types
        Bear = 1,
        Slime = 2,
        Bandit = 3

*/

    return [

        'monster_type_id' => 2

    ];
});

$factory->state(App\Monster::class, 'bandit', function (Faker\Generator $faker) {
/*

        Monster Types
        Bear = 1,
        Slime = 2,
        Bandit = 3

*/

    return [

        'monster_type_id' => 3

    ];
});

$factory->state(App\Monster::class, 'janine', function (Faker\Generator $faker) {


    return [

        'monster_type_id' => 4

    ];
});

$factory->state(App\Monster::class, 'elton', function (Faker\Generator $faker) {


    return [

        'monster_type_id' => 5

    ];
});



//Location States

$factory->state(App\Monster::class, 'lexington', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['Lexington'] = {
         'N': 38.211404,
         'S': 37.845256,
         'E': -84.282715,
         'W': -84.660415
        };
*/

    return [
        'lat' => $faker->latitude($min = 37.845256, $max = 38.211404),
        'lng' => $faker->longitude($min = -84.660415, $max = -84.282715)

    ];
});

$factory->state(App\Monster::class, 'lexingtonDowntown', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['LexingtonDowntown'] = {
          'N': 38.054707,
          'S': 38.036752,
          'E': -84.489183,
          'W': -84.503093
        };
*/

    return [
        'lat' => $faker->latitude($min = 38.036752, $max = 38.054707),
        'lng' => $faker->longitude($min = -84.503093, $max = -84.489183),
    ];
});

$factory->state(App\Monster::class, 'chevyChase', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['ChevyChase'] = {
          'N': 38.041314,
          'S': 37.990589,
          'E': -84.453474,
          'W': -84.515582
        };
*/

    return [
        'lat' => $faker->latitude($min = 37.990589, $max = 38.041314),
        'lng' => $faker->longitude($min = -84.515582, $max = -84.453474),
    ];
});

$factory->state(App\Monster::class, 'awesomeInc', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['AwesomeInc'] = {
          'N': 38.0422392886,
          'S': 38.0416787663,
          'E': -84.4922482109,
          'W': -84.4929573798
        };
*/

    return [
        'lat' => $faker->latitude($min = 38.0416787663, $max = 38.0422392886),
        'lng' => $faker->longitude($min = -84.4929573798, $max = -84.4922482109),
    ];
});

$factory->state(App\Monster::class, 'koury', function (Faker\Generator $faker) {
    return [
        'lat' => $faker->latitude($min = 36.0363574859, $max = 36.0431096281),
        'lng' => $faker->longitude($min = -79.8425196688, $max = -79.8320975197),
    ];
});
// Treasures

$factory->define(App\Treasure::class, function (Faker\Generator $faker) {
/* Bounding Boxes

        ['LexingtonDowntown'] = {
          'N': 38.054707,
          'S': 38.036752,
          'E': -84.489183,
          'W': -84.503093
        };

*/

    $treasureTypeIds = App\Treasure_Type::all()->pluck('id')->all();

    return [
        'lat' => $faker->latitude($min = 38.036752, $max = 338.054707),
        'lng' => $faker->longitude($min = -84.503093, $max = -84.489183),
        'treasure_type_id' => $faker->randomElement($treasureTypeIds),

    ];
});

//Treasure Type States
$factory->state(App\Treasure::class, 'copper', function (Faker\Generator $faker) {
/*

        Treasure Types
        copper = 1,
        silver = 2,
        gold = 3
        gem = 4

*/

    return [

        'treasure_type_id' => 1

    ];
});

$factory->state(App\Treasure::class, 'silver', function (Faker\Generator $faker) {
/*

        Treasure Types
        copper = 1,
        silver = 2,
        gold = 3
        gem = 4

*/

    return [

        'treasure_type_id' => 2

    ];
});

$factory->state(App\Treasure::class, 'gold', function (Faker\Generator $faker) {
/*

        Treasure Types
        copper = 1,
        silver = 2,
        gold = 3
        gem = 4

*/

    return [

        'treasure_type_id' => 3

    ];
});

$factory->state(App\Treasure::class, 'gem', function (Faker\Generator $faker) {
/*

        Treasure Types
        copper = 1,
        silver = 2,
        gold = 3
        gem = 4

*/

    return [

        'treasure_type_id' => 4

    ];
});


//Location States

$factory->state(App\Treasure::class, 'lexington', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['Lexington'] = {
         'N': 38.211404,
         'S': 37.845256,
         'E': -84.282715,
         'W': -84.660415
        };
*/

    return [
        'lat' => $faker->latitude($min = 37.845256, $max = 38.211404),
        'lng' => $faker->longitude($min = -84.660415, $max = -84.282715)

    ];
});

$factory->state(App\Treasure::class, 'lexingtonDowntown', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['LexingtonDowntown'] = {
          'N': 38.054707,
          'S': 38.036752,
          'E': -84.489183,
          'W': -84.503093
        };
*/

    return [
        'lat' => $faker->latitude($min = 38.036752, $max = 38.054707),
        'lng' => $faker->longitude($min = -84.503093, $max = -84.489183),
    ];
});

$factory->state(App\Treasure::class, 'chevyChase', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['ChevyChase'] = {
          'N': 38.041314,
          'S': 37.990589,
          'E': -84.453474,
          'W': -84.515582
        };
*/

    return [
        'lat' => $faker->latitude($min = 37.990589, $max = 38.041314),
        'lng' => $faker->longitude($min = -84.515582, $max = -84.453474),
    ];
});

$factory->state(App\Treasure::class, 'awesomeInc', function (Faker\Generator $faker) {
/* Bounding Boxes
        ['AwesomeInc'] = {
          'N': 38.0422392886,
          'S': 38.0416787663,
          'E': -84.4922482109,
          'W': -84.4929573798
        };
*/

    return [
        'lat' => $faker->latitude($min = 38.0416787663, $max = 38.0422392886),
        'lng' => $faker->longitude($min = -84.4929573798, $max = -84.4922482109),
    ];
});

$factory->state(App\Treasure::class, 'koury', function (Faker\Generator $faker) {

    return [
        'lat' => $faker->latitude($min = 36.0363574859, $max = 36.0431096281),
        'lng' => $faker->longitude($min = -79.8425196688, $max = -79.8320975197),
    ];
});
