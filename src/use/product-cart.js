import {computed} from 'vue'
import {useStore} from 'vuex'

export function useProductCart(defaultId) {
  const store = useStore()

  const count = computed(() => store.getters['cart/cart'][defaultId] ?? 0)

  const add = (prodId) => store.commit('cart/add', prodId)

  const sub = (prodId) => store.commit('cart/remove', prodId)

  return {
    count,
    add,
    sub
  }
}