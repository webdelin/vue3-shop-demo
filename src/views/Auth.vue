<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Anmelden</h1>

    <div :class="['form-control', {invalid: eError}]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError">{{ eError }}</small>
    </div>

    <div :class="['form-control', {invalid: pError}]">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
    <div class="text-danger" v-if="isTooManyAttempts">
      Вы слишком часто пытаетесь Anmelden. Попробуйте позже
    </div>
  </form>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {watch, reactive} from 'vue'
import {error} from '../utils/error'
import {useLoginForm} from '../use/login-form'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const state = reactive(route)

    const setMessage = r => {
      if (r.query.message) {
        store.commit('setMessage', {
          value: error(route.query.message),
          type: 'warning'
        })
      }
    }

    watch(state, setMessage)

    setMessage(route)

    return {...useLoginForm()}
  }
}
</script>

<style scoped>

</style>