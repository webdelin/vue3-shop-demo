import axios from 'axios'
import { transform } from '../../utils/transform'

export default {
    namespaced: true,
    state() {
        return {
            products: []
        }
    },
    mutations: {
        setProducts(state, product) {
            state.products = product
        },
        addProduct(state, product) {
            state.products.push(product)
        },
        updateProductCount(state, { id, count }) {
            const product = state.products.find(p => p.id === id)
            product.count = count
        }
    },
    actions: {
        async create({ commit, dispatch }, payload) {
            try {
                const { data } = await axios.post(`https://webdelin.github.io/vue3-shop-demo/products.json`, payload)
                commit('addProduct', {...payload, id: data.name })
                dispatch('setMessage', {
                    value: 'Artikel erfolgreich erstellt',
                    type: 'primary'
                }, { root: true })
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, { root: true })
            }
        },
        async load({ commit }) {
            try {
                const { data } = await axios.get(`https://webdelin.github.io/vue3-shop-demo/products.json`)
                commit('setProducts', transform(data))
            } catch (e) {
                commit('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, { root: true })
            }
        },
        async loadOne({ commit, dispatch }, id) {
            try {
                const { data } = await axios.get(`https://webdelin.github.io/vue3-shop-demo/products/${id}.json`)
                return {...data, id }
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, { root: true })
            }
        },
        async remove({ dispatch }, id) {
            try {
                await axios.delete(`https://webdelin.github.io/vue3-shop-demo/products/${id}.json`)
                dispatch('setMessage', {
                    value: 'Artikel gelöscht',
                    type: 'primary'
                }, { root: true })
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, { root: true })
            }
        },
        async update({ dispatch }, product) {
            try {
                const { data } = await axios.put(`https://webdelin.github.io/vue3-shop-demo/products/${product.id}.json`, product)
                dispatch('setMessage', {
                    value: 'Товар обновлен',
                    type: 'primary'
                }, { root: true })
                return data
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, { root: true })
            }
        }
    },
    getters: {
        products(state) {
            return [
                ...state.products.filter(p => p.count !== 0),
                ...state.products.filter(p => p.count === 0)
            ]
        }
    }
}