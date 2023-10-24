import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import Forum from "../views/ForumView.vue";
import Marketplace from "../views/MarketplaceView.vue";
import AddProduct from '../views/AddProduct.vue'
import ProductView from '../views/ProductView.vue'
import Cart from '../views/CartView.vue' // Import the Cart component here
import EditProduct from '../views/EditProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/forum",
      name: "forum",
      component: Forum,
    },
    {
      path: "/marketplace",
      name: "marketplace",
      component: Marketplace,
    },
    {
      path: '/marketplace/AddProduct',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/marketplace/product/:id',
      name: 'ProductView',
      component: ProductView
    },
    {
      path:'/marketplace/product/:id/edit',
      name: 'EditProduct',
      component: EditProduct
    },
    {
      path: '/cart', // Add the cart route here
      name: 'Cart',
      component: Cart
    }
  ],
});

export default router;
