<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/" class="text-white">Zurück zu Produkten</router-link>
  </div>
  <div :class="['card', {center}]">
    <h1 class="card-title">
      <span v-once>{{title}}</span>
      <slot name="header" />
    </h1>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    back: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    if (props.title) {
      document.title = `${props.title} | Vue Лавка`
    }
  }
}
</script>

<style scoped>

</style>