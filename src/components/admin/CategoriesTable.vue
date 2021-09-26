<template>
  <h4 v-if="categories.length === 0" class="text-center">Noch keine Kategorien</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Titel</th>
      <th>Type</th>
      <th>Entfernen</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(c, idx) in categories" :key="c.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ c.title }}</td>
      <td>{{ c.type }}</td>
      <td>
        <button class="btn danger" @click="confirm = true, id = c.id">&times;</button>
      </td>
    </tr>
    </tbody>
  </table>

  <teleport to="body">
    <app-confirm
        v-if="confirm"
        title="Вы уверены, что хотите Entfernen категорию?"
        @reject="confirm = false"
        @confirm="removeCategory"
    />
  </teleport>
</template>

<script>
import {computed, ref} from 'vue'
import AppConfirm from '../ui/AppConfirm'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    const id = ref(null)

    return {
      id,
      confirm: ref(false),
      categories: computed(() => store.getters['category/categories']),
      async removeCategory() {
        confirm.value = false
        await store.dispatch('category/remove', id.value)
      }
    }
  },
  components: {AppConfirm}
}
</script>

<style scoped>

</style>