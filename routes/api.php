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

Route::resource('adventurer', 'AdventurerController');

//Control adventure activation (active on embark)
Route::patch('adventurer/activate/{adventurer}', 'AdventurerController@activate');
Route::patch('adventurer/deactivate/{adventurer}', 'AdventurerController@deactivate');

Route::resource('monster', 'MonsterController');

//Control adventure activation (active on embark)
Route::patch('monster/activate/{monster}', 'MonsterController@activate');
Route::patch('monster/deactivate/{monster}', 'MonsterController@deactivate');

Route::resource('treasure', 'TreasureController');
