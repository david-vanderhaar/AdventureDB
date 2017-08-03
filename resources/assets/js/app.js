import './bootstrap';

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









