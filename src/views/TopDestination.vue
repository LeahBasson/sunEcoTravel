<template>
    <div class="container">
      <div class="row" id="AdventureRoulette">
        <div class="banner-overlay"></div>
        <div class="banner-image">
          <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Hotels in Top Destinations</h1>
            <p class="animate__animated animate__fadeInUp">Find the perfect hotel for your next adventure. Whether you’re seeking luxury in Paris, a cozy boutique in Tokyo, or a beachfront resort in Bali, we have handpicked the best accommodations to make your stay unforgettable.</p>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
          </div> 
        </div>
      </div>
  
      <div class="row" id="topDestination">
        <!-- Padma Hotel -->
        <div class="content" data-aos="fade-up"  data-aos-duration="3000">
          <div class="carousel-hotels">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/padma-hotel-semarang.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/main-pool.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/one-bedroom-suite.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/premier-room-bathroom.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/padma-hotel-semarang.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/main-pool.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/one-bedroom-suite.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/premier-room-bathroom.jpg" class="img-fluid" alt="Slide">
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
  
          <div class="content-hotels" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(0, 1)" :key="hotel.hotelID">
              <template #cardBody>
                <h3 class="card-title fw-bold">{{ hotel.hotelName }}</h3>
                <p class="description">{{ hotel.hotelDescription }}</p>
                <p><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
                <p><span class="fw-bold">Amount</span>: R{{ hotel.amount }} per night</p>
                <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
              </template>
            </Card>
          </div>
  
          <div v-else> 
            <Spinner/>
          </div>
          
        </div>

         <!-- Ozen Reserve Bolifushi -->
         <div class="content" data-aos="fade-up"  data-aos-duration="4000">
          <div class="content-hotels2" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(1, 2)" :key="hotel.hotelID">
              <template #cardBody>
                <h3 class="card-title fw-bold">{{ hotel.hotelName }}</h3>
                <p class="description">{{ hotel.hotelDescription }}</p>
                <p><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
                <p><span class="fw-bold">Amount</span>: R{{ hotel.amount }} per night</p>
                <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
              </template>
            </Card>
          </div>
          <div v-else> 
            <Spinner/>
          </div>
          <div class="carousel-hotels2">
            <div id="carouselExample2" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-reserve-bolifushi.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-beach.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-outdoor.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-room.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-reserve-bolifushi.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-beach.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-outdoor.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ozen-room.jpg" class="img-fluid" alt="Slide">
                </div>
              </div>
  
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> 
          </div>
        </div>

        <!-- Margarenia -->
        <div class="content" data-aos="fade-up"  data-aos-duration="5000">
          <div class="carousel-hotels">
            <div id="carouselExample3" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/margeniaHotel.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/margarenia-pool.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/margarenia-room.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/margarenia-view.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margeniaHotel.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margarenia-pool.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margarenia-room.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/margarenia-view.jpg" class="img-fluid" alt="Slide">
                </div>
              </div>
  
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> 
          </div>
  
          <div class="content-hotels" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(2, 3)" :key="hotel.hotelID">
              <template #cardBody>
                <h3 class="card-title fw-bold">{{ hotel.hotelName }}</h3>
                <p class="description">{{ hotel.hotelDescription }}</p>
                <p><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
                <p><span class="fw-bold">Amount</span>: R{{ hotel.amount }} per night</p>
                <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
              </template>
            </Card>
          </div>
  
          <div v-else> 
            <Spinner/>
          </div>
          
        </div>

        <!-- Le Bristol Paris -->
        <div class="content" data-aos="fade-up"  data-aos-duration="6000">
          <div class="content-hotels2" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(3, 4)" :key="hotel.hotelID">
              <template #cardBody>
                <h3 class="card-title fw-bold">{{ hotel.hotelName }}</h3>
                <p class="description">{{ hotel.hotelDescription }}</p>
                <p><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
                <p><span class="fw-bold">Amount</span>: R{{ hotel.amount }} per night</p>
                <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
              </template>
            </Card>
          </div>
  
          <div v-else> 
            <Spinner/>
          </div>
          <div class="carousel-hotels2">
            <div id="carouselExample4" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/bristolHotel.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/le-bristol-bathroom.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/le-bristol-paris-chambre.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/le-bristol-paris-outdoor.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/bristolHotel.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/le-bristol-bathroom.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/le-bristol-paris-chambre.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/le-bristol-paris-outdoor.jpg" class="img-fluid" alt="Slide">
                </div>
              </div>
  
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> 
          </div>
        </div>

        <!-- Hotel Colline de France -->
        <div class="content" data-aos="fade-up"  data-aos-duration="7000">
            <div class="carousel-hotels">
            <div id="carouselExample5" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/hotel-colline-de-france.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/colline-room.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/colline-outdoor.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/colline-pool.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/hotel-colline-de-france.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/colline-room.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/colline-outdoor.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/colline-pool.jpg" class="img-fluid" alt="Slide">
                </div>
              </div>
  
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample5" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample5" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> 
          </div>

          <div class="content-hotels" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(4, 5)" :key="hotel.hotelID">
              <template #cardBody>
                <h3 class="card-title fw-bold">{{ hotel.hotelName }}</h3>
                <p class="description">{{ hotel.hotelDescription }}</p>
                <p><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
                <p><span class="fw-bold">Amount</span>: R{{ hotel.amount }} per night</p>
                <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
              </template>
            </Card>
          </div>
  
          <div v-else> 
            <Spinner/>
          </div>
          
        </div>

        <!-- Grayson Hotel -->
        <div class="content" data-aos="fade-up"  data-aos-duration="8000">
          <div class="content-hotels2" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(5, 6)" :key="hotel.hotelID">
              <template #cardBody>
                <h3 class="card-title fw-bold">{{ hotel.hotelName }}</h3>
                <p class="description">{{ hotel.hotelDescription }}</p>
                <p><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
                <p><span class="fw-bold">Amount</span>: R{{ hotel.amount }} per night</p>
                <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
              </template>
            </Card>
          </div>
  
          <div v-else> 
            <Spinner/>
          </div>
          <div class="carousel-hotels2">
            <div id="carouselExample6" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/graysonHotel.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/grayson-gym.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/grayson-room.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/grayson-room2.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/graysonHotel.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/grayson-gym.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/grayson-room.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/grayson-room2.jpg" class="img-fluid" alt="Slide">
                </div>
              </div>
  
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample6" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample6" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> 
          </div>
        </div>

      </div>

    </div>
  </template>
  
  <script setup>
  import AOS from 'aos';
  import { useStore } from 'vuex'
  import { computed, onMounted } from 'vue'
  import Spinner from '@/components/Spinner.vue'
  import Card from '@/components/Card.vue'
  const store = useStore()
  const hotels = computed(() => store.state.hotels)
  
  onMounted(() => {
    store.dispatch('fetchHotels');
    AOS.init();
  }) 
  
  function scrollDown() {
    window.scrollTo({
      top: document.getElementById('topDestination').offsetTop,
      behavior: 'smooth'
    })
  }
  </script>
  
  <style scoped>
  #AdventureRoulette {
    position: relative;
    z-index: 1;
  }
  
  .banner-image {
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
    background-color: rgba(30, 35, 40, 0.4); 
    z-index: 1;
  }
  
  .banner-content {
    position: relative;
    z-index: 2;
    width: 44rem;
    margin: 14rem auto 14rem;
    color: var(--secondary);
    font-family: "Raleway", sans-serif;
  }
  
  .banner-content h1 {
    font-weight: 700;
  } 
  
  .banner-content p {
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
  
  .carousel-hotels {
    width: 55%;
  }

  .carousel-hotels2 {
    width: 55%;
    order: 1;
  }
  
  .carousel-inner {
    max-width: 100%;
    overflow: hidden;
  }
  
  img[alt='Slide'] {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
  
  .content {
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    padding-top: 10rem;
  }

  .btnView{
  background-color: var(--alternative);
  color: var(--secondary);
  width: 5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: 600;
}

.btnView:hover{
  background-color: var(--awesome);
}
  
.content-hotels2{
  order: 1;
}
  .card{
    width: 36rem;
    font-family: "Poppins",sans-serif;
  }

  .card p{
    font-size: 1.1rem;
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

  .content{
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: center;
    flex-direction: column;
    padding-top: 3rem;
  }

  .card{
    width: 100%;
  }

  .carousel-hotels {
    width: 100%;
    margin: auto;
  }

  .carousel-hotels2 {
    width: 100%;
    margin: auto;
    order: 1;
  }

  .content-hotels2{
  order: 2;
  width: 100%;
}

.carousel-indicators [data-bs-target] {
   display: none;
  }
}

  </style>
  