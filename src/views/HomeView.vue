<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <div class="container">
      <div>
        <h1>Welcome</h1>
      </div>
      <div>
        <RouterLink to="/dogs">
          <Button>
            Let's Start
          </Button>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
  }
</style>
