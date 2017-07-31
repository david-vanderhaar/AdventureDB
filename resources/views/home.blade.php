@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <router-link to="/create-adventurer">Create a new Adventurer</router-link><br>
        <router-link to="/map-dashboard">Embark</router-link><br>
        <router-link to="/engaged">Encounter</router-link><br>
        <router-link to="/">Adventurer Dashboard</router-link><br>
        <router-view></router-view>
    </div>
</div>
@endsection
