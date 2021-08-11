import axios from 'axios'
export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem('token')
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        REMOVE_TOKEN(state) {
            console.log('REMOVE_TOKEN')
            state.token = null
            localStorage.removeItem('token')
        }
    },
    actions: {
        async LOGIN({
            commit,
            dispatch
        }, payload) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
                const { data } = await axios.post(url, {...payload, returnSecureToken: true })
                commit('SET_TOKEN', data.idToken)
                commit('CLEAR_MESSAGE', null, { root: true })
            } catch (e) {
                dispatch('SET_MESSAGE', {
                    value: e.response.data.error.message,
                    type: 'danger'
                }, { root: true })
                throw new Error(e)
            }
        }
    },
    getters: {
        TOKEN(state) {
            return state.token
        },
        IS_AUTHENTICATED(_, getters) {
            return !!getters.TOKEN
        }
    }
}