import {computed} from 'vue'
import {useStore} from 'vuex'
import {currency} from '../utils/currency'

export function useCartPage() {
  const store = useStore()

  const products = computed(() => store.getters['product/products'])

  const title = id => products.value.find(p => p.id === id)?.title
  const price = id => currency(products.value.find(p => p.id === id)?.price)
  const count = id => products.value.find(p => p.id === id)?.count

  const cart = store.getters['cart/cart']

  const total = computed(() => {
    return Object.keys(cart).reduce((acc, id) => {
      return acc += products.value.find(p => p.id === id)?.price * cart[id]
    }, 0)
  })

  const isEmpty = computed(() => Object.keys(cart).length === 0)

  return {isEmpty, title, price, count, total, cart}
}