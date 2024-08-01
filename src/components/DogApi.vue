<template>
  <img :src="dogImage.message" alt="dog-image" @random="getDog"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useFetchApi } from '../composables/useFetchApi';

const dogImage = ref('')

onMounted(() => {
  getDog()
})

const getDog = async() => {
  console.log('uc')
  const data = await useFetchApi('https://dog.ceo/api/breeds/image/random')
  dogImage.value = data.info
}

</script>

<style>

</style>