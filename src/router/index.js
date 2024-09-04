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
  },
  {
    path: '/topDestination',
    name: 'topDestination',
    component: () => import('@/views/TopDestination.vue')
  },
  {
    path: '/topstory',
    name: 'topstory',
    component: () => import('@/views/TopStory.vue')
  },
  {
    path: '/topthings',
    name: 'topthings',
    component: () => import('@/views/TopThingsToDo.vue')
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import('@/views/BookingsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/hotelDetails/:id',
    name: 'hotelDetails',
    component: () => import('@/views/HotelDetails.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/AccountView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router