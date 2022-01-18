import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/convert-user',
        component: () => import("../components/convertUser/convertUser.vue"),
        meta: {
            name: '用户名转化'
        }
    },
    {
        path: '/query-play',
        component: () => import("../components/queryPlay/queryPlay.vue"),
        meta: {
            name: '播放列表查询'
        }
    },
    {
        path: '/',
        component: () => import("../components/index/index.vue"),
        meta: {
            name: 'tiktok工具',
        }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;