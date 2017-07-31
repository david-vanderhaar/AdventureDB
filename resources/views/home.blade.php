@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
    <nav class="nav-extended">
        <div class="nav-content">
            <ul class="tabs">
                <li class="tab"><router-link to="/create-adventurer">Create a new Adventurer</router-link></li>
                <li class="tab"><router-link to="/map-dashboard">Embark</router-link></li>
                <li class="tab"><router-link to="/engaged">Encounter</router-link></li>
                <li class="tab"><router-link to="/" exact>Adventurer Dashboard</router-link></li>
            </ul>
        </div>
    </div>
    </nav>
    <router-view></router-view>
</div>
@endsection
