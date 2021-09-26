<template>
  <h4 v-if="products.length === 0" class="text-center">Waren noch nicht da</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Titel</th>
      <th>Bild</th>
      <th>Preis</th>
      <th>Kategorie</th>
      <th>Anzahl</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(p, idx) in products" :key="p.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ p.title }}</td>
      <td><img :src="p.img" :alt="p.title" width="30" height="30"></td>
      <td>{{ currency(p.price) }}</td>
      <td>{{category(p.category)}}</td>
      <td>{{ p.count }}</td>
      <td>
        <router-link v-slot="{navigate}" custom :to="{name: 'AdminProduct', params: {id: p.id}}">
          <button class="btn" @click="navigate">Öffnen</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from '../../utils/currency'
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  props: ['products'],
  setup() {
    const store = useStore()
    const categories = computed(() => store.getters['category/categories'])

    const category = type => categories.value.find(c => c.type === type)?.title

    return {
      currency, category
    }
  },
}
</script>

<style scoped>

</style>