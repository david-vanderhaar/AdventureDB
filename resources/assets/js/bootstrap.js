import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';

window.Vue = Vue;
window.axios = require('axios');
Vue.use(VueRouter);


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */



window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */


let user = document.head.querySelector('meta[name="auth-user"]');

if (user) {
    window.axios.defaults.headers.common['PHP_AUTH_USER'] = JSON.parse(user.content)['email'];
} else {
    console.error('User Not found');
}

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

