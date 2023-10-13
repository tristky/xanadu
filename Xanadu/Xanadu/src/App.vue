<template>
  <div>
    <div id="nav">
      <router-link to="/">Dashboard</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
