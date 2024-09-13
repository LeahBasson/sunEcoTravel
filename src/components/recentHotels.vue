<template>
    <div class="container" id="ourStoryHome" data-aos="fade-up"  data-aos-duration="5000">
      <div class="row">
        <h2>Recently added hotels</h2>
        
        <div class="storyCards" v-if="recentHotels.length > 0">
          <Card v-for="hotel in recentHotels" :key="hotel.hotelID" class="card">
            <template #cardHeader>
              <img :src="hotel.imgUrl" loading="lazy" class="img-fluid" :alt="hotel.hotelName">
            </template>
            <template #cardBody>
              <h5 class="card-title">{{ hotel.hotelName }}</h5>
              <p class="lead text-black"><span class="text">Amount:</span> R{{ hotel.amount }} p/n</p>
              <div class="button-wrapper justify-content-center">
                <router-link >
                  <router-link :to="{ name: 'hotelDetails', params: { id: hotel.hotelID } }"><button class="btnView">View</button></router-link>
                </router-link>
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
  
  <script>
  import AOS from 'aos';
  import Card from '@/components/Card.vue'
  import Spinner from '@/components/Spinner.vue'
  
  export default {
    name: 'recentHotels',
    components: {
      Card,
      Spinner
    },
    computed: {
      recentHotels() {
        return this.$store.state.recentHotels || []
      }
    },
    mounted() {
      this.$store.dispatch('fetchRecentHotels'),
      AOS.init();
    }
  }
  </script>
  
  <style scoped>
  #ourStoryHome {
    padding-top: 9rem;
  }
  
  #ourStoryHome h2 {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
  }
  
  img[alt="cardImage"] {
    width: 100%;
    height: 11rem;
  }
  
  .storyCards {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
  }
  
  #ourStoryHome .card {
    border: 1px solid var(--borderColor);
  border-radius: 0.5rem;
  padding: 0;
  font-family: "Poppins",sans-serif;
  }

  .card-title {
  color: var(--primary);
}

.text{
  color: var(--alternative);
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

  
  .btn-ReadMore {
    background-color: var(--alternative);
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 0.3rem;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  
  .btn-ReadMore:hover {
    background-color: var(--awesome);
  }
  
  @media (max-width: 999px) {
    #ourStoryHome {
      padding-top: 5rem;
    }
  
    .storyCards {
      padding-top: 2rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    }
  
    #ourStoryHome .card {
      width: 16rem;
      text-align: center;
      margin: auto;
    }
  }
  </style>
  