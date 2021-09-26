<template>
  <app-loader v-if="loading" />
  <app-page title="Kategorien" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Erstellen</button>
    </template>

    <categories-table></categories-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Kategorie Erstellen" @close="modal = false">
        <categories-modal @created="modal = false" />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import {ref, onMounted} from 'vue'
import AppPage from '../../components/ui/AppPage'
import CategoriesTable from '../../components/admin/CategoriesTable'
import CategoriesModal from '../../components/admin/CategoriesModal'
import AppModal from '../../components/ui/AppModal'
import AppLoader from '../../components/ui/AppLoader'
import {useCategories} from '../../use/categories'

export default {
  setup() {
    const modal = ref(false)
    const loading = ref(true)

    onMounted(async () => {
      await useCategories()
      loading.value = false
    })

    return {
      modal, loading
    }
  },
  components: {
    AppPage, CategoriesTable, AppModal, CategoriesModal, AppLoader
  }
}
</script>
