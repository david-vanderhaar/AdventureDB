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

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});







