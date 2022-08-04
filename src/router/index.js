import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/github',
      beforeEnter(to, from, next) {
        window.location.href = "https://github.com/r-grandorder/tri-hermes";
      }
    },
    {
      path: '/redirect',
      beforeEnter(to, from, next) {
        window.location.href = "https://r-grandorder.github.io/tri-hermes/";
      }
    }
  ]
})

export default router
