<template>
  <div>
    <button class="button" :class="btnClass">{{ text }}</button>
  </div>
</template>
<script setup>
import { ref, onUpdated } from 'vue';
import { useGalleryStore } from '@/store/useGalleryStore'

const store = useGalleryStore()
// const { todoList } = storeToRefs(store)
// const { toggleCompleted, deleteTodo } = store

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

  .neutral {
    background-color: black;
    color: #fff;
  }

  .secondary {
    background-color: blueviolet;
    color: #fff;
  }
</style>