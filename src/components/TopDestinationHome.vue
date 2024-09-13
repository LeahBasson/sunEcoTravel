<template>
  <div class="container" id="topDestinationHome">
      <div class="leftContent" data-aos="fade-up"  data-aos-duration="1000">
          <h2>Hotels in Top Destinations</h2>
          <p>A few hotels made our list, as a remarkable piece of art, the size and scale of which boggles the imagination. While many of the team's picks are remote breathe-in-that-fresh-air kinds of places, our list doesn't skimp on cities where the hustle and bustle is part of the fun. There are never-ending reasons to travel, but many go to seek those awe-inspiring moments that stop them in their tracks, searching for the sights that will stay with them forever.</p>
          <router-link to="/topDestination" class="alignButton"><button class="btn-homeTopDest">Explore More</button></router-link>
      </div>

      <div class="rightContent" data-aos="fade-up"  data-aos-duration="1000">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/london6.jpg" class="img-fluid" alt="slideImage2" loading="eager">
    <div class="carousel-caption d-none d-md-block">
      <h5>London</h5>
      <p>It is a city rich in history, with iconic landmarks such as the Tower of London.</p>
    </div>
  </div>
  <div class="carousel-item">
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/carouselAmsterdam.jpg" class="img-fluid" alt="slideImage2" loading="eager">
    <div class="carousel-caption d-none d-md-block">
      <h5>Amsterdam</h5>
      <p>Known for its artistic heritage, elaborate canal system and narrow houses.</p>
    </div>
  </div>
  <div class="carousel-item">
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/Mauritius2.jpg" class="img-fluid" alt="slideImage2" loading="eager">
    <div class="carousel-caption d-none d-md-block">
      <h5>Mauritius</h5>
      <p>Known for its beaches, lagoons and reefs.</p>
    </div>
  </div>
  <div class="carousel-item">
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/paris1.jpg" class="img-fluid" alt="slideImage2" loading="eager">
    <div class="carousel-caption d-none d-md-block">
      <h5>Paris</h5>
      <p>A major European city and a global center for art, fashion, gastronomy and culture.</p>
    </div>
  </div>
  <div class="carousel-item">
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/greece4.jpg" class="img-fluid" alt="slideImage2" loading="eager">
    <div class="carousel-caption d-none d-md-block">
      <h5>Greece</h5>
      <p>Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian sea</p>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
      </div>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  name: "TopDestinationHome",
  
  mounted() {
    AOS.init();
  }

}
</script>

<style scoped>
#topDestinationHome{
  display: flex;
  justify-content: space-evenly;
  padding-top: 9rem;
}

.leftContent{
  width: 40rem;
}

.leftContent h2{
  font-family: "Raleway", sans-serif;
  font-weight: 600;
}

.leftContent p{
 text-align: left;
 font-family: "Poppins", sans-serif;
}

.rightContent{
  width: 40rem;
}

#topDestinationHome .carousel-caption{
  background-color: rgba(0, 0, 0, 0.7); 
  font-family: "Raleway", sans-serif;  
}

#topDestinationHome .carousel-caption h5 {
  font-weight: 700;
}

#topDestinationHome .carousel-caption p {
  font-weight: 600;
}

img[alt='slideImage2']{
      width: 100%;
      height: 60vh;
  }

.btn-homeTopDest{
  background-color: var(--alternative);
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  color: var(--secondary);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

.btn-homeTopDest:hover{
  background-color: var(--awesome);
}

.alignButton{
  display: flex;
  text-decoration: none;
}

@media (width < 999px)
{
#topDestinationHome{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 5rem;
}
.leftContent{
  width: 96%;
  margin: auto;
}

.leftContent p{
 text-align: center;
}

.rightContent{
  width: 100%;
  display: none
}

.btn-homeTopDest{
  background-color: var(--alternative);
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  color: var(--secondary);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin: auto;
}

.alignButton{
  display: flex;
  text-decoration: none;
}
}

</style>