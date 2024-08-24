<template>
  <div>
      <button class="button" :class="btnClass">{{ text }}</button>
  </div>
</template>
<script setup>
import { ref, onUpdated } from 'vue';
const props = defineProps(['text', 'btnClass'])
const text = ref('')
const btnClass = ref('primary')

text.value = props.text
btnClass.value = props.btnClass

onUpdated(() => {
  text.value = props.text
})
</script>
<style scoped>
  .button {
      padding: 8px 15px;
      border: 0;
      transition: all .5s;
  }

  .button:hover {
      opacity: .9;
      cursor: pointer;
      scale: 1.1;
  }

  .primary {
    background-color: #4ade80;
    color: #fff;
  }

  .secondary {
    background-color: #06b6d4;
    color: #fff;
  }
</style>