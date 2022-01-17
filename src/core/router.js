import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/convert-user', component: () => import("../components/convertUser/convertUser.vue")},
    { path: '/query-play', component: () => import("../components/queryPlay/queryPlay.vue")},
    {
        path: '/',
        component: () => import("../components/index/index.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;