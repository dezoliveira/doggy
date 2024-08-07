<script setup>
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';
</script>
<template>
  <main>
    <div class="container">
      <span style="text-align: center">
        <h1>
          Welcome to<strong> Doggy</strong><br/>
          Your <strong>Doggy Gallery</strong> Here
          
        </h1>
      </span>
      <div>
        <RouterLink to="/dogs">
          <Button text="Doggy Now" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<style scoped>
  strong {
    color: brown
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 100vh;
  }
</style>
