import baseAxios from '../../axios/dbase'
import {transform} from '../../utils/transform'

export default {
  namespaced: true,
  actions: {
    async load() {
      const {data} = await baseAxios.get('/orders.json')
      return transform(data)
    },
    async create({ commit, rootGetters }) {
      const cart = rootGetters['cart/cart']
      const products = rootGetters['product/products']
      const order = {
        userId: rootGetters['auth/user'].id,
        date: Date.now(),
        items: []
      }

      for (const [key, value] of Object.entries(cart)) {
        const product = products.find(p => p.id === key)
        const toOrder = {
          name: product.title,
          price: product.price,
          count: value
        }
        const count = product.count - value
        order.items.push(toOrder)
        // not important
        commit('product/updateProductCount', {id: key, count}, {root: true})
        baseAxios.patch(`/products/${key}.json`, {count})
        // PUT - change full object
        // PATCH - change specific fields
      }

      commit('cart/clear', null, {root: true})
      await baseAxios.post('/orders.json', order)
    }
  }
}