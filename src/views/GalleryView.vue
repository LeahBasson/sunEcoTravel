<template>
    <div class="container">
        <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image" loading="eager">
        <div class="banner-content">
          <h1 class="animate__animated animate__fadeInDown">Gallery</h1>
          <p class="animate__animated animate__fadeInUp">Discover the world’s most captivating destinations through our curated gallery. From serene beaches to bustling cities, our collection offers a glimpse into the unique experiences each location has to offer. Browse through stunning images and detailed information to find your perfect getaway. Let Sun Eco Travel be your guide to unforgettable adventures.</p>
          <button class="scroll-btn animate__animated animate__fadeInUp" @click="scrollDown">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="gallery-heading" data-aos="fade-up"  data-aos-duration="3000">
      <h1>Destinations</h1>
    </div>

    <div class="row">
      <div class="gallery-content">
        <div class="card mb-3" data-aos="fade-up"  data-aos-duration="3000">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/image 1.jpg" class="card-img-top" alt="CardImage" loading="eager">
  <div class="card-body">
    <h5 class="card-title">Cape Town</h5>
    <p class="card-text">Being home to iconic mountain ranges, stunning natural wonders, thrilling landscapes and ocean vistas, Cape Town offers no shortage of adventures.</p>
  </div>
  <router-link :to="{ name: 'hotels', hash: '#hotelBanner' }"><button class="btnDiscover">Discover</button></router-link>
</div>
<div class="card mb-3" data-aos="fade-up"  data-aos-duration="3000">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/image 10.jpg" class="card-img-top" alt="CardImage" loading="eager">
  <div class="card-body">
    <h5 class="card-title">Switzerland</h5>
    <p class="card-text">Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Switzerland is famous for its mountains, clocks and its food – especially cheese and chocolates.</p>
    <router-link :to="{ name: 'hotels', hash: '#hotelBanner' }"><button class="btnDiscover">Discover</button></router-link>
  </div>
</div>
<div class="card mb-3" data-aos="fade-up"  data-aos-duration="4000">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/venice.jpg" class="card-img-top" alt="CardImage" loading="eager">
  <div class="card-body">
    <h5 class="card-title">Venice</h5>
    <p class="card-text">Venice known as the 'City of Canals' is famous for including its beautiful bridges, gondola rides, atmospheric streets and carnival celebrations.</p>
    <router-link :to="{ name: 'hotels', hash: '#hotelBanner' }"><button class="btnDiscover">Discover</button></router-link>
  </div>
</div>
<div class="card mb-3" data-aos="fade-up"  data-aos-duration="4000">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/japan.jpg" class="card-img-top" alt="CardImage" loading="eager">
  <div class="card-body">
    <h5 class="card-title">Japan</h5>
    <p class="card-text">Japan is known for everything from onsen hot springs and kabuki baths, to all-night neon-lit dance parties, anime, and sushi boat restaurants.</p>
    <router-link :to="{ name: 'hotels', hash: '#hotelBanner' }"><button class="btnDiscover">Discover</button></router-link>
  </div>
</div>
<div class="card mb-3" data-aos="fade-up"  data-aos-duration="5000">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/canada.jpg" class="card-img-top" alt="CardImage" loading="eager">
  <div class="card-body">
    <h5 class="card-title">Canada</h5>
    <p class="card-text">Canada is a country filled with famous landmarks, historical wonders, delicious food, incredible culture,endless outdoor exploration, and maple syrup.</p>
    <router-link :to="{ name: 'hotels', hash: '#hotelBanner' }"><button class="btnDiscover">Discover</button></router-link>
  </div>
</div>
<div class="card mb-3" data-aos="fade-up"  data-aos-duration="5000">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/dubai.jpg" class="card-img-top" alt="CardImage" loading="eager">
  <div class="card-body">
    <h5 class="card-title">Dubai</h5>
    <p class="card-text">Dubai is famous for the record-breaking Burj Khalifa, Dubai Creek, Dubai Mall, and the Palm, its vibrant culture, turbulent history, and modern infrastructure.</p>
    <router-link :to="{ name: 'hotels', hash: '#hotelBanner' }"><button class="btnDiscover">Discover</button></router-link>
  </div>
</div>
      </div>
    </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos';

onMounted(async () => {
  AOS.init();
})

function scrollDown() {
  window.scrollTo({
    top: document.getElementById('gallery-heading').offsetTop,
    behavior: 'smooth'
  })
}
</script>


<style scoped>
#AdventureRoulette{
  position: relative;
  z-index: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/greece9.jpg");
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
    background-color:rgba(30, 35, 40, 0.7); 
    z-index: 1;
}

.banner-content{
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 12rem auto 12rem;
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

#gallery-heading{
  font-family: "Poppins",sans-serif;
  color: var(--primary);
}

#gallery-heading h1{
  text-align: left;
  padding-left: 5.5rem;
  padding-top: 3rem;
}

.card{
  width: 41rem;
  font-family: "Poppins",sans-serif;
}

.gallery-content{
  margin: auto;
  width: 90%;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

img[alt="CardImage"]{
  width: 100%;
  height: 25em;
}

.btnDiscover{
  width: 10rem;
    background-color: var(--alternative);
    color: var(--secondary);
    font-family: "Poppins",sans-serif;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 0.3rem;
    margin-bottom: 2rem;
}

.btnDiscover:hover{
    background-color: var(--awesome);
}

@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .scroll-btn {
    display: none;
  }

  .banner-content{
    width: 100%;
    font-size: 0.8rem;
    margin: 6rem auto 6rem;
  }

  .card{
  width: 100%;
  font-family: "Poppins",sans-serif;
}

img[alt="CardImage"]{
  width: 100%;
  height: auto;
}

.gallery-content{
  margin: auto;
  width: 85%;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

#gallery-heading h1{
  text-align: center;
  padding-left: 0rem;
  padding-top: 3rem;
}
}
</style>