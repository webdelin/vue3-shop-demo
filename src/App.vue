<template>
  <component :is="`${layout}-layout`" v-if="layout"/>
</template>
<script>
import {computed} from 'vue'
import { useRoute } from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout";
import EmptyLayout from "@/layout/EmptyLayout";
export default {
  setup() {
    const route = useRoute();
    return {
      layout:computed(() =>route.meta.layout)
    }
  },
  components: {
    DefaultLayout,
    EmptyLayout,
  },
};
</script>