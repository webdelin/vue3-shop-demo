<template>
  <form @submit.prevent="login">
    <h4>Um ihren Einkauf abzuschließen<br>Bitte melden Sie sich an oder erstellen Sie zunächst ein neues Konto.</h4>
    <h4 style="color:red;">Diese Funktion ist deaktiviert</h4>

    <div class="form-control">
      <label for="email">Email</label>
      <input :disabled="true" type="email" id="email" v-model="email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input :disabled="true" type="password" id="password" v-model="password">
    </div>

    <button class="btn primary" type="submit" :disabled="true">Login</button>
    <button class="btn" type="button" @click="signUp" :disabled="true">Registrieren</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    const email = ref('')
    const password = ref('')

    const login = async () => {
      await store.dispatch('auth/login', {
        email: email.value,
        password: password.value
      })
    }

    const signUp = async () => {
      await store.dispatch('auth/signUp', {
        email: email.value,
        password: password.value
      })
    }

    return {
      email,
      password,
      login,
      signUp
    }
  }
}
</script>

<style scoped>

</style>