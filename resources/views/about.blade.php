@extends('layouts.app')

@section('content')
<div class="container">
<div class="row">
	<div class="col s12">
		<h4 class="white-text">About</h4>
	</div>
	<div class="row">
		<div class="col 12">
			<h5 class="white-text">What is AdventureDB?</h5>
			<div class="divider"></div>
			<p class="white-text flow-text">
				AdventureDB is an web application that uses geolocation and Google Maps APIs to allow players to interface with the virtual fantasy world.
				It is inspired by geocaching, Pokemon GO, and roguelike video games.
				It will allow players to go on a virtual/physical adventure around Lexington, KY.
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col 12">
			<h5 class="white-text">Why are We Developing AdventureDB?</h5>
			<div class="divider"></div>
			<p class="white-text flow-text">
				We are developing this game to have fun, practice web development, and create adventure. 
				We love gaming, programming, travel, and creativity. Developing AdventureDB is a great blend of all these things. Our hope is to develop a game that allows others the experience of adventure where they live. Most importantly if we could achieve one thing, it would be to create an opportunity for cross-cultural interaction between a user and the unfamiliar parts of Lexington they might find themselves.
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col 12">
			<h5 class="white-text">Features</h5>
			<div class="divider"></div>
			<p class="white-text flow-text">
				<u class="white-text flow-text">Users Can:</u> <br>
				<ul class="white-text flow-text">
					<li>Register/Login</li>
					<li>Create new adventurers</li>
					<li>Explore and discover in a shared world</li>
					<li>Collect treasure</li>
					<li>Battle monsters</li>
					<li>Be defeated by monsters</li>
					<li>Keep score via treasure collected and monsters defeated</li>
				</ul>
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col 12">
			<h5 class="white-text">Future Features</h5>
			<div class="divider"></div>
			<p class="white-text flow-text">
				<u class="white-text flow-text">Users Will:</u> <br>
				<ul class="white-text flow-text">
					<li>Interact with NPC's</li>
					<li>Buy and sell items at virtual shops</li>
					<li>Battle other users</li>
					<li>Equip special items to augment stats</li>
					<li>Create and leave virtual notes in real spaces</li>
					<li>And more...</li>
				</ul>
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col 12">
			<h5 class="white-text">What Tools Do We Use?</h5>
			<div class="divider"></div>
			<p class="white-text flow-text">
				<u class="white-text flow-text">Frontend</u> <br>
				<ul class="white-text flow-text">
					<li>Vue 2.0</li>
					<li>Google Materialize</li>
				</ul>
				<br>
				<u class="white-text flow-text">Backend</u> <br>
				<ul class="white-text flow-text">
					<li>Laravel</li>
					<li>PostgreSQL</li>
				</ul>
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col 12">
			<h5 class="white-text">Meet The Developers!</h5>
			<div class="divider"></div>
			<p class="white-text flow-text">
				<u class="white-text flow-text">David Vanderhaar</u> <br>
				<ul class="white-text flow-text">
					<li><a href="https://github.com/david-vanderhaar/AdventureDB" class="btn">GitHub</a></li>
					<br>
					<li><a href="https://david-vanderhaar.github.io/" class="btn">Portfolio</a></li>
					<br>
					<li><a href="https://www.linkedin.com/in/david-vanderhaar-096b7013b/" class="btn">Linkedin</a></li>
				</ul>
			</p>
		</div>
	</div>
</div>
</div>
@endsection
