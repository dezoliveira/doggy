<script setup>
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';
import doggyImage from '@/assets/images/logo2.png'
</script>
<template>
  <div class="background">

  </div>
  <main>
    <div class="container">
      <span style="text-align: center;">
        <img :src="doggyImage" width="250px" class="logo-img"/>
        <h1>
          Welcome to<strong> Doggy</strong><br/>
          Your <strong>Doggy Gallery</strong> Here
        </h1>
      </span>
      <RouterLink to="/dogs">
        <Button text="Doggy Now" btnClass="primary"/>
      </RouterLink>
    </div>
  </main>
</template>
<style scoped>
  .background {
    background-image: url('../assets/images/doggy-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  .logo-img {
    border-radius: 50%;
    background-color: black;
    padding: 15px;
  }

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
