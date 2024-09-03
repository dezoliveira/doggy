<script setup>
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';
// import doggyImage from '@/assets/images/logo2.png'
</script>
<template>
  <div class="background" loading="lazy">

  </div>
  <main>
    <div class="container">
      <div class="hero">
        <!-- <img :src="doggyImage" width="250px" class="logo-img"/> -->
        <h1>
          Bem vindo(a) ao<strong> Doggy 🐶</strong><br/>
          Sua <strong>galeria</strong> esta aqui
        </h1>
        <RouterLink to="/dogs">
          <Button text="Começar" btnClass="neutral"/>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<style scoped>
  .background {
    background-image: url('../assets/images/doggy-bg-min.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  .hero {
    text-align: center;
  }

  .hero 

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

  /* .hero {
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 25px 40px;
  } */

  @media screen and (max-width:720px){
    .container {
      padding: 0;
      align-items: center;
    }

    .background {
      background-position-x: 33%;
    }

    .hero {
      background-color: rgba(0, 0, 0, .9);
      color: #fff;
      padding: 10px;
    }

    .hero h1 {
      font-size: x-large;
    }

    .hero button {
      background-color: aqua;
    }
  }
</style>
