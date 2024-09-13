<template>
  <div class="container">
    <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content" loading="eager">
          <h1 class="animate__animated animate__fadeInDown">Let the Adventure Choose You!</h1>
          <p class="animate__animated animate__fadeInUp">Feeling adventurous? Every 8 seconds, our Adventure Roulette refreshes with a new, thrilling destination. For explorers who like spontaneous adventures try it now, you never know where you'll end up.</p>
          <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="adventureRoulette-heading" data-aos="fade-up"  data-aos-duration="3000">
      <h1>Unleash Spontaneity with Adventure Roulette
        <span><lord-icon src="https://cdn.lordicon.com/trkmlure.json" trigger="in" delay="1500" state="in-reveal" colors="primary:#000000,secondary:#ff9a00"></lord-icon></span>
      </h1> 
    </div>

    <div class="row" id="adventure-interaction" data-aos="fade-up"  data-aos-duration="3000">
      <input class="form-control" type="text" placeholder="Search by destination" id="searchInput" v-model="searchQuery" @input="performSearch">
      <button class="price-button" @click="toggleSortOrder">{{ sortButtonText }}</button>
    </div>

    <!-- Display hotels -->
    <div class="row" id="adventure-content" v-if="displayedHotels.length" data-aos="fade-up"  data-aos-duration="3000">
      <Card v-for="hotel in displayedHotels" :key="hotel.hotelID">
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

    <!-- No results message -->
    <div v-else-if="searchQuery && !filteredHotels.length">
      <p class="no-results">Hotel doesn't exist</p>
    </div>

    <!-- Spinner for loading -->
    <div v-if="!displayedHotels.length && !hotels.length">
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import AOS from 'aos';
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'

const store = useStore()
const hotels = computed(() => store.state.hotels || [])
const searchQuery = ref('')
const sortOrder = ref('default')
const startIndex = ref(0)
const itemsPerPage = 6
const displayedHotels = ref([])

const filteredHotels = computed(() => {
  let filtered = hotels.value

  // Apply search filter if searchQuery is not empty
  if (searchQuery.value) {
    filtered = filtered.filter(hotel => hotel.hotelName.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }

  // Apply sorting
  if (sortOrder.value === 'lowToHigh') {
    filtered = filtered.sort((a, b) => a.amount - b.amount)
  } else if (sortOrder.value === 'highToLow') {
    filtered = filtered.sort((a, b) => b.amount - a.amount)
  }
  return filtered
})

function updateDisplayedHotels() {
  const totalHotels = filteredHotels.value.length
  displayedHotels.value = filteredHotels.value.slice(startIndex.value, startIndex.value + itemsPerPage)
  startIndex.value = (startIndex.value + itemsPerPage) % totalHotels
}

const sortButtonText = computed(() => {
  if (sortOrder.value === 'lowToHigh') {
    return 'Price: Low to High'
  } else if (sortOrder.value === 'highToLow') {
    return 'Price: High to Low'
  }
  return 'Sort Price'
})

function toggleSortOrder() {
  if (sortOrder.value === 'default') {
    sortOrder.value = 'lowToHigh'
  } else if (sortOrder.value === 'lowToHigh') {
    sortOrder.value = 'highToLow'
  } else {
    sortOrder.value = 'default'
  }
  updateDisplayedHotels() 
}

function performSearch() {
  if (searchQuery.value === '') {
    // If the search query is empty, reset the displayed hotels to the full list
    updateDisplayedHotels()
  } else {
    // Otherwise, filter based on the search query
    displayedHotels.value = filteredHotels.value.slice(0, itemsPerPage)
  }
}

onMounted(() => {
  store.dispatch('fetchHotels').then(() => {
    updateDisplayedHotels() 
    setInterval(updateDisplayedHotels, 8000) // Switch to the next set every 8 seconds
    AOS.init();
  })
})

function scrollDown() {
  window.scrollTo({
    top: document.getElementById('adventureRoulette-heading').offsetTop,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
#AdventureRoulette{
  position: relative;
  z-index: 1;
}

.text{
  color: var(--alternative);
}

.no-results{
  color: var(--primary);
  font-size: 1.4rem;
  margin-top: 2rem;
  font-family: "Poppins", sans-serif;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/banner2.jpg");
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
  margin: 13rem auto 13rem;
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

#adventureRoulette-heading{
    display: flex;
    align-items: center;
    padding-top: 4rem;
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

lord-icon {
    padding-top: 1rem; /* Ensure icon aligns with text */
  width: 5rem;
  height: 5rem;
}

#adventureRoulette-heading h1{
    font-family: "Raleway",sans-serif;
    color: var(--primary);
    font-weight: 700;
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

#adventure-interaction{
    display: flex;
    width: 92%;
    justify-content: space-between;
    margin: auto;
    padding-top: 4rem;
}

#adventure-interaction .form-control{
  border: 1px solid var(--borderColor);
   font-family: "Poppins", sans-serif;
   width: 20rem;
}

.price-button{
    width: 13rem;
    padding: 0.5rem 2rem;
    background-color: var(--alternative);
    border-radius: 0.5rem;
    font-family: "Poppins", sans-serif;
    border: none;
    color: var(--secondary);
    margin-right: 1rem;
}
    
.price-button:hover{
    transition: 2s;
    background-color: var(--awesome);
}

#adventure-content{
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0rem;
    margin: auto;
    gap: 4rem;
    padding-top: 4rem;
    font-family: "Poppins", sans-serif;
}

#adventure-content .card{
  border: 1px solid var(--borderColor);
  border-radius: 0.5rem;
  padding: 0;
}

.card-title {
  color: var(--primary);
}

.lead{
  font-weight: 500;
  font-size: 1.1rem;
}

.btn{
  background-color: var(--alternative);
  color: var(--secondary);
}

.btn:hover{
  background-color: var(--awesome);
}

.button-wrapper{
  display: flex;
  justify-content: space-between;
}

.form-control::placeholder{
  color: var(--primary);
}

@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .banner-content{
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 3rem auto 3rem;
  color: var(--secondary);
  font-family: "Raleway", sans-serif;
  }

  .scroll-btn{
    font-size: 1.4rem;
    display: none;
  }
  
  .banner-content{
    margin-top: 5rem;
  }

  lord-icon {
    display: none;
}

  #adventure-content{
    flex-direction: column;
  }

  #adventure-content .card img{
    width: 100%;
    height: 13rem;
    object-fit: cover;
  }

  #adventure-content .card{
    margin-top: 2rem;
  }

  #adventure-interaction{
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  #adventure-interaction .form-control{
    width: 16rem;
}

  .price-button{
    width: 16em;
    margin: auto;
  }

  .banner-content{
    width: 90%;
  }

  .banner-content h1 {
    font-size: 2.5rem;
    text-align: center;
  }

  .banner-content p{
    font-size: 1rem;
    text-align: center;
  }

  #adventureRoulette-heading h1 {
    text-align: center;
  }
}
</style>
