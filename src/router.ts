import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      component: Home,
    },
    {
      path: '/about',
      component: () => import('./views/about.vue'), 
    }
  ],
})
