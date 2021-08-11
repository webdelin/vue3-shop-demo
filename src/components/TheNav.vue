<template>
  <nav class="navbar">
    <h3>Vue-3 Praktisch</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Inserate</router-link>
      </li>
      <li>
        <router-link to="/hilfe">Hilfe</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="openSidebar">Nachrichten</a>
      </li>
      <li>
        <button class="btn warning" @click="logOut">Logout</button>
      </li>
    </ul>
  </nav>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    function logOut() {
      store.commit("auth/REMOVE_TOKEN");
      router.push("/login");
    }
    function openSidebar(){
      store.commit("OPEN_SIDEBAR");
    }
    return {
      logOut,
      openSidebar
    };
  },
};
</script>