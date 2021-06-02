import Vue from 'vue';
import Vuex from 'vuex';

import profileModule from './profile';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        profile: profileModule,
    },
});

export default store;
