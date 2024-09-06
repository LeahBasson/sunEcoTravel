<template>
    <div class="container">
      <div class="row">
        <h1 class="details-heading">Hotel Details</h1>
      </div>
      <div class="row justify-content-center" v-if="hotel">
        <Card class="card">
          <template #cardHeader>
            <img :src="hotel.imgUrl" loading="lazy" class="img-fluid img-width" :alt="hotel.hotelName">
          </template>
          <template #cardBody>
            <h3 class="card-title fw-bold">{{ hotel.hotelName }}</h3>
            <p class="lead description">{{ hotel.hotelDescription }}</p>
            <p class="lead"><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
            <p class="lead"><span class="fw-bold">Address</span>: {{ hotel.hotelAdd }}</p>
            <p class="lead"><span class="fw-bold">Country</span>: {{ hotel.country }}</p>
            <p class="lead"><span class="fw-bold">City</span>: {{ hotel.city }}</p>
            <p class="lead"><span class="fw-bold">Amount</span>: R {{ hotel.amount }}</p>
          </template>
        </Card>
      </div>
      <div v-else> 
        <Spinner/>
      </div>
      <!-- Booking Inputs -->
      <div class="row booking-inputs">
        <input type="date" v-model="checkInDate" placeholder="Check-in Date" class="form-control" />
        <input type="date" v-model="checkOutDate" placeholder="Check-out Date" class="form-control" />
        <input type="number" v-model="numberOfRooms" min="1" placeholder="Number of Rooms" class="form-control" />
      </div>
      <div class="detailsButtons">
        <button class="detail-button">Book Now</button>
        <router-link to="/hotels" class="detail-width">
          <button class="detail-button">Explore More</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import Card from '@/components/Card.vue'
  import Spinner from '@/components/Spinner.vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const store = useStore()
  
  const hotel = computed(() => store.state.hotel)

  
  onMounted(() => {
    store.dispatch('fetchHotel', route.params.id)
  })
  
  </script>
  
  <style scoped>
  .card {
    width: 50%;
    display: flex;
    justify-content: space-between;
    color: var(--primary);
    font-family: "Poppins", sans-serif;
  }
  
  .img-width {
    width: 100%;
    border-radius: 0.3rem;
  }
  
  .details-heading {
    font-family: "Poppins", sans-serif;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .detailsButtons {
    display: flex;
    justify-content: space-around;
    width: 77%;
    margin: auto;
  }
  
  .detail-button {
    width: 10rem;
    background-color: var(--alternative);
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 0.3rem;
  }
  
  .detail-button:hover {
    background-color: var(--awesome);
  }
  
  .booking-inputs {
    width: 49%;
    margin: auto;
    padding-bottom: 2rem;
  }
  
  .booking-inputs input {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 999px) {
    .card {
      width: 100%;
    }
  
    .detailsButtons {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      width: 100%;
    }
  
    .detail-button {
      width: 90%;
    }
  
    .description {
      font-size: 1rem;
    }
  
    .img-width {
      width: 92%;
    }
  
    .detail-width {
      width: 100%;
    }
  }
  </style>
  