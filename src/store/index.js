import { createStore, createLogger } from 'vuex'
const plugins = []
if (process.env.NODE_ENV === 'development') {
    plugins.push(createLogger())
}
import auth from './modules/auth'
import request from './modules/request'
export default createStore({
    plugins,
    state() {
        return {
            alertMessage: null,
            sidebar: false
        }
    },
    mutations: {
        SET_MESSAGE(state, message) {
            state.alertMessage = message
        },
        CLEAR_MESSAGE(state) {
            state.alertMessage = null
        },
        OPEN_SIDEBAR(state) {
            state.sidebar = true
        },
        CLOSE_SIDEBAR(state) {
            state.sidebar = false
        }
    },
    actions: {
        SET_MESSAGE({ commit }, message) {
            commit('SET_MESSAGE', message)
            setTimeout(() => {
                commit('CLEAR_MESSAGE')
            }, 5000)
        }
    },
    modules: {
        auth,
        request
    }
})