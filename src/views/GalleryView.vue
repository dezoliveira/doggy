<template>
  <div v-for="img in gallery" :key="img.id">
    <img :src="img.image" />
    <h2>{{ img.createdAt }}</h2>
  </div>
</template>

<script>
import { useGalleryStore } from '@/store/useGalleryStore';
import { storeToRefs } from 'pinia';

export default {  
  setup() {
    const store = useGalleryStore()
    const { gallery } = storeToRefs(store)

    console.log(gallery)
  
    return (
      gallery
    )
  }
}
</script>

<style>

</style>