<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div>
    <div id="nav">
      <NavBar/>
    </div>
    <router-view />
  </div>
  <RouterView />
</template>


<style>


</style>