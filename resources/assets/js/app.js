import './bootstrap';
// import './components/mapjs/map-icons.js';
// import './components/mapjs/interactables.js';
// import './components/mapjs/monstersV2.js';
// import './components/mapjs/treasures.js';
// import './components/mapjs/map-styles.js';
// import './components/mapjs/map.js';
// import './components/mapjs/adventurer.js';

import router from './routes';

new Vue({

	el: '#app',

	router: router,
});

// Initialize Materialze Components
$(".button-collapse").sideNav(); //side navs

$(".dropdown-button").dropdown(); //dropdowns

$(document).ready(function() { //input fields
    Materialize.updateTextFields();
});








