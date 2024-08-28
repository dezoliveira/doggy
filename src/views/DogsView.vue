<script setup>
import Button from '@/components/Button.vue';
import DogImage from '@/components/DogImage.vue';

import { onMounted, ref } from 'vue';
import { useFetchApi } from '@/composables/useFetchApi';
import { useGalleryStore } from '@/store/useGalleryStore';

const store = useGalleryStore()

const dogImage = ref('')

onMounted(() => {
  getDog()
})

const getDog = async() => {
  const data = await useFetchApi('https://dog.ceo/api/breeds/image/random')
  dogImage.value = data.info
}

const addDog = () => {
  // dogArray.value.push(dogImage.value)
  store.addToGallery(dogImage.value)
}
</script>

<template>
  <main>
    <div class="container">
      <h1 class="title">Escolha um Dog</h1>
      <div>
        <Suspense>
          <template #default>
            <DogImage :image="dogImage"/>
          </template>
          <template #fallback>
            Loading
          </template>
        </Suspense>
      </div>
      <div class="btn-group">
        <!-- Get Dog Button -->
        <Button
          text="Get Dog"
          btnClass="primary"
          @click="getDog" 
        />
        <!-- Add to Gallery Button -->
        <Button
          text="Add to Gallery"
          btnClass="secondary"
          @click="addDog"
        />
        <!-- Goto Gallery Button -->
        <Router-Link to="/gallery">
          <Button
            text="Goto Gallery"
            btnClass="secondary"
          />
        </Router-Link>
      </div>
    </div>
  </main>
</template>
<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .background {
    background-image: url('../assets/images/doggy-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  .container { 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 80vh;
    background-color: #fff;
    width: 70vw;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    border-radius: 15px;
  }

  .btn-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }

  @media screen and (max-width:720px) {
    .container {
      width: 90vw;
    }
  }
</style>
