<template>
  <button class="btn" @click.stop="add(product.id)" v-if="count === 0">
    {{currency(product.price)}}
  </button>
  <div :class="['product-controls', {'in-card': inCard}]" v-else>
    <button
        class="btn danger"
        @click.stop="sub(product.id)"
    >-</button>
    <strong>{{count}}</strong>
    <button
        class="btn primary"
        @click.stop="add(product.id)"
        :disabled="count >= product.count"
    >+</button>
  </div>
</template>

<script>
import {useProductCart} from '../../use/product-cart'
import {currency} from '../../utils/currency'

export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    inCard: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return {
      ...useProductCart(props.product.id),
      currency
    }
  }
}
</script>

<style scoped>

</style>