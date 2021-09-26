import axios from '../../axios/dbase'
import store from '../index'
import {transform} from '../../utils/transform'

export default {
  namespaced: true,
  state() {
    return {
      categories: []
    }
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },
    addCategory(state, category) {
      state.categories.push(category)
    },
    removeCategory(state, id) {
      state.categories = state.categories.filter(c => c.id !== id)
    }
  },
  actions: {
    async load({commit}) {
      const {data} = await axios.get(`/categories.json`)
      commit('setCategories', transform(data))
    },
    async create({commit}, body) {
      const {data} = await axios.post(`/categories.json`, body)
      commit('addCategory', {...body, id: data.name})
    },
    async remove({commit}, id) {
      await axios.delete(`/categories/${id}.json`)
      commit('removeCategory', id)
    }
  },
  getters: {
    categories(state) {
      return state.categories
    }
  }
}