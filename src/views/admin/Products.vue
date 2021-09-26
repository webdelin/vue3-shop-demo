<template>
  <app-loader v-if="loading" />
  <app-page title="Inventar" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Erstellen</button>
    </template>

    <product-table :products="products"></product-table>

    <app-pagination v-model="page" :count="allProducts.length" :size="PAGE_SIZE" />

    <teleport to="body">
      <app-modal v-if="modal" title="Ptodukt Erstellen" @close="modal = false">
        <product-modal @created="modal = false" />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import {ref, computed, onMounted, watch} from 'vue'
import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'
import AppPage from '../../components/ui/AppPage'
import ProductTable from '../../components/admin/ProductTable'
import ProductModal from '../../components/admin/ProductModal'
import AppModal from '../../components/ui/AppModal'
import AppLoader from '../../components/ui/AppLoader'
import {useCategories} from '../../use/categories'
import AppPagination from '../../components/ui/AppPagination'
import chunk from 'lodash.chunk'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const modal = ref(false)
    const loading = ref(true)
    const page = ref(route.query.page ? +route.query.page : 1)

    const _setPage = () => router.replace({query: {page: page.value}})

    onMounted(_setPage)

    watch(page, _setPage)

    onMounted(async () => {
      await useCategories()
      await store.dispatch('product/load')
      loading.value = false
    })

    const PAGE_SIZE = 8
    const allProducts = computed(() => store.getters['product/products'])
    const products = computed(() => chunk(allProducts.value, PAGE_SIZE)[page.value - 1])

    return {
      modal, products, loading, page,
      allProducts, PAGE_SIZE
    }
  },
  components: {
    AppPage, ProductTable, AppModal, ProductModal, AppLoader, AppPagination
  }
}
</script>
