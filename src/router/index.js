import { createRouter, createWebHistory } from 'vue-router' 
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

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
    // beforeEnter(){
    //   console.log(cookies.get('LegitUser'));
      
    //   const result = cookies.get('LegitUser')?.result
    //   console.log(result);
      
    //   // if(result){
    //   //   if(result.userRole.toLowerCase() == 'admin') {
    //   //     router.push({name: 'admin'})
    //   //   }else{
    //   //     router.push({name: 'hotels'})
    //   //   }
    //   // }else{
    //   //   router.push({name: 'login'})
    //   // }
    // }
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
    path: '/logout',
    name: 'logout',
    component: ()=> import('@/views/LoginView.vue'),
    beforeEnter() {
      location.reload()
      cookies.remove('LegitUser')
      router.push({name: 'login'})
    }
  },
  {
    path: '/hotelDetails/:id',
    name: 'hotelDetails',
    component: () => import('@/views/HotelDetails.vue')
  },
  {
    path: '/account/:id',
    name: 'account',
    component: () => import('@/views/AccountView.vue'),
    beforeEnter: (to, from, next) => {
      const result = cookies.get('LegitUser')?.result;
      if (result) {
        next();

      } else {
        next({ name: 'login' });
      } 

    }
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('@/views/AllHotelsView.vue')
  },
  {
    path: '/stays',
    name: 'stays',
    component: () => import('@/views/StaysView.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('@/views/ConfirmationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0)
  }
})

export default router