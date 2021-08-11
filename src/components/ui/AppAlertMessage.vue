<template>
  <div v-if="alertMessage" :class="['alert', alertMessage.type]">
    <p class="alert-title" v-if="title">{{ title }}</p>
    <p>{{ alertMessage.value }}</p>
    <span class="alert-close" @click="closeAlert">&times;</span>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const TITLE_APP = {
      ptimary: "Erfolgreich!",
      danger: "Fehler!",
      warning: "Zu Info!",
    };
    const alertMessage = computed(() => store.state.alertMessage);
    const title = computed(() =>
      alertMessage.value ? TITLE_APP[alertMessage.value.type] : ""
    );
    return {
      alertMessage,
      title,
      closeAlert: () => store.commit("CLEAR_MESSAGE"),
    };
  },
};
</script>