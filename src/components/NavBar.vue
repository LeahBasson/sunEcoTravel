<template>
    <nav class="navbar navbar-expand-lg sticky-top">
         <div class="container-fluid">
           <router-link to="/"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/sunEcoTravel/FinalLogo.png" alt="logo" loading="eager"></router-link>
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
             <div class="offcanvas-header">
               <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                 <router-link to="/"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/sunEcoTravel/FinalLogo.png" alt="logo" loading="eager"></router-link>
               </h5>
               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
             
             <div class="offcanvas-body">
               <ul class="navbar-nav justify-content-center flex-grow-1">
                 <li class="nav-item mt-2">
                   <router-link class="nav-link nav-link-hover" aria-current="page" to="/" :class="{ active: $route.path === '/' }">Home</router-link>
                 </li>
                 <li class="nav-item dropdown mt-2">
                     <a class="nav-link nav-link-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" :class="{ active: isDropdownActive }">
                      Pricing
                      <i class="fas fa-chevron-down"></i>
                     </a>
                     <ul class="dropdown-menu">
                       <li><router-link to="/hotels" class="dropdown-item" :class="{ active: $route.path === '/hotels' }">Hotels</router-link></li>
                       <li><router-link to="/adventureRoulette" class="dropdown-item" :class="{ active: $route.path === '/adventureRoulette' }">Adventure Roulette</router-link></li>
                       <li><router-link to="/all" class="dropdown-item" :class="{ active: $route.path === '/all' }">All Destinations</router-link></li>
                     </ul>
                   </li>
                   <li class="nav-item mt-2">
                     <router-link to="/gallery" class="nav-link" aria-current="page">Gallery</router-link>
                   </li>
                   <li class="nav-item mt-2">
                     <router-link to="/about" class="nav-link" aria-current="page">About Us</router-link>
                   </li>
                   <li class="nav-item mt-2" v-show="isAdmin">
                     <router-link to="/admin" class="nav-link" aria-current="page" >Admin</router-link>
                   </li>
                   <li class="nav-item mt-2">
                     <router-link to="/contact" class="nav-link" aria-current="page">Contact Us</router-link>
                   </li>
               </ul>
               
               <ul class="navbar-nav justify-content-end">
                <li class="nav-item dropdown mt-2">
                     <a class="nav-link nav-link-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" :class="{ active: isLoginActive }">
                      <i class="bi bi-person-circle"></i>
                     </a>
                     <ul class="dropdown-menu">
                       <li><router-link to="/login" class="dropdown-item" :class="{ active: $route.path === '/login' }">Login</router-link></li>
                       <li><router-link :to="'/account/' + userID" class="dropdown-item" :class="{ active: $route.path === '/account' }">Account</router-link></li>
                     </ul>
                   </li>
                <li class="nav-item mt-2 booking">
                     <router-link to="/bookings" class="nav-link" aria-current="page"><i class="bi bi-suitcase-lg"></i>
                    </router-link>    
                </li>
                
                <router-link to="/signin" class="mt-1 textDecor">
                <button class="btn-signIn">
                Sign up
               </button>
               </router-link>
               </ul>
               
             </div>
     
           </div>
         </div>
       </nav>
 </template>
 
 <script>
export default {
  computed: {
    isDropdownActive() {
      const activeRoutes = ['/hotels', '/adventureRoulette', '/all'];
      return activeRoutes.includes(this.$route.path);
    },
    isLoginActive() {
      const activeRoutes = ['/login', '/account'];
      return activeRoutes.includes(this.$route.path);
    },
    user() {
      return this.$store.state.user;
    },
    userID() {
      return this.user ? this.user.userID : null;
    },
    isAdmin() {
      return this.user?.userRole?.toLowerCase() === 'admin';
    }
  }
}
</script>

 <style scoped>
img[alt='logo'] {
    width: 10rem;
    aspect-ratio: 2/1;
    object-fit: cover;
    object-position: center;
    transition: all 0.5s;
}

img[alt='logo']:hover {
    transform: scale(1.1);
}

.navbar {
    background-color: var(--alternative);
}


.nav-item {
    margin-left: 1rem;
    margin-right: 1rem;
}

.nav-link {
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.1rem;
}

.nav-link:hover {
  color: var(--primary);
}

.textDecor{
    text-decoration: none;
}

.nav-link i {
    font-size: 1.3rem;
}

.dropdown-item:hover, .dropdown-item.active  {
    background-color: var(--awesome) !important;
    color: var(--secondary);
}

.btn-signIn {
    background-color: transparent;
    padding: 0.3rem 1.7rem;
    border: 1px solid var(--secondary);
    color: var(--secondary);
    border-radius: 0.5rem;
    font-weight: 500;
}

.btn-signIn:hover {
    background-color: var(--awesome);
}

.booking{
  margin-right: 2rem;
}

.badge{
  font-size: 1rem;
}

.dropdown-menu li{
  font-family: "Poppins",sans-serif;
}

@media (max-width: 999px) {
    .navbar-nav {
        text-align: left;
        margin-left: 1rem;
    }

    .btn-signIn {
        display: flex;
        margin-top: 1rem;
        padding: 0.3rem 1.3rem;
    }

    img[alt='logo'] {
        width: 10rem;
    }

    .nav-item {
        margin-right: 0;
        margin-left: 0;
    }

    .offcanvas {
        background-color: var(--alternative);
    }

    .booking{
  margin-right: 0rem;
}
}
</style>
