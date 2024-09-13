<template>
  <div class="container">
    <div class="row" id="hotelBanner">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Where do you want to stay ? </h1>
            <div class="alignment">

              <form class="adventure-search animate__animated animate__fadeInDown" role="search">
              <div class="input-wrapper">
                <input class="form-control" type="text" placeholder="Search hotel name" id="searchInput" v-model="searchQuery">
                <span class="search-icon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <p v-if="noResults" class="no-results">Hotel doesn't exist</p>
            </form>

            <button class="btn-findHotel animate__animated animate__fadeInDown"  @click="findHotels">Find Hotels</button>
            </div>
         
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>

            </div> 
       </div>
      </div>

      <div class="row" id="hotel-searched" v-if="showHotels">
        <Card v-for="hotel in filteredHotels" :key="hotel.hotelID" class="card">
          <template #cardHeader>
          <img :src="hotel.imgUrl" loading="lazy" class="img-fluid" :alt="hotel.hotelName">
        </template>
        <template #cardBody>
          <h5 class="card-title">{{ hotel.hotelName }}</h5>
          <p class="lead text-black"><span class="text">Amount:</span> R{{ hotel.amount }} p/n</p>
          <div class="button-wrapper justify-content-center">
            <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
          </div>
        </template>
        </Card>
      </div>

      <div class="row" id="hotel-heading" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1>Hotels in Top Destinations</h1> 
      </div>

      <div class="row" id="hotel-content" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div class="hotel-link">
          <router-link to="/topDestination" class="lnk">See All</router-link>
        </div>

        <div class="hotel-cards" v-if="hotels">
          <Card v-for="hotel in hotels.slice(0, 4)" :key="hotel.hotelID" class="card">
            <template #cardHeader>
          <img :src="hotel.imgUrl" loading="lazy" class="img-fluid" :alt="hotel.hotelName">
        </template>
        <template #cardBody>
          <h5 class="card-title">{{ hotel.hotelName }}</h5>
          <p class="lead text-black"><span class="text">Amount:</span> R{{ hotel.amount }} p/n</p>
          <div class="button-wrapper justify-content-center">
            <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
          </div>
        </template>
          </Card>
        </div>
        <div v-else>
          <Spinner />
        </div>
        
      </div>

      <div class="row" id="hotel-heading2" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1>Explore a variety of stays</h1> 
      </div>

      <div class="row" id="hotel-content" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div class="hotel-link">
          <router-link to="/stays" class="lnk">See All</router-link>
        </div>

        <div class="hotel-cards" v-if="hotels">
          <Card v-for="hotel in hotels.slice(-4)" :key="hotel.hotelID" class="card">
            <template #cardHeader>
          <img :src="hotel.imgUrl" loading="lazy" class="img-fluid" :alt="hotel.hotelName">
        </template>
        <template #cardBody>
          <h5 class="card-title">{{ hotel.hotelName }}</h5>
          <p class="lead text-black"><span class="text">Amount:</span> R{{ hotel.amount }} p/n</p>
          <div class="button-wrapper justify-content-center">
            <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
          </div>
        </template>
          </Card>
        </div>
        <div v-else>
          <Spinner />
        </div>
        
      </div>

  </div>
</template>

<script setup>
import AOS from 'aos';
import Swal from 'sweetalert2'
import { useStore } from 'vuex'
import { ref, computed, onMounted, watch } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'

const store = useStore()

const searchQuery = ref('')
const showHotels = ref(false)
const loading = ref(true) // To handle loading state

const hotels = computed(() => store.state.hotels)

