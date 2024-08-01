<template>
  <Suspense>
    <template #default>
      <DogApi/>
    </template>
    <template #fallback>Loading</template>
  </Suspense>
  <div>
    <button @click="handleChange">New Dog</button>
  </div>
</template>

<script setup>
import DogApi from './components/DogApi.vue';
import { defineEmits } from 'vue'

const emit = defineEmits(['random'])

const handleChange = () => {
  emit('random')
  console.log(emit)
}

// const emit = defineEmits(['random'])


</script>

<style>

</style>