import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('@/views/Landing.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/pages/HomeContent.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('@/views/Landing.vue')
        }
    ]
});

router.afterEach(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

export default router;
