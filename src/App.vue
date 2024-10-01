<script>
import Navbar from './components/Navbar.vue'; 

export default {
  components: {
    Navbar
  }
};
</script>

<template>
  <!-- Navigazione -->
  <Navbar></Navbar>

  <router-view></router-view>
</template>

<style scoped>

</style>
