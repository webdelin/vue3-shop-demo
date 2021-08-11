<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Einloggen</h1>
    <div :class="['form-control', { invalid: emailError }]">
      <label for="email">E-Mail</label>
      <input type="email" id="email" v-model="email" @blur="emailBlur" />
      <small v-if="emailError">{{ emailError }}</small>
    </div>
    <div :class="['form-control', { invalid: passwordError }]">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        @blur="passwordBlur"
      />
      <small v-if="passwordError">{{ passwordError }}</small>
    </div>
    <button
      class="btn primary"
      type="submit"
      :disabled="isSubmitting || isToMAnyAttemps"
    >
      Einloggen
    </button>
    <div class="text-danger" v-if="isToMAnyAttemps">Zu viele versuche</div>
  </form>
</template>
<script>
import { useLoginForm } from "@/use/login-form";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import {error} from '../utils/error'
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    if (route.query.message) {
      store.dispatch('SET_MESSAGE', {
        value: error(route.query.message),
        type: 'warning'
      });
    }
    return {
      ...useLoginForm(),
    };
  },
};
</script>