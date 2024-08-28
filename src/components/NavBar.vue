<template>
    <nav class="navbar navbar-expand-lg">
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
                   <router-link class="nav-link nav-link-hover" aria-current="page" to="/">Home</router-link>
                 </li>
                 <li class="nav-item dropdown mt-2">
                     <a class="nav-link nav-link-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Pricing
                      <i class="fas fa-chevron-down"></i>
                     </a>
                     <ul class="dropdown-menu">
                       <li><router-link to="/newproducts" class="dropdown-item">Hotels</router-link></li>
                       <li><router-link to="/products" class="dropdown-item">Adventure Roulette</router-link></li>
                     </ul>
                   </li>
                   <li class="nav-item mt-2">
                     <router-link to="#" class="nav-link" aria-current="page">Gallery</router-link>
                   </li>
                   <li class="nav-item mt-2">
                     <router-link to="/about" class="nav-link" aria-current="page">About Us</router-link>
                   </li>
                   <li class="nav-item mt-2">
                     <router-link to="/admin" class="nav-link" aria-current="page">Admin</router-link>
                   </li>
                   <li class="nav-item mt-2">
                     <router-link to="/contact" class="nav-link" aria-current="page">Contact Us</router-link>
                   </li>
               </ul>
               
               <button class="btn-signIn">
                Sign in
               </button>
               
             </div>
     
           </div>
         </div>
       </nav>
 </template>
 
 
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
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}

.nav-link {
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.1rem;
}

.nav-link i {
    font-size: 1rem;
}

.dropdown-item:active {
    background-color: #5D7599;
}

.btn-signIn {
    background-color: transparent;
    padding: 0.1rem 1.7rem;
    border: 1px solid var(--secondary);
    color: var(--secondary);
    border-radius: 0.5rem;
    font-weight: 500;
}

.btn-signIn:hover {
    background-color: var(--awesome);
}

@media (max-width: 999px) {
    .navbar-nav {
        text-align: left;
        margin-left: 1rem;
    }

    .btn-signIn {
        display: flex;
        margin-left: 1rem;
        margin-top: 1rem;
        padding: 0.1rem 1.3rem;
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
}


</style>
