<template>
  <app-page title="Warenkorb">
    <h3 class="text-center" v-if="isEmpty">Warenkorb ist Leer</h3>
    <template v-else>
      <table class="table">
        <thead>
        <tr>
          <th>Produktname</th>
          <th>Anzahl</th>
          <th>Preis (stück)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(value, key) in cart" :key="key">
          <td>{{title(key)}}</td>
          <td>
            <button class="btn danger" @click="sub(key)">-</button>
            {{value}} stück.
            <button class="btn primary" @click.stop="add(key)" :disabled="value >= count(key)">+</button>
          </td>
          <td>{{price(key)}}</td>
        </tr>
        </tbody>
      </table>
      <hr>
      <p class="text-right"><strong>Gesamt: {{currency(total)}}</strong></p>
      <p class="text-right" v-if="isAuth && !isEmpty">
        <button class="btn" @click="onPay">Bezahlen</button>
      </p>
      <UserAuthForm v-else />
    </template>
  </app-page>
</template>

<script>
import {onMounted, ref, computed} from 'vue'
import {useStore} from 'vuex'
import UserAuthForm from '../components/user/UserAuthForm'
import AppPage from '../components/ui/AppPage'
import {useProductCart} from '../use/product-cart'
import {useCartPage} from '../use/cart-page'
import {pay} from '../utils/pay'
import {currency} from '../utils/currency'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const loading = ref(true)
    const store = useStore()
    const router = useRouter()
    const {add, sub} = useProductCart()
    const {total} = useCartPage()

    onMounted(async () => {
      await store.dispatch('product/load')
      loading.value = false
    })

    const user = computed(() => store.getters['auth/user'])
    const isAuth = computed(() => store.getters['auth/isAuthenticated'])

    const onPay = async () => {
      try {
        await pay({
          description: 'Покупка товаров в онлайн магазине',
          amount: total.value,
          accountId: user.value.email,
          data: {
            test: 1
          }
        })
        await store.dispatch('order/create')
        router.push({name: 'Thanks'})
      } catch (e) {
        console.log('Reject pay: ', e)
      }
    }

    return {
      ...useCartPage(),
      add,
      sub,
      isAuth,
      loading,
      onPay,
      currency
    }
  },
  components: {AppPage, UserAuthForm}
}
</script>

<style scoped>

</style>