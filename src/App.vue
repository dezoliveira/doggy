<template>
  <img :src="dogImage.message" alt="dog-image"/>
  <div>
    <button @click="randomDog">New Dog</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useFetchApi } from './composables/useFetchApi';

const dogImage = ref('')

onMounted(() => {
  randomDog()
})

const randomDog = async () => {
  const data = await useFetchApi('https://dog.ceo/api/breeds/image/random')
  dogImage.value = data.info
}
</script>

<style>

</style>