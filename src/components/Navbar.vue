<template>
  <nav class="navbar">
    <div  class="nav-items" >
      <RouterLink v-for="nav in paths" :key="nav.name" :to="nav.path">
        {{ nav.name }}
      </RouterLink>
    </div>
    <div>
      <Button
        text="Gallery"
        btnClass="secondary"
        @click="this.$router.push(
          {name: 'gallery', path: '/gallery'}
        )"
      />
    </div>
  </nav>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from './Button.vue';
export default {  
  components: {
    Button
  },

  setup() {
    // const navItems = ref([])
    const paths = reactive([
      {
        name: 'home',
        path: '/'
      },
      {
        name: 'dogs',
        path: '/dogs'
      },
      {
        name: 'gallery',
        path: '/gallery'
      },
    ])
    
    return {
      paths
    }
  
  }
}
</script>

<style>
  .navbar {
    /* position: fixed;
    display: block; */
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 25px;
    width: 100%;
    /* background: #4ade80; */
    background-color: black
  }

  .navbar .nav-items {
    display: flex;
    gap: 10px;
  }

  .navbar .nav-items a {
    color: #fff;
    font-size: 20px;
  }

  .navbar .nav-items a:hover {
    color: #4ade80;
  }
</style>