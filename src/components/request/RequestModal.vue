<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid:errorName}">
      <label for="name">Name</label>
      <input type="text" v-model="name" id="name" @blur="handleName">
      <small v-if="errorName">{{errorName}}</small>
    </div>
    <div class="form-control" :class="{invalid:errorPhone}">
      <label for="phone">Telefon</label>
      <input type="text" v-model="phone" id="phone" @blur="handlePhone">
      <small v-if="errorPhone">{{errorPhone}}</small>
    </div>
    <div class="form-control" :class="{invalid:errorAmount}">
      <label for="amount">Summe</label>
      <input type="text" v-model.number="amount" id="amount" @blur="handleAmount">
      <small v-if="errorAmount">{{errorAmount}}</small>
    </div>
    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="active">Aktiv</option>
        <option value="pending">In Arbeit</option>
        <option value="done">Beendet</option>
        <option value="cancel">Geschloßen</option>
      </select>
    </div>
    <button class="btn primary" :disabled="isSubmitting">Erstellen</button>
  </form>
</template>
<script>
import {useRequestForm} from '../../use/request-form'
import {useStore} from 'vuex'
export default {
  emits: ['created'],
  setup(_,{emit}){
    const store = useStore()
    const submit = async val => {
      console.log('VAL ', val)
      await store.dispatch('request/CREATE', val)
      emit('created')
    }
    return {
      ...useRequestForm(submit)
    }
  }
}
</script>