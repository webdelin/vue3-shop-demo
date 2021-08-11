import {
    createRouter,
    createWebHistory
} from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'default',
            auth: true
        }
    },
    {
        path: '/message',
        name: 'Message',
        component: () =>
            import ('../views/About.vue'),
        meta: {
            layout: 'default',
            auth: true
        }
    },
    {
        path: '/hilfe',
        name: 'Hilfe',
        component: () =>
            import ('../views/Hilfe.vue'),
        meta: {
            layout: 'default',
            auth: true
        }
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: () =>
            import ('../views/Details.vue'),
        meta: {
            layout: 'default',
            auth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            layout: 'empty',
            auth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.auth
    if (requireAuth && store.getters['auth/IS_AUTHENTICATED']) {
        next()
    } else if (requireAuth && !store.getters['auth/IS_AUTHENTICATED']) {
        next('/login?message=login')
    } else {
        next()
    }
})

export default router