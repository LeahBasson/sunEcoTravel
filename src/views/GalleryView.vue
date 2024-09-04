<template>
    <div class="container">
        <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content">
          <h1 class="animate__animated animate__fadeInDown">Gallery</h1>
          <p class="animate__animated animate__fadeInUp">Discover the world’s most captivating destinations through our curated gallery. From serene beaches to bustling cities, our collection offers a glimpse into the unique experiences each location has to offer. Browse through stunning images and detailed information to find your perfect getaway. Let Sun Eco Travel be your guide to unforgettable adventures.</p>
          <button class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="gallery-heading">
      <h1>Destinations</h1>
    </div>

    <div class="row">
      <div class="gallery-content">
        <div class="card mb-3">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/image 1.jpg" class="card-img-top" alt="CardImage">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card mb-3">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margeniaHotel.jpg" class="card-img-top" alt="CardImage">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card mb-3">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margeniaHotel.jpg" class="card-img-top" alt="CardImage">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card mb-3">
  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margeniaHotel.jpg" class="card-img-top" alt="CardImage">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
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
}
</style>