import './bootstrap';
import router from './routes';

new Vue({

	el: '#app',

	router: router,
});

// Initialize Materialze Components
$(".button-collapse").sideNav();
$(".dropdown-button").dropdown();
$(document).ready(function() {
    Materialize.updateTextFields();
});







