<template>
  <main>
    <Navbar />
    <RouterView />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
</style>