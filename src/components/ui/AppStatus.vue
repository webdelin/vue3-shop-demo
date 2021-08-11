<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(val) {
        return ["active", "cancel", "done", "pending"].includes(val);
      },
    },
  },
  setup(props) {
    const classMap = {
      active: "primary",
      cancel: "danger",
      done: "primary",
      pending: "warning",
    };
    const textMap = {
      active: "Aktiv",
      pending: "In Arbeit",
      cancel: "Geschloßen",
      done: "Beendet",
    };
    watch(props, val =>{
      className.value = classMap[val.type]
      text.value = textMap[val.type]
    })
    const className = ref(classMap[props.type]);
    const text = ref(textMap[props.type]);
    return {
      className,
      text,
    };
  },
};
</script>

<style>
</style>