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
        'monsters_defeated' => $faker->numberBetween($min = 0, $max = 100),
        'user_id' => $faker->numberBetween($min = 1, $max = 2),
    ];
});

// Monster_Types
$factory->define(App\Monster_Type::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name,
        'stamina' => $faker->numberBetween($min = 2, $max = 12),
        'attack' => $faker->numberBetween($min = 2, $max = 12),
        'defense' => $faker->numberBetween($min = 2, $max = 12),
        'treasure' => $faker->numberBetween($min = 0, $max = 5000),
        'monsters_defeated' => $faker->numberBetween($min = 0, $max = 100),
        'user_id' => $faker->numberBetween($min = 1, $max = 2),
    ];
});

// Monsters
$factory->define(App\Monster::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name,
        'stamina' => $faker->numberBetween($min = 2, $max = 12),
        'attack' => $faker->numberBetween($min = 2, $max = 12),
        'defense' => $faker->numberBetween($min = 2, $max = 12),
        'treasure' => $faker->numberBetween($min = 0, $max = 5000),
        'monsters_defeated' => $faker->numberBetween($min = 0, $max = 100),
        'user_id' => $faker->numberBetween($min = 1, $max = 2),
    ];
});