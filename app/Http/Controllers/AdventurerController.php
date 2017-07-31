<?php

namespace App\Http\Controllers;

use App\Adventurer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdventurerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if (Auth::check()){
            $adventurers = Adventurer::where('user_id', Auth::id())->get();

        } else {
            $adventurers = Adventurer::all();
        
        }

        return $adventurers;
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
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function show(Adventurer $adventurer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function edit(Adventurer $adventurer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Adventurer $adventurer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Adventurer $adventurer)
    {
        //
    }
}
