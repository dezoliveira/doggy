<template>
  <h1>teste</h1>
  <ul>
    <li
      v-for="img in images"
      :key="img.id"
    >
      <img :src="img.image.message" />
      <h2>{{ img.createdAt }}</h2>
      <h2>{{ img.id }}</h2>
    </li>
  </ul>
</template>
<script>
import { useGalleryStore } from '@/store/useGalleryStore';
import { storeToRefs } from 'pinia';

export default {  
  setup() {
    const store = useGalleryStore()
    const { images } = storeToRefs(store)
    
    return (
      images
    )
  }
}
</script>


<style>

</style>