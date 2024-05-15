import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('@/views/Wishlist.vue')
    },
  ]
})

export default router
