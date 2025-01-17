// DEFINE ROUTER RULES

import AboutView from '@/views/AboutView.vue';
import CarView from '@/views/CarView.vue';
import ContactView from '@/views/ContactView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '../views/404View.vue';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/home',
           redirect: '/'
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/cars/:id',
            name: 'car',
            component: CarView,
            children: [
                {
                    path: 'contact',
                    component: ContactView,
                }
            ]
        },
        {
            path: '/:catchall(.*)*',
            name: 'Not Found',
            component: NotFoundView
        }
    ],
});

export default router;