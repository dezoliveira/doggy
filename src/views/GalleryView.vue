<template>
  <main>
    <div class="container">
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
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center ;
}

.container {
  width: 90vw;
  height: 80vh;
  padding: 50px;
  background-color: #fff;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  border-radius: 15px;
}

h1 {
  text-align: center;
}

.btn-group {
  /* display: flex; */
  position: absolute;
  bottom: 15px;
  right: 15px;
}

@media screen and (max-width:720px){
  .container {
    padding: 12px;
  }
}
</style>