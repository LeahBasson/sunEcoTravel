<template>
    <div class="container" id="topDestinationHome">
        <div class="leftContent">
            <h2>Top Destinations</h2>
        </div>
        <div class="rightContent">
            <div id="carouselExampleCaptions" class="carousel slide">
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
export default {
     name: "TopDestinationHome"
}
</script>

<style>
#topDestinationHome{
    display: flex;
    justify-content: space-evenly;
    padding-top: 5rem;
}

.leftContent{
    width: 40rem;
}

.rightContent{
    width: 40rem;
}

#topDestinationHome .carousel-caption{
    background-color: rgba(0, 0, 0, 0.6); 
}

</style>