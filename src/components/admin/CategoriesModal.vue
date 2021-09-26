<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label for="title">Titel</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="type">Type</label>
      <input type="text" id="type" v-model.trim="type">
    </div>

    <button class="btn primary" :disabled="!isValid || isSubmitting">Erstellen</button>
  </form>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'

export default {
  emits: ['created'],
  setup(_, {emit}) {
    const store = useStore()
    const title = ref('')
    const type = ref('')
    const isSubmitting = ref(false)

    const submit = async () => {
      isSubmitting.value = true
      await store.dispatch('category/create', {
        title: title.value,
        type: type.value
      })
      emit('created')
    }

    const isValid = computed(() => title.value && type.value)

    return {
      submit,
      title,
      type,
      isValid,
      isSubmitting
    }
  }
}
</script>

<style scoped>

</style>