// Computed property to filter hotels based on search query
const filteredHotels = computed(() => {
  // Ensure hotels is not null or undefined before filtering
  if (hotels.value && Array.isArray(hotels.value)) {
    return hotels.value.filter(hotel =>
      hotel.hotelName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return []; // Return an empty array if hotels is null or not an array
});


// Computed property to determine if there are no results
const noResults = computed(() => {
  return filteredHotels.value.length === 0 && searchQuery.value.trim() !== ''
})

// Function to handle the "Find Hotels" button click
function findHotels() {
  if (searchQuery.value.trim()) {
    if (!noResults.value) {
      showHotels.value = true
      // Scroll down to the hotel-searched div
      setTimeout(() => {
        const hotelSearchedElement = document.getElementById('hotel-searched')
        if (hotelSearchedElement) {
          window.scrollTo({
            top: hotelSearchedElement.offsetTop,
            behavior: 'smooth'
          })
        }
      }, 300)
    } else {
      showHotels.value = false
    }
  } else {
    showHotels.value = false
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please enter a hotel name before searching!',
      confirmButtonColor: '#FF9A00',
    });
  }
}

// Watcher to hide the hotel-searched div and no-results message when the search query is emptied
watch(searchQuery, (newQuery) => {
  if (!newQuery.trim()) {
    showHotels.value = false
  }
})

// Fetch hotels on component mount
onMounted(async () => {
  await store.dispatch('fetchHotels')
  loading.value = false // Update loading state
  AOS.init();
})

// Handle additional scrolling functionality
function scrollDown() {
  window.scrollTo({
    top: document.getElementById('hotel-heading').offsetTop,
    behavior: 'smooth'
  })
}
</script>


<style scoped>
#hotelBanner{
  position: relative;
  z-index: 1;
}

.text{
  color: var(--alternative);
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/greece8.jpg");
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
  width: 64rem;
  margin: 14rem auto 14rem;
  color: var(--secondary);
  font-family: "Raleway", sans-serif;
  /* background-color: pink; */
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

.alignment{
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: auto;
}

.adventure-search {
  position: relative;
  width: 20rem;
  margin-top: 2rem;
}

.input-wrapper {
  position: relative;
}

.form-control {
  width: 100%;
  padding-left: 2.5rem;
  color: var(--primary);
  font-weight: 600;
}

.form-control::placeholder{
  color: var(--primary);
  font-weight: 600;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 1rem;
}

#hotel-heading h1{
  text-align: left;
  font-family: "Raleway", sans-serif;
  padding-top: 6rem;
  padding-left: 5.4rem;
  color: var(--primary);
  font-weight: 700;
}

#hotel-heading2 h1{
  text-align: left;
  font-family: "Raleway", sans-serif;
  padding-top: 6rem;
  padding-left: 5.4rem;
  color: var(--primary);
  font-weight: 700;
}

.btn-findHotel{
  background-color: var(--alternative);
  color: var(--secondary);
  width: 10rem;
  height: 2.4rem;
  margin-top: 2rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: 600;
}
 
.btn-findHotel:hover{
  background-color: var(--awesome);
}

.hotel-link{
  display: flex;
  justify-content: end;
  width: 95%;
  order: 1;
}

.hotel-link .lnk{
  color: var(--primary);
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
}

.hotel-link .lnk:hover{
  color: var(--alternative);
}

#hotel-searched{
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding-top: 3rem;
}

.card{
  border: 1px solid var(--borderColor);
  border-radius: 0.5rem;
  padding: 0;
  font-family: "Poppins",sans-serif;
}

.card-title {
  color: var(--primary);
}

.lead{
  font-weight: 500;
  font-size: 1.1rem;
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

.hotel-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hotel-cards{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  padding-top: 1rem;
  gap: 3rem;
  margin: auto;
  order: 2;
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

  #hotel-heading h1{
    text-align: center;
    padding-left: 0rem;
    padding-top: 3rem;
  }

  #hotel-heading2 h1{
    text-align: center;
    padding-left: 0rem;
    padding-top: 2rem;
  }

  .adventure-search {
 width: 100%;
}

.alignment{
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0rem;
  margin: auto;
}

.btn-findHotel{
  width: 100%;
  margin-top: 1rem;
}

.hotel-link {
  order: 2;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.hotel-cards{
  order: 1;
}
 
}

</style>