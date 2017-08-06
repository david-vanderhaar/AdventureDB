<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/*
|--------------------------------------------------------------------------
| Adventurer Routes
|--------------------------------------------------------------------------
|
*/
Route::resource('adventurer', 'AdventurerController');

//Get Users Adventurers
Route::get('adventurer/user/{user}', 'AdventurerController@userIndex');

//Control adventure activation (active on embark)
Route::patch('adventurer/activate/{adventurer}', 'AdventurerController@activate');
Route::patch('adventurer/deactivate/{adventurer}', 'AdventurerController@deactivate');

/*
|--------------------------------------------------------------------------
| Monster Routes
|--------------------------------------------------------------------------
|
*/

Route::resource('monster', 'MonsterController');

//Get Monsters By Within Range of Submitted Position of User
Route::get('monster/{pos}', 'MonsterController@indexInRange');
Route::get('monster/{lat}/{lng}/{distance}', 'MonsterController@monstersInRange');

//Control adventure activation (active on embark)
Route::patch('monster/activate/{monster}', 'MonsterController@activate');
Route::patch('monster/deactivate/{monster}', 'MonsterController@deactivate');



/*
|--------------------------------------------------------------------------
| Treasure Routes
|--------------------------------------------------------------------------
|
*/

Route::resource('treasure', 'TreasureController');
