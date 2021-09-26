<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back center :title="product.title" v-else-if="product">
    <img :src="product.img" :alt="product.title">
    <p>Kategorie: <strong>{{category.title}}</strong></p>
    <template v-if="product.count">
      <product-cart-actions :product="product" in-card />
    </template>
    <strong v-else>Nicht lieferbar</strong>
  </app-page>
  <h3 v-else class="text-center text-white">
    Artikel nicht gefunden.
  </h3>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import AppPage from '../components/ui/AppPage'
import AppLoader from '../components/ui/AppLoader'
import {currency} from '../utils/currency'
import {useProductCart} from '../use/product-cart'
import {useCategories} from '../use/categories'
import ProductCartActions from '../components/products/ProductCartActions'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const product = ref({})

    const loading = ref(true)

    onMounted(async () => {
      await useCategories()
      product.value = await store.dispatch('product/loadOne', route.params.id)
      loading.value = false
    })

    const category = computed(() =>
      store.getters['category/categories']
        .find(c => c.type === product.value.category)
    )

    return {
      loading,
      product,
      currency,
      category,
      ...useProductCart(route.params.id)
    }
  },
  components: {
    AppLoader, AppPage, ProductCartActions
  }
}
</script>

<style scoped>

</style>