import {useStore} from 'vuex'

export async function useCategories() {
  const store = useStore()

  if (store.getters['category/categories'].length === 0) {
    await store.dispatch('category/load')
  }
}
