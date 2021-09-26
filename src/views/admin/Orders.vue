<template>
  <app-loader v-if="loading" />
  <app-page title="Bestellungen" v-else>
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>Jaта</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(order, idx) in orders" :key="order.id">
        <td>{{ idx + 1 }}</td>
        <td>
          {{ new Date(order.date).toLocaleDateString() }}
          {{ new Date(order.date).toLocaleTimeString() }}
        </td>
        <td><router-link :to="'/admin/order/' + order.id">Öffnen</router-link></td>
      </tr>
      </tbody>
    </table>
  </app-page>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import AppPage from '../../components/ui/AppPage'
import AppLoader from '../../components/ui/AppLoader'

export default {
  setup() {
    const store = useStore()
    const orders = ref([])
    const loading = ref(true)

    onMounted(async () => {
      orders.value = await store.dispatch('order/load')
      loading.value = false
    })

    return {orders, loading}
  },
  components: {AppPage, AppLoader}
}
</script>

<style scoped>

</style>