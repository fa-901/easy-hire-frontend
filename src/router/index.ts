import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'list',
            component: HomePage
        },
        {
            path: '/new',
            name: 'new',
            component: () => import('../pages/CreateListing.vue')
        }
    ]
});

export default router;
