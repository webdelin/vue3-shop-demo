<template>
  <div class="card">
    <button class="btn" @click="start">Create</button>
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore()


    return {
      start() {
        store.dispatch('product/test')
      }
    }


    // let index = 0
    //
    // setInterval(async () => {
    //   await store.dispatch('product/create', data[index])
    //   index++
    // }, 1000)
  }
}
</script>

<style scoped>

</style>