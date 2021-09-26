import axios from 'axios'
import store from '../store'
import router from '../router'

const baseAxios = axios.create({
    baseURL: 'https://webdelin.github.io/vue3-shop-demo'
})

baseAxios.defaults.params = {}

baseAxios.interceptors.request.use(async config => {
    if (!store.getters['auth/isAuthenticated']) {
        return config
    }

    if (store.getters['auth/isExpired']) {
        await store.dispatch('auth/refresh')
    }

    config.params['auth'] = store.getters['auth/token']

    return config
})

baseAxios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
        store.commit('auth/logout')
        router.push('/auth?message=auth')
    }

    return Promise.reject(error)
})

export default baseAxios