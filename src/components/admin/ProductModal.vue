<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label for="title">Titel</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="img">Bild</label>
      <input type="text" id="img" v-model.trim="img">
    </div>

    <div class="form-control">
      <label for="count">Anzahl</label>
      <input type="number" id="count" v-model.number="count">
    </div>

    <div class="form-control">
      <label for="price">Preis</label>
      <input type="number" id="price" v-model.number="price">
    </div>

    <div class="form-control">
      <label for="status">Kategorie</label>
      <select id="status" v-model="category">
        <option
            :value="c.type"
            v-for="c in categories" :key="c.id">{{c.title}}</option>
      </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting || !isValid">Erstellen</button>
  </form>
</template>

<script>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'

export default {
  emits: ['created'],
  setup(_, {emit}) {
    const store = useStore()
    const title = ref('')
    const img = ref('')
    const price = ref(0)
    const count = ref(1)
    const isSubmitting = ref(false)

    const categories = computed(() => store.getters['category/categories'])

    const category = ref(categories.value[0].type)

    const isValid = computed(() =>
      title.value && img.value && price.value > 0 && count.value > 0
    )

    const submit = async () => {
      isSubmitting.value = true
      await store.dispatch('product/create', {
        title: title.value,
        img: img.value,
        price: price.value,
        count: count.value,
        category: category.value
      })
      emit('created')
    }

    return {
      categories,
      submit,
      title,
      img,
      price,
      count,
      category,
      isValid,
      isSubmitting
    }
  }
}
</script>

<style scoped>

</style>