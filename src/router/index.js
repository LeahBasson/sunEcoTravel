import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/GalleryView.vue')
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: () => import('@/views/HotelsView.vue')
  },
  {
    path: '/adventureRoulette',
    name: 'adventureRoulette',
    component: () => import('@/views/AdventureRouletteView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SignIn.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router