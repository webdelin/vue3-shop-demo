<template>
  <div class="products-table" v-if="products.length">
    <ProductCard v-for="p in products" :product="p" :key="p.id" />
  </div>
  <h3 v-else>Keine Produkten</h3>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  props: ['products'],
  components: {ProductCard}
}
</script>

<style scoped>
  h3 {
    margin: 2rem auto;
  }
</style>