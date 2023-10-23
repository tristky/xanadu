import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import Forum from "../views/ForumView.vue";
import Marketplace from "../views/MarketplaceView.vue";
import AddProduct from '../views/AddProduct.vue'
import ProductView from '../views/ProductView.vue' 

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
      path:'/AddProduct',
      name:'AddProduct',
      component: AddProduct
    },
    {
      path: '/product/:id',  // Route with dynamic segment for the product ID
      name: 'ProductView',
      component: ProductView
    }
  ],
});

export default router;
