<template>
  <nav class="navbar">
    <h3>Admin</h3>

    <ul class="navbar-menu">
      <li>
        <router-link :to="{name: 'AdminProducts'}">Inventar</router-link>
      </li>
      <li>
        <router-link :to="{name: 'AdminCategories'}">Kategorien</router-link>
      </li>
      <li>
        <router-link :to="{name: 'AdminOrders'}">Bestellungen</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Ausloggen</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>