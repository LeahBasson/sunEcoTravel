<template>
    <div class="container">
        <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content">
          <h1 class="animate__animated animate__fadeInDown">Hotels in Top Destinations</h1>
          <p class="animate__animated animate__fadeInUp">Find the perfect hotel for your next adventure. Whether you’re seeking luxury in Paris, a cozy boutique in Tokyo, or a beachfront resort in Bali, we have handpicked the best accommodations to make your stay unforgettable.</p>
          <button class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="topDestination">
        <div class="content">
            <div class="carousel-hotels">
                <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
   
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/padmaHotel.jpg');"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"
                style="background-image: url('https://via.placeholder.com/600x400?text=Thumbnail+2');"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"
                style="background-image: url('https://via.placeholder.com/600x400?text=Thumbnail+3');"></button>
    </div>

    
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/padmaHotel.jpg" class="img-fluid" alt="Slide">
        </div>
        <div class="carousel-item">
            <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/OzenHotel.jpg" class="img-fluid" alt="Slide">
        </div>
        <div class="carousel-item">
            <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margeniaHotel.jpg" class="img-fluid" alt="Slide">
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
            <div class="content-hotels">
                <p>hi</p>
            </div>
        </div>
    </div>

    </div>
</template>

<style scoped>
#AdventureRoulette{
  position: relative;
  z-index: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/topDestinations.jpg");
    background-size: cover;
    background-position: center; 
    position: relative;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(30, 35, 40, 0.4); 
    z-index: 1;
}

.banner-content{
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 14rem auto 14rem;
  color: var(--secondary);
  font-family: "Raleway", sans-serif;
}

.banner-content h1 {
    font-weight: 700;
    z-index: 2;
} 

.banner-content p{
    font-weight: 500;
    font-size: 1.2rem;
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

.carousel-indicators [data-bs-target] {
    width: 100px;
    height: 70px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    border: 1px solid #ddd;
}
.carousel-indicators .active {
    border-color: #333;
}

.content-hotels{
    width: 38rem;
}

.content{
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    padding-top: 4rem;
}

img[alt='Slide'] {
    width: 40rem;
    height: 25rem;
}
</style>
