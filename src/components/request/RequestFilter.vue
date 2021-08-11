<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Suchen bei Name" v-model="name" />
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Sortiren nach status</option>
        <option value="active">Aktiv</option>
        <option value="pending">In Arbeit</option>
        <option value="done">Beendet</option>
        <option value="cancel">Geschloßen</option>
      </select>
    </div>
    <button v-if="name" class="btn warning" @click="reset">Filter leehren</button>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
export default {
  emits: ["update:modelValue"],
  props: ["modelValue"],
  setup(_, { emit }) {
    const name = ref();
    const status = ref();
    watch([name, status], (val) => {
      emit("update:modelValue", {
        name: val[0],
        status: val[1],
      });
    });
    const isActive = computed(() => name.value || status.value);
    return {
      name,
      status,
      isActive,
      reset: ()=>{
        name.value='',
        status.value=null
      }
    };
  },
};
</script>

<style>
</style>