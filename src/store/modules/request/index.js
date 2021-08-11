import axios from '../../../axios/request'
import store from '../../../store'
export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations: {
        SET_REQUEST(state, requests) {
            state.requests = requests
        },
        ADD_REQUEST(state, request) {
            console.log('ADD_REQUEST ', request)
            state.requests.push(request)
        }
    },
    actions: {
        async CREATE({
            commit,
            dispatch
        }, payload) {
            try {
                const token = store.getters['auth/TOKEN']
                const {
                    data
                } = await axios.post(`/requests.json?auth=${token}`, payload)
                commit('ADD_REQUEST', {...payload, id: data.name })
                dispatch('SET_MESSAGE', {
                    value: 'Erfolgreich erstellt',
                    type: 'primary'
                }, {
                    root: true
                })
            } catch (e) {
                dispatch('SET_MESSAGE', {
                    value: 'Fehler beim erstellt ' + e.message,
                    type: 'danger'
                }, {
                    root: true
                })
            }
        },
        async LOAD_DATA({ commit, dispatch }) {
            try {
                const token = store.getters['auth/TOKEN']
                const {
                    data
                } = await axios.get(`/requests.json?auth=${token}`)
                const res = Object.keys(data).map(id => ({...data[id], id }))
                commit('SET_REQUEST', res)
            } catch (e) {
                dispatch('SET_MESSAGE', {
                    value: 'Fehler beim laden ' + e.message,
                    type: 'danger'
                }, {
                    root: true
                })
            }
        },
        async LOAD_DETAILS({ dispatch }, id) {
            try {
                const token = store.getters['auth/TOKEN']
                const {
                    data
                } = await axios.get(`/requests/${id}.json?auth=${token}`)
                return data
            } catch (e) {
                dispatch('SET_MESSAGE', {
                    value: 'Fehler beim laden ' + e.message,
                    type: 'danger'
                }, {
                    root: true
                })
            }
        },
        async DELETE_ITEM({ dispatch }, id) {
            try {
                const token = store.getters['auth/TOKEN']
                await axios.delete(`/requests/${id}.json?auth=${token}`)
                dispatch('SET_MESSAGE', {
                    value: 'Löschen Erfolgreich',
                    type: 'primary'
                }, {
                    root: true
                })
            } catch (e) {
                dispatch('SET_MESSAGE', {
                    value: 'Fehler beim laden ' + e.message,
                    type: 'danger'
                }, {
                    root: true
                })
            }
        },
        async UPDATE_ITEM({ dispatch }, data) {
            try {
                const token = store.getters['auth/TOKEN']
                await axios.put(`/requests/${data.id}.json?auth=${token}`, data)
                dispatch('SET_MESSAGE', {
                    value: 'Update Erfolgreich',
                    type: 'primary'
                }, {
                    root: true
                })
            } catch (e) {
                dispatch('SET_MESSAGE', {
                    value: 'Fehler beim laden ' + e.message,
                    type: 'danger'
                }, {
                    root: true
                })
            }
        }
    },
    getters: {
        REQUESTS(state) {
            return state.requests
        }
    }
}