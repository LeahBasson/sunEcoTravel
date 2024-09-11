<template>
    <div class="container-fluid no-gutters" id="homeBanner">
        
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active">
        <div class="overlay"></div>
         <div class="carousel-caption">
        <h1 class="animate__animated animate__fadeInDown">Have fun in the sun with
            Sun Eco Travel</h1>
        <router-link to="/about"><button class="hb-button animate__animated animate__fadeInUp">Find Out More</button></router-link>
        <div class="hb-bannerLinks animate__animated animate__fadeInUp">
        <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
        <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
        <a class="lnk text-white" href="https://github.com/LeahBasson/sunEcoTravel.git" target="_blank"><i class="bi bi-github"></i></a>
        </div>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div>
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/homBanner1.jpg" class="img-fluid" alt="slideImage" loading="eager">
    </div>

    <div class="carousel-item">
         <div class="overlay"></div>
         <div class="carousel-caption">
        <h1 class="animate__animated animate__fadeInDown">Explore our Top Destinations</h1>
        <p class="animate__animated animate__fadeInUp">This year, do more than just dream about the Best in Travel.</p>
        <router-link to="/topDestination"><button class="hb-button animate__animated animate__fadeInUp">Explore Now</button></router-link>
        <div class="hb-bannerLinks animate__animated animate__fadeInUp">
        <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
        <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
        <a class="lnk text-white" href="https://github.com/LeahBasson/sunEcoTravel.git" target="_blank"><i class="bi bi-github"></i></a>
        </div>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div>
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/banner4.jpg" class="img-fluid" alt="slideImage" loading="eager">
    </div>

    <div class="carousel-item">
         <div class="overlay"></div>
         <div class="carousel-caption">
        <h1 class="animate__animated animate__fadeInDown">Read some of our Top Stories</h1>
        <p class="animate__animated animate__fadeInUp">Find your perfect adventure.</p>
        <router-link to="/topstory"><button class="hb-button animate__animated animate__fadeInUp">Explore Now</button></router-link>
        <div class="hb-bannerLinks animate__animated animate__fadeInUp">
        <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
        <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
        <a class="lnk text-white" href="https://github.com/LeahBasson/sunEcoTravel.git" target="_blank"><i class="bi bi-github"></i></a>
        </div>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div>
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/homeBanner3.jpg" class="img-fluid" alt="slideImage" loading="eager">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
    </div>
</template>

<script>
export default {
    name: "CarouselBanner",

    methods: {
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
.container-fluid.no-gutters {
  padding: 0;
  margin: 0;
}

.carousel-inner {
  width: 100%;
  padding: 0;
  margin: 0;
}
    
    img[alt='slideImage']{
        width: 100%;
        height: 87vh;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:rgba(30, 35, 40, 0.6); 
        z-index: 1;
    }

    .hb-content{
        position: absolute;
        top: 10rem;
        left: 28rem;
        width: 40rem;
        z-index: 1;
    }
    
    #homeBanner .carousel-caption{
      z-index: 1;
      position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 42rem;
        font-family: "Raleway", sans-serif;
    }
    
    #homeBanner .carousel-caption h1{
        color: var(--secondary);
        font-size: 3rem;
        text-align: center;
        font-family: "Raleway", sans-serif;
        font-weight: 700;
    }
    
    #homeBanner .carousel-caption p{
        color: var(--secondary);
        text-align: center;
        font-size: 1.2rem;
        font-family: "Montserrat", sans-serif;
    }
    
    .hb-button{
        padding: 0.5rem 2rem;
        background-color: var(--alternative);
        border-radius: 0.5rem;
        font-family: "Poppins", sans-serif;
        margin-top: 1rem;
        border: none;
        color: var(--secondary);
    }
    
    .hb-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }
    
    .hb-bannerLinks{
       display: flex;
       justify-content: space-between;
       width: 10rem;
       margin:auto;
       margin-top: 1.5rem;
       font-size: 1.3rem;
    }

    .hb-bannerLinks .lnk{
        border: 1px solid var(--secondary);
        padding: 0.2rem 0.5rem;
        border-radius: 0.3rem;
    }

    .hb-bannerLinks .lnk:hover{
        background: rgba(255, 255, 255, 0.3);
    }

    .scroll-btn {
  width: 3rem;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  font-size: 24px;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  margin-top: 2rem;
}

.scroll-btn:hover {
  transition: 2s;
  background: rgba(255, 255, 255, 0.3); 
}

#homeBanner .carousel-control-prev{
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: var(--secondary);
    width: 3rem;
    height: 3rem;
    top: 50%;
    left: 8%;
}

#homeBanner .carousel-control-prev:hover{
    color: rgba(255, 255, 255, 0.8);
}

#homeBanner .carousel-control-next{
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: var(--secondary);
    width: 3rem;
    height: 3rem;
    top: 50%;
    right: 8%;
}


    @media (width < 999px)
    {
      .scroll-btn {
       display: none;
      }

        img[alt='slideImage']{
        height: 45vh;
      }
    
      #homeBanner .carousel-caption{
        width: 14rem;
      }
    
      #homeBanner .carousel-caption h1{
        font-size: 1.1rem;
      }
    
      #homeBanner .carousel-caption p{
        font-size: 0.9rem;
      }
    
    .hb-button{
      padding: 0.3rem 1rem; 
      font-size: 0.8rem;
    }
    .hb-bannerLinks{
      font-size: 0.9rem;
      margin-top: 1rem;
      width: 8rem;
    }
    
    }

</style>