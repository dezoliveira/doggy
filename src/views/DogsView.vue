<script setup>
import Button from '@/components/Button.vue';
import DogImage from '@/components/DogImage.vue';

import { onMounted, ref } from 'vue';
import { useFetchApi } from '@/composables/useFetchApi';

const dogImage = ref('')

onMounted(() => {
  getDog()
})

const getDog = async() => {
  const data = await useFetchApi('https://dog.ceo/api/breeds/image/random')
  dogImage.value = data.info
}
</script>

<template>
  <main>
    <div class="container">
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
      <div>
        <Button @click="getDog">New Dog</Button>
      </div>
    </div>
  </main>
</template>
<style scoped>
  .container { 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 100vh;
  }
</style>
