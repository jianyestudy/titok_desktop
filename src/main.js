import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/style.css'
import './assets/reset.css'
import App from './App.vue'
import router from './core/router'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.name) {
        document.title = to.meta.name
    }
    next()
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
