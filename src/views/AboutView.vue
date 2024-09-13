<template>
  <div class="container">
    <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content" loading="eager">
          <h1 class="animate__animated animate__fadeInDown">About Us</h1>
          <p class="animate__animated animate__fadeInUp">At Sun Eco Travel, we make finding and booking the ideal hotel a breeze.</p>
          <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="about-content-one" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <h1>Sun Eco Travel wants to offer you the best expericences and memories of your life !</h1>
      <p>Founded in 2002, we are a corporate travel company providing travel management solutions to large domestic and global companies.</p>
    </div>

    <div class="row" id="about-content-two" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
     <div class="imgDiv">
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/aboutImage.png" class="img-fluid" alt="aboutImage" loading="eager">
     </div>
     <div class="content">
      <h2>About </h2>
      <p>Welcome to Sun Eco Travel, your gateway to unforgettable hotel experiences!</p>
      <p>At Sun Eco Travel, we are dedicated to making your travel dreams come true. Based in Cape Town, South Africa, we specialize in providing a seamless and enjoyable hotel booking experience. Whether you’re planning a romantic getaway, a family vacation, or a business trip, we’ve got you covered.</p>
      <p>Our mission is to connect travelers with the perfect accommodations, ensuring a comfortable and memorable stay. We believe that every journey should be special, and we are here to help you find the best hotels that suit your needs and preferences.</p>
     </div>
    </div>

    <div class="row" id="icons" data-aos="fade-up"  data-aos-duration="3000">
      <div class="icons-content">
        <i class="bi bi-houses-fill"></i>
        <p>Wide Selection of Hotels</p>
      </div>
      <div class="icons-content">
        <i class="bi bi-person-heart"></i>
        <p>User-Friendly Booking</p>
      </div>
      <div class="icons-content">
        <i class="bi bi-bookmark-star-fill"></i>
        <p>Exclusive Deals</p>
      </div>
      <div class="icons-content">
        <i class="bi bi-headset"></i>
        <p>Customer Support</p>
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
    top: document.getElementById('about-content-one').offsetTop,
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
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/aboutBanner.jpg");
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
    background-color:rgba(30, 35, 40, 0.5); 
    z-index: 1;
}

.banner-content{
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 15rem auto 15rem;
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

#about-content-one{
  font-family: "Poppins",sans-serif;
  color: var(--primary);
  width: 96%;
  margin: auto;
  padding-top: 12rem;
}

#about-content-one p{
  font-size: 1.2rem;
  width: 60%;
  margin: auto;
  padding-top: 4rem;
}

.imgDiv {
  width: 35rem;
}

.content{
  width: 40rem;
}

.content p{
  font-size: 1.2rem;
}

#about-content-two{
  display: flex;
  justify-content: space-between;
  width: 91%;
  margin: auto;
  padding-top: 14rem;
  font-family: "Poppins",sans-serif;
  color: var(--primary);
}

#icons{
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin: auto;
  font-family: "Poppins",sans-serif;
  padding-top: 10rem;
  padding-bottom: 5rem;
  color: var(--primary);
}

.icons-content{
  width: 25%;
}

.icons-content p{
  font-size: 1.3rem;
}

.icons-content i{
  font-size: 8rem;
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

  #about-content-one{
    width: 92%;
  margin: auto;
  padding-top: 4rem;
}

#about-content-one p{
  font-size: 1.2rem;
  width: 100%;
  margin: auto;
  padding-top: 4rem;
}

#about-content-two{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 92%;
  margin: auto;
  padding-top: 4rem;
}

.imgDiv {
  width: 100%;
}

.content{
  width: 100%;
  padding-top: 3rem;
}

#icons{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 97%;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.icons-content{
  width: 100%;
  margin: auto;
}
}
</style>
