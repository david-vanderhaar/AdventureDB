<?php

namespace App\Http\Controllers;

use App\Monster;
use Illuminate\Http\Request;

class MonsterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Get all monster
        $monsters = Monster::all();

        //Attach relevant monster type info
        foreach($monsters as $monster){
            $monsterType = $monster->monsterType()->get();
            $monster['type'] = $monsterType;
        }

        return $monsters;
    }

    public function monstersInRange($lat, $lng, $distance) { //returns monsters within distance (km)
            // return $lat.$lng.' '.$distance;
            $monsters = Monster::all()->filter(function ($monster) use ($lat, $lng, $distance) {
                $actual = 6371 * acos(
                    cos(deg2rad($lat)) * cos(deg2rad($monster->lat))
                    * cos(deg2rad($monster->lng) - deg2rad($lng))
                    + sin(deg2rad($lat)) * sin(deg2rad($monster->lat))
                );
                // var_dump($actual < $distance);
                return $actual < $distance;
            });

            $monsters = $monsters->values();

            //Attach relevant monster type info
            foreach($monsters as $monster){
                $monsterType = $monster->monsterType()->get();
                $monster['type'] = $monsterType;
            }

            return $monsters;
        }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function show(Monster $monster)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function edit(Monster $monster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Monster $monster)
    {
        //
    }

    public function activate($id) {
        $monster = Monster::find($id);
        $monster['active'] = true;

        $monster->save();
        
        return $monster;
    }

    public function deactivate($id) {
        $monster = Monster::find($id);
        $monster['active'] = false;

        $monster->save();
        
        return $monster;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Monster  $monster
     * @return \Illuminate\Http\Response
     */
    public function destroy(Monster $monster)
    {
        //
    }
}
