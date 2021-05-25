import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Dash',
        component: () => import('../components/Dashboard.vue'),
    },
    {
        path: '/home',
        name: 'Dashboard',
        component: () => import('../components/Dashboard.vue'),
    },
    {
        path: '/games',
        name: 'GamesList',
        component: () => import('../components/GamesList.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
