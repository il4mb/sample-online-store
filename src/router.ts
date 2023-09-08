import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import About from './views/about.vue'
import Cart from './views/cart.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/about',
      component: About,
    }
  ],
})
