<template>
  <div class="container with-nav">
    <AppAlertMessage />
    <router-view></router-view>
  </div>
</template>
<script>
import AppAlertMessage from '@/components/ui/AppAlertMessage'
export default {
  components: {AppAlertMessage}
};
</script>