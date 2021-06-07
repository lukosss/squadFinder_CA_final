import Vue from 'vue';
import Vuex from 'vuex';

import profileModule from './profile';
import gamesModule from './gamesList';
import dashboardModule from './dashboard';
import squadsModule from './squadList';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        profile: profileModule,
        games: gamesModule,
        dashboard: dashboardModule,
        squads: squadsModule,
    },
});

export default store;
