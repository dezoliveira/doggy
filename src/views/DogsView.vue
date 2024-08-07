<script setup>
import Button from '@/components/Button.vue';
import DogImage from '@/components/DogImage.vue';

import { onMounted, ref } from 'vue';
import { useFetchApi } from '@/composables/useFetchApi';

const dogImage = ref('')
const dogArray = ref([])

onMounted(() => {
  getDog()
})

const getDog = async() => {
  const data = await useFetchApi('https://dog.ceo/api/breeds/image/random')
  dogImage.value = data.info
}

const addDog = () => {
  dogArray.value.push(dogImage.value)
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
      <div class="btn-group">
        <Button @click="getDog" text="Get Dog"/>
        <Button @click="addDog" text="Add to Gallery"/>
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

  .btn-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }
</style>
