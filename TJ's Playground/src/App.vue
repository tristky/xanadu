<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
