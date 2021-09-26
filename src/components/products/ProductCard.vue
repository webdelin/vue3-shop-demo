<template>
  <!-- <div class="product-card" @click="$router.push('/product/' + product.id)"> -->
  <div class="product-card">
    <div class="product-img">
      <img :src="product.img" :alt="product.title">
    </div>
    <h4 class="product-title">{{product.title}}</h4>
    <div class="text-center">
      <template v-if="product.count">
        <ProductCartActions :product="product" />
      </template>
      <p v-else>
        <strong>Nicht lieferbar</strong>
      </p>
    </div>
  </div>
</template>

<script>
import ProductCartActions from './ProductCartActions'

export default {
  props: ['product'],
  components: {ProductCartActions}
}
</script>

<style scoped>

</style>