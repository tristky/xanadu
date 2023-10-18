<script >
import { RouterLink, RouterView } from 'vue-router'
import Products from '../components/Products.vue'

export default {
    name: 'App',
    components: {
        Products
    }
}
</script>

<template>
  <main>
    <Products />
    
  </main>
</template>

