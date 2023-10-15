<template>
  <div>
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/forum">Forum</router-link> |
      <router-link to="/marketplace">Marketplace</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
