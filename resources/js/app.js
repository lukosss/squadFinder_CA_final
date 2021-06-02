/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../../node_modules/select2/dist/js/select2.full.min')

window.Vue = require('vue').default;
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from "vee-validate";

/**
 * select 2 logic
 */
$(document).ready(function() {
    $('.select2').select2({
        closeOnSelect: false
    });
    $('.js-example-basic-single').select2();
});

$('.remove_image').click(function(){
    $(this).closest('.image_block').remove();
});

import {getSelections} from "./script";



window.App = {
    getSelections: (route, target, modelId) => getSelections(route, target, modelId)
};

let route = "{{route('admin.game-user.selections')}}",
    parent = $('#game'),
    target = $('#rank');
parent.on('change.select2', function () {
    let modelId = $(this).val();
    target.select2().val(null)
    App.getSelections(route, target, modelId);
});
parent.trigger('change');


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/LandingPage.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('landing-page', require('./components/LandingPage.vue').default);
Vue.component('login-form', require('./components/Login.vue').default);
Vue.component('register-form', require('./components/Register.vue').default);
Vue.component('main-app', require('./components/MainApp.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from './Router';
const app = new Vue({
    el: '#app',
    router
}).$mount('#app');
