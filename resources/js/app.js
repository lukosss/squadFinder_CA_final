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
import {getSelections} from "./script";


/**
 * select 2 logic
 */
window.App = {
    getSelections: (route, target, modelId) => getSelections(route, target, modelId)
};

$(document).ready(function() {
    $('.select2').select2({
        closeOnSelect: false
    });
    $('.js-example-basic-single').select2();


$('.remove_image').click(function(){
    $(this).closest('.image_block').remove();
});


let
    parent = $('#game'),
    target = $('#rank');
parent.on('change.select2', function () {

    let modelId = $(this).val(),
    route = "http://127.0.0.1:8000/admin/game-users/selections";
    console.log(modelId);
    target.select2().val(null)
    App.getSelections(route, target, modelId);
});
parent.trigger('change');
});

/**
 * The following block of code may be used to automatically register your
 * Vue Components. It will recursively scan this directory for the Vue
 * Components and automatically register them with their "basename".
 *
 * Eg. ./Components/LandingPage.vue -> <example-component></example-component>
 */

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('landing-page', require('./Pages/LandingPage.vue').default);
Vue.component('login-form', require('./Components/Login.vue').default);
Vue.component('register-form', require('./Components/Register.vue').default);
Vue.component('main-app', require('./App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding Components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from './Router/index';
import store from './Store/index';

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {App}
}).$mount('#app');
