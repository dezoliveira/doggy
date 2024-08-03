<template>
  <div>
    <img
      :src="dogImage.message"
      alt="dog-image"
      class="dog-image"
      width="400px"
      height="400px">
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

  img{
    min-height: "100px";
    max-height: "100px";
    border-radius: 5%;
  }
</style>