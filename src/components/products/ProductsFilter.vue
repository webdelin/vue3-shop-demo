<template>
  <div class="products-filter">
    <div class="form-control">
      <input type="text" placeholder="Suche..." v-model="search">
      <span class="form-control-clear" v-if="search.length" @click="search = ''">&times;</span>
    </div>

    <ul class="list">
      <li class="list-item" :class="{active: !category}" @click="category = null">
        Alle
      </li>
      <li
        class="list-item"
        @click="category = c.type"
        :class="{active: category === c.type}"
        v-for="c in categories"
        :key="c.id"
      >
        {{c.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import {ref, watch} from 'vue'
import {useRouter} from 'vue-router'

export default {
  props: ['modelValue', 'categories'],
  emits: ['update:modelValue'],
  setup({modelValue, categories}, {emit}) {
    const router = useRouter()
    const search = ref(modelValue.search ?? '')
    const category =  ref(modelValue.category)

    watch([search, category], ([sv, cv]) => {
      const query = {}
      if (sv) {
        query['search'] = sv
      }
      if (cv) {
        query['category'] = cv
      }
      router.replace({query})
      emit('update:modelValue', {
        search: sv,
        category: cv
      })
    })

    return {
      search,
      category,
      categories
    }
  }
}
</script>