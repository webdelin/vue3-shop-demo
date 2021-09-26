<template>
  <the-admin-navbar />
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheAdminNavbar from '../components/TheAdminNavbar'
import AppMessage from '../components/ui/AppMessage'

export default {
  components: {TheAdminNavbar, AppMessage}
}
</script>

<style scoped>

</style>