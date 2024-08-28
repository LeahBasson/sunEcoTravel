<template>
    <div class="container" id="TopThingsToDoHome">
        <div class="leftContent">
            <h2>Top Things To Do</h2>
            <p>Here are some of the 2023 Top Things To Do, decided by travellers. View experiences and activities that travellers loved most. Book experiences on Sun Eco Travel and get right to the good stuff. Most can be cancelled risk-free.</p>
            <router-link to="/topthings" class="alignButton"><button class="btn-homeTopDest">Explore More</button></router-link>
        </div>

        <div class="rightContent">
            <div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/carouselBallons.jpg" class="img-fluid" alt="slideImage2" loading="eager">
      <div class="carousel-caption d-none d-md-block">
        <h5>Cappadocia Hot Air Balloon Ride</h5>
        <p>The natural wonders of Cappadocia are even more impressive when viewed from the air.</p>
      </div>
    </div>
    <div class="carousel-item">
        <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/carouselCruise.jpg" class="img-fluid" alt="slideImage2" loading="eager">
      <div class="carousel-caption d-none d-md-block">
        <h5>Amsterdam Canal Cruise</h5>
        <p>Hop aboard a new, covered and 100% electric canal boat to see all the iconic highlights of Amsterdam.</p>
      </div>
    </div>
    <div class="carousel-item">
        <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/carouselBusTour.jpg" class="img-fluid" alt="slideImage2" loading="eager">
      <div class="carousel-caption d-none d-md-block">
        <h5>Cape Town Bus Tour</h5>
        <p>Explore Cape Town at your own pace with a full-day hop-on hop-off bus pass.</p>
      </div>
    </div>
    <div class="carousel-item">
        <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/image2.jpg" class="img-fluid" alt="slideImage2" loading="eager">
      <div class="carousel-caption d-none d-md-block">
        <h5>Dubai Atlantis Aquaventure Waterpar</h5>
        <p>As the world’s largest waterpark, Atlantis Aquaventure Waterpark is great for all ages.</p>
      </div>
    </div>
    <div class="carousel-item">
        <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/image3.jpg" class="img-fluid" alt="slideImage2" loading="eager">
      <div class="carousel-caption d-none d-md-block">
        <h5>San Juan Guided Snorkel Tour</h5>
        <p>Take advantage of the opportunity to explore Puerto Rico’s underwater landscapes.</p>
      </div>
    </div>
    <div class="carousel-item">
        <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/image5.jpeg" class="img-fluid" alt="slideImage2" loading="eager">
      <div class="carousel-caption d-none d-md-block">
        <h5>Juneau Wildlife Whale Watching</h5>
        <p>Hundreds of humpback whales can be spotted along the coast of Juneau during their annual migration.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
</template>

<script>
export default {
     name: " TopThingsToDoHome"
}
</script>

<style scoped>
#TopThingsToDoHome{
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

#TopThingsToDoHome .carousel-caption{
    background-color: rgba(0, 0, 0, 0.7); 
    font-family: "Raleway", sans-serif;  
}

#TopThingsToDoHome .carousel-caption h5 {
    font-weight: 700;
}

#TopThingsToDoHome .carousel-caption p {
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
  #TopThingsToDoHome{
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