<?php

namespace App\Http\Controllers;

use App\Treasure;
use Illuminate\Http\Request;

class TreasureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Get all treasure
        $treasures = Treasure::all();

        //Attach relevant treasure type info
        foreach($treasures as $treasure){
            $treasureType = $treasure->treasureType()->get();
            $treasure['type'] = $treasureType;
        }

        return $treasures;
    }

    public function treasuresInRange($lat, $lng, $distance) { //returns treasures within distance (km)
            $treasures = Treasure::all()->filter(function ($treasure) use ($lat, $lng, $distance) {
                $actual = 6371 * acos(
                    cos(deg2rad($lat)) * cos(deg2rad($treasure->lat))
                    * cos(deg2rad($treasure->lng) - deg2rad($lng))
                    + sin(deg2rad($lat)) * sin(deg2rad($treasure->lat))
                );
                return $actual < $distance;
            });

            $treasures = $treasures->values();

            //Attach relevant treasure type info
            foreach($treasures as $treasure){
                $treasureType = $treasure->treasureType()->get();
                $treasure['type'] = $treasureType;
            }

            return $treasures;
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
     * @param  \App\Treasure  $treasure
     * @return \Illuminate\Http\Response
     */
    public function show(Treasure $treasure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Treasure  $treasure
     * @return \Illuminate\Http\Response
     */
    public function edit(Treasure $treasure)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Treasure  $treasure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Treasure $treasure)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Treasure  $treasure
     * @return \Illuminate\Http\Response
     */
    public function destroy(Treasure $treasure)
    {
        $treasure = Treasure::find($id);
        $treasure->delete();
        return ($treasure);
    }
}
