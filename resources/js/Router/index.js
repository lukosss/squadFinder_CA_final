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
];

const router = new VueRouter({
    routes,
});

export default router;
