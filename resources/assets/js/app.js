import './bootstrap';

new Vue({

	el: '#app'
});

// Initialize Materialze Components
$(".button-collapse").sideNav();
$(".dropdown-button").dropdown();
$(document).ready(function() {
    Materialize.updateTextFields();
});







