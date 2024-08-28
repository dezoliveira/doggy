<template>
  <main>
    <h1>Galeria</h1>
    <ImageGallery :images="images"/>
    <div class="btn-group">
      <Button
        text="Voltar"
        btnClass="primary"
        @click="this.$router.push({
          name: 'dogs', path: '/dogs'
        })"
      />
    </div>
  </main>
</template>
<script>
import { useGalleryStore } from '@/store/useGalleryStore';
import { storeToRefs } from 'pinia';

import Button from '@/components/Button.vue';
import ImageGallery from '@/components/ImageGallery.vue';

export default {  
  components: {
    ImageGallery,
    Button
  },

  setup() {
    const store = useGalleryStore()
    const { images } = storeToRefs(store)
    const gallery = JSON.parse(localStorage.getItem("gallery"))
    
    return (
      images,
      gallery
    )
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
  color: #fff;
}

.btn-group {
  /* display: flex; */
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>