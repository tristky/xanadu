<template>
  <div id = "nav">
    <NavBar />
  </div>
  <RouterView />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: "App",
};
</script>
