<template>
  <TheNav />
  <the-sidebar></the-sidebar>
  <div class="container with-nav">
    <AppAlertMessage />
    <router-view></router-view>
  </div>
</template>
<script>
import TheNav from '@/components/TheNav'
import AppAlertMessage from '@/components/ui/AppAlertMessage'
import TheSidebar from '../components/TheSidebar.vue'

export default {
  components: {TheNav, AppAlertMessage,TheSidebar}
  
}
</script>