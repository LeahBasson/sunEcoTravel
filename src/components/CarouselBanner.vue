<template>
    <div class="container-fluid no-gutters">
        
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class="overlay"></div>
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/homBanner1.jpg" class="img-fluid" alt="slideImage" loading="eager">
    </div>
    <div class="carousel-item">
         <div class="overlay"></div>
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/banner4.jpg" class="img-fluid" alt="slideImage" loading="eager">
    </div>
    <div class="carousel-item">
         <div class="overlay"></div>
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
    name: "CarouselBanner"
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
        background-color: rgba(0, 0, 0, 0.4); 
        z-index: 1;
    }

    .hb-content{
        position: absolute;
        top: 10rem;
        left: 28rem;
        width: 40rem;
        z-index: 1;
    }
    
    .carousel-caption{
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
        width: 40rem;
    }
    
    .carousel-caption h1{
        color: var(--secondary);
        font-size: 2.6rem;
        text-align: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
    }
    
    .carousel-caption p{
        color: var(--secondary);
        text-align: center;
        font-size: 1.2rem;
        font-family: "Montserrat", sans-serif;
    }
    
    .hb-button{
        padding: 0.5rem 2rem;
        background-color: var(--alternative);
        border: 1px solid var(--primary);
        border-radius: 0.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        margin-top: 1rem;
    }
    
    .hb-button:hover{
        transition: 2s;
        background-color: var(--awesome);
    }
    
    .hb-bannerLinks{
       display: flex;
       justify-content: space-between;
       width: 6rem;
       margin:auto;
       margin-top: 1.3rem;
       font-size: 1.3rem;
    }

    .scroll-btn {
  width: 4rem;
  border-radius: 100%;
  background-color: var(--alternative);
  border: none;
  color: var(--primary);
  font-size: 24px;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 2rem;
}

.scroll-btn:hover {
  transition: 2s;
        background-color: var(--awesome);
}
    @media (width < 999px)
    {
      .scroll-btn {
       display: none;
      }

        img[alt='slideImage']{
        width: 100%;
        height: 40vh;
      }
    
      .carousel-caption{
        width: 14rem;
      }
    
      .carousel-caption h1{
        font-size: 1.1rem;
      }
    
      .carousel-caption p{
        font-size: 0.9rem;
      }
    
    .hb-button{
      padding: 0.2rem 1rem; 
      margin-top: -0.5rem;
      font-size: 0.8rem;
    }
    .hb-bannerLinks{
      font-size: 0.9rem;
      margin-top: 0.6rem;
    }
    }

</style>