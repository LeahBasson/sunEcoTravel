<template>
    <div class="container">
        <div class="row" id="AdventureRoulette">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Let the Adventure Choose You!</h1>
            <p class="animate__animated animate__fadeInUp">Feeling adventurous? Every 60 seconds, our Adventure Roulette refreshes with a new, thrilling destination. Whether it's a hidden beach, a bustling city, or a serene mountain retreat, you never know where you'll end up.</p>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
            </div> 
       </div>
      </div>

      <div class="row" id="adventureRoulette-heading">
        <h1>Unleash Spontaneity with Adventure Roulette<span><lord-icon src="https://cdn.lordicon.com/trkmlure.json" trigger="in" delay="1500" state="in-reveal" colors="primary:#000000,secondary:#ff9a00"></lord-icon></span></h1> 
      </div>

      <div class="row" id="adventure-interaction">
        <form class="adventure-search" role="search">
          <input class="form-control" type="text" placeholder="Search by destination" id="searchInput" v-model="searchQuery">
        </form>
        <button class="price-button">Sort Price</button>
      </div>

      <div class="row" id="adventure-content" v-if="filteredHotels.length">
          <Card v-for="hotel in filteredHotels" :key="hotel.hotelID" class="card">
                <template #cardHeader>
                    <img :src="hotel.imgUrl" loading="lazy" class="img-fluid" :alt="hotel.hotelName">
                </template>
                <template #cardBody>
                    <h5 class="card-title">{{ hotel.hotelName }}</h5>
                    <p class="lead text-black"><span class="text">Amount:</span> R{{ hotel.amount }}</p>
                    <div class="button-wrapper justify-content-between">
                        
                            <button class="btn">View</button>
                        
                        <button class="btn">Cart</button>
                    </div>
                </template>
        </Card> 
      </div>
      <div v-else>
        <p class="no-results">Product not found</p>
      </div>
      <div v-if="!filteredHotels.length && !hotels.length">
      <Spinner />
    </div>

    </div>
</template>

<script setup>
 /* eslint-disable */
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useStore } from 'vuex'
import { ref, computed, onMounted } from 'vue'

const store = useStore()
const hotels = computed(() => store.state.hotels || []) 
const searchQuery = ref('')

const filteredHotels = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return hotels.value.filter(hotel => hotel.hotelName.toLowerCase().includes(query))
})

onMounted(() => {
  store.dispatch('fetchHotels')
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

.adventure-search{
    width: 20rem;
}

.adventure-search .form-control{
   border: 1px solid var(--borderColor);
   font-family: "Poppins", sans-serif;
}

.price-button{
    width: 10rem;
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
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0rem;
    margin: auto;
    gap: 2rem;
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

  .scroll-btn {
    display: none;
  }

  .banner-content{
    width: 100%;
    font-size: 0.8rem;
    margin: 6rem auto 6rem;
  }

  #adventure-interaction{
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    padding-top: 4rem;
    gap: 1rem;
}

.adventure-search{
  width: 97%;
}

#adventureRoulette-heading{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 4rem;
    width: 90%;
    margin: auto;
}

lord-icon {
   display: none;
}

.price-button{
  width: 87%;
  margin-right: 0rem;
}

}
</style>