import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

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
    component: () => import('@/views/AdminView.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
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
    path: '/account/:id',
    name: 'account',
    props: true,
    component: () => import('@/views/AccountView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top of the page on route navigation
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' }; // Ensure smooth scrolling to the top
    }
  }
})

router.beforeEach(async (to, from, next) => {
  // Fetch token directly from document.cookie or another method
  const token = document.cookie.split('; ').find(row => row.startsWith('LegitUser='))?.split('=')[1]?.token

  if (token) {
    try {
      await store.dispatch('fetchUserFromToken', token)
    } catch (error) {
      console.error('Failed to fetch user from token:', error)
      document.cookie = 'LegitUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      store.commit('setUser', null)
    }
  }

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  const isAuthenticated = !!store.state.user
  const isAdmin = store.state.user?.role === 'admin'

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else if (requiresAdmin && !isAdmin) {
    next('/')
  } else {
    next()
  }
})



export default router