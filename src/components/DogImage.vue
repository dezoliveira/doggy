<template>
  <div class="dog-image">
    <img
      :src="dogImage.message"
      alt="dog-image"
    >
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';

const props = defineProps(['image'])

const dogImage = ref('')

dogImage.value = props.image

onUpdated(() => {
  dogImage.value = props.image
})
</script>

<style scoped>
  .dog-image img {
    width: 400px;
    height: 400px;
    border-radius: 5%;
  }

  @media screen and (max-width:720px){
    .dog-image img {
      width: 260px;
      height: 260px;
    }
  }
</style>