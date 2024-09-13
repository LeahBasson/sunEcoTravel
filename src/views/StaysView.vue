<template>
    <div class="container">
      <div class="row" id="AdventureRoulette">
        <div class="banner-overlay"></div>
        <div class="banner-image">
          <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Explore A Variety Of Stays</h1>
            <p class="animate__animated animate__fadeInUp">Discover the perfect accommodation for every type of traveler. Whether you’re dreaming of a luxurious resort, a cozy boutique hotel, or a unique stay in an exotic location, we have handpicked options to suit your every need.</p>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
          </div> 
        </div>
      </div>
  
      <div class="row" id="stays">
        <!-- Ellerman House -->
        <div class="content" data-aos="fade-up"  data-aos-duration="3000">
          <div class="carousel-hotels">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ellermanHouseStay.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ellerman-outdoor.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ellerman-sitting-area.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/ellerman-room.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ellermanHouseStay.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ellerman-outdoor.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ellerman-sitting-area.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/ellerman-room.jpg" class="img-fluid" alt="Slide">
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
            <Card class="card" v-for="hotel in hotels.slice(6, 7)" :key="hotel.hotelID">
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

         <!-- Saint George Hotel -->
         <div class="content" data-aos="fade-up"  data-aos-duration="4000">
          <div class="content-hotels2" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(7, 8)" :key="hotel.hotelID">
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
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-hotel.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-room.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-outdoor.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-restaurant.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="4" aria-label="Slide 5"
                style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-sitting-area.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-hotel.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-room.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-outdoor.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-restaurant.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/saint-george-sitting-area.jpg" class="img-fluid" alt="Slide">
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

        <!-- Four Seasons Resort Bora Bora -->
        <div class="content" data-aos="fade-up"  data-aos-duration="5000">
          <div class="carousel-hotels">
            <div id="carouselExample3" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/four-seasons-resort-bora.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/bora-bora-pool.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/bora-bora-tennis.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/bora-bora-activities.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/four-seasons-resort-bora.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/bora-bora-pool.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/bora-bora-tennis.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/bora-bora-activities.jpg" class="img-fluid" alt="Slide">
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
            <Card class="card" v-for="hotel in hotels.slice(8, 9)" :key="hotel.hotelID">
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

        <!-- Simons Town  -->
        <div class="content" data-aos="fade-up"  data-aos-duration="6000">
          <div class="content-hotels2" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(9, 10)" :key="hotel.hotelID">
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
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/simonsTownStay.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/simonstown-outdoor.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/simonstown-bathroom.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/simonstown-restaurant.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/simonsTownStay.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/simonstown-outdoor.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/simonstown-bathroom.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/simonstown-restaurant.jpg" class="img-fluid" alt="Slide">
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

        <!-- Groove Stay  -->
        <div class="content" data-aos="fade-up"  data-aos-duration="7000">
            <div class="carousel-hotels">
            <div id="carouselExample5" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/GrooveStay.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/shinjuku-room.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/shinjuku-bathroom.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/shinjuku-laundry.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/GrooveStay.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/shinjuku-room.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/shinjuku-bathroom.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/shinjuku-laundry.jpg" class="img-fluid" alt="Slide">
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
            <Card class="card" v-for="hotel in hotels.slice(10, 11)" :key="hotel.hotelID">
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

        <!-- One And Only -->
        <div class="content" data-aos="fade-up"  data-aos-duration="8000">
          <div class="content-hotels2" v-if="hotels">
            <Card class="card" v-for="hotel in hotels.slice(11, 12)" :key="hotel.hotelID">
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
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-hotel.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="1" aria-label="Slide 2"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-gym.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="2" aria-label="Slide 3"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-room.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="3" aria-label="Slide 4"
                  style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-lounge.jpg');"></button>
                <button type="button" data-bs-target="#carouselExample6" data-bs-slide-to="4" aria-label="Slide 4"
                style="background-image: url('https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-restaurant.jpg');"></button>
              </div>
  
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-hotel.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-gym.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-room.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-lounge.jpg" class="img-fluid" alt="Slide">
                </div>
                <div class="carousel-item">
                  <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/one-and-only-restaurant.jpg" class="img-fluid" alt="Slide">
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
      top: document.getElementById('stays').offsetTop,
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
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/banner.jpeg");
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
    background-color: rgba(30, 35, 40, 0.6); 
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
  