<template>
  <AppLoader v-if="loading"  />
  <div class="card" v-else>
    <products-filter :categories="categories" v-model="filter" />
    <products-table :products="products" />
  </div>
</template>

<script>
import {onMounted, ref, computed} from 'vue'
import ProductsFilter from '../components/products/ProductsFilter'
import ProductsTable from '../components/products/ProductsTable'
import AppLoader from '../components/ui/AppLoader'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {useCategories} from '../use/categories'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const filter = ref({
      category: route.query.category,
      search: route.query.search
    })
    const loading = ref(true)

    onMounted(async () => {
      await useCategories()
      await store.dispatch('product/load')
      loading.value = false
    })

    const products = computed(
      () => store.getters['product/products']
        .filter(p => {
          if (filter.value.category) {
            return p.category === filter.value.category
          }
          return p
        })
        .filter(p => {
          if (filter.value.search) {
            return p.title.toLowerCase()
              .includes(filter.value.search.toLowerCase())
          }
          return p
        })
    )

    const categories = computed(() => store.getters['category/categories'])

    return {loading, products, filter, categories}
  },
  components: {ProductsFilter, ProductsTable, AppLoader}
}
</script>

<style scoped>
  .card {
    border-radius: 4px;
    padding: 0;
    display: flex;
  }


</style>