<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div>
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/forum">Forum</router-link> |
      <router-link to="/marketplace">Marketplace</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
  <RouterView />
</template>


<style>


</style>