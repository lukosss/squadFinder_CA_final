import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Dash',
        component: () => import('../Pages/Dashboard.vue'),
    },
    {
        path: '/home',
        name: 'Dashboard',
        component: () => import('../Pages/Dashboard.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../Pages/Profile.vue'),
    },
    {
        path: '/games',
        name: 'GamesList',
        component: () => import('../Pages/GamesList.vue'),
    },
    {
        path: '/squads',
        name: 'SquadsList',
        component: () => import('../Pages/SquadList.vue'),
    },
    {
        path: '/my-games',
        name: 'MyGames',
        component: () => import('../Pages/MyGames.vue'),
    },
    {
        path: '/my-games/edit',
        name: 'MyGamesEdit',
        component: () => import('../Pages/EditGameInfo.vue'),
    },
    {
        path: '/my-games/add',
        name: 'MyGamesAdd',
        component: () => import('../Pages/AddGameInfo.vue'),
    },
];

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'is-active',
});

export default router;
