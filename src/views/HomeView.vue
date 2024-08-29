<script setup>
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';
// import doggyImage from '@/assets/images/logo2.png'
</script>
<template>
  <div class="background">

  </div>
  <main>
    <div class="container">
      <div style="text-align: center;">
        <!-- <img :src="doggyImage" width="250px" class="logo-img"/> -->
        <h1>
          Welcome to<strong> Doggy</strong><br/>
          Your <strong>Doggy Gallery</strong> Here
        </h1>
        <RouterLink to="/dogs">
          <Button text="Doggy Now" btnClass="neutral"/>
        </RouterLink>
      </div>
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
    background-color: #a5b4fc;
    padding: 15px;
  }

  strong {
    color: brown
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 100vh;
    padding-right: 250px;
  }

  .container h1 {
    margin: 0;
  }

  @media screen and(max-width:720px){
    .container {
      padding: 0;
      align-items: center;
    }
  }

  @media screen and (max-width:720px){
    .container {
      padding: 0;
      align-items: center;
    }
  }
</style>
