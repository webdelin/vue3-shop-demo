<template>
  <app-loader v-if="loading"></app-loader>
  <app-page :title="product.title" v-else-if="product">
    <img :src="product.img" :alt="product.title" width="150">
    <form @submit.prevent="update">
      <div class="form-control">
        <label for="title">Titel</label>
        <input type="text" id="title" v-model="product.title">
      </div>
      <div class="form-control">
        <label for="img">Bild</label>
        <input type="text" id="img" v-model="product.img">
      </div>
      <div class="form-control">
        <label for="price">Preis</label>
        <input type="number" id="price" v-model.number="product.price">
      </div>
      <div class="form-control">
        <label for="count">Anzahl на складе</label>
        <input type="number" id="count" v-model.number="product.count">
      </div>
      <div class="form-control">
        <label for="status">Kategorie</label>
        <select id="status" v-model="product.category">
          <option
              :value="c.type"
              v-for="c in categories" :key="c.id">{{c.title}}</option>
        </select>
      </div>

      <button class="btn danger" type="button" @click="confirm = true">Entfernen</button>
      <button class="btn" type="submit" v-if="hasChanges">Обновить</button>
    </form>
  </app-page>
  <h3 v-else class="text-center text-white">
    Товара не найден.
  </h3>

  <teleport to="body">
    <AppConfirm
      v-if="confirm"
      title="Entfernen товар?"
      @reject="confirm = false"
      @confirm="remove" />
  </teleport>

  <teleport to="body">
    <AppConfirm
        v-if="leave"
        title="Есть несохраненные изменения. Вы хотите покинуть страницу?"
        @reject="leave = false"
        @confirm="navigate" />
  </teleport>
</template>

<script>
import {ref, onMounted, computed, toRaw, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import AppPage from '../../components/ui/AppPage'
import AppLoader from '../../components/ui/AppLoader'
import AppConfirm from '../../components/ui/AppConfirm'
import {currency} from '../../utils/currency'
import {useCategories} from '../../use/categories'
import {useLeaveGuard} from '../../use/leave-guard'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const product = ref({})
    const confirm = ref(false)
    let initial

    const loading = ref(true)

    onMounted(async () => {
      await useCategories()
      initial = await store.dispatch('product/loadOne', route.params.id)
      product.value = {...initial}
      loading.value = false
    })

    const categories = computed(() => store.getters['category/categories'])

    const category = computed(() =>
      categories.value.find(c => c.type === product.value.category)
    )

    const hasChanges = computed(() =>
      product.value.title !== initial.title ||
      product.value.img !== initial.img ||
      product.value.price !== initial.price ||
      product.value.count !== initial.count ||
      product.value.category !== initial.category
    )

    const remove = async () => {
      confirm.value = false
      await store.dispatch('product/remove', route.params.id)
      router.push({name: 'AdminProducts'})
    }

    const update = async () => {
      initial = await store.dispatch('product/update', toRaw(product.value))
      product.value = {...initial}
    }

    return {
      loading,
      product,
      currency,
      category,
      categories,
      remove,
      confirm,
      update,
      hasChanges,
      ...useLeaveGuard(hasChanges)
    }
  },
  components: {
    AppLoader, AppPage, AppConfirm
  }
}
</script>

<style scoped>

</style>