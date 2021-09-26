<template>
  <nav class="navbar">
    <h3>Vue 3 Demoshop</h3>

    <ul class="navbar-menu">
      <li v-if="isAuth">
        <small>{{user.email}}</small>
      </li>
      <li>
        <router-link to="/">Laden</router-link>
      </li>
      <li>
        <router-link to="/cart">
          Warenkorb
        </router-link>
        <span class="badge warning filled" v-if="count">{{count}}</span>
      </li>
      <li v-if="isAuth">
        <a href="#" @click.prevent="logout">Ausloggen</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
    const store = useStore()

    return {
      isAuth: computed(() => store.getters['auth/isAuthenticated']),
      user: computed(() => store.getters['auth/user']),
      count: computed(() => store.getters['cart/count']),
      logout: () => store.commit('auth/logout')
    }
  }
}
</script>

<style scoped>

</style>