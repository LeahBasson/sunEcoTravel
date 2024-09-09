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
          <p class="lead"><span class="fw-bold">Contact Information</span>: {{ hotel.contactInfo }}</p>
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
      <input type="datetime-local" v-model="checkInDate" placeholder="Check-in Date" class="form-control" />
      <input type="datetime-local" v-model="checkOutDate" placeholder="Check-out Date" class="form-control" />
      <input type="number" v-model="numberOfRooms" min="1" placeholder="Number of Rooms" class="form-control" />
    </div>
    <div class="detailsButtons">
      <button class="detail-button" @click="bookNow">Book Now</button>
      <router-link to="/all" class="detail-width">
        <button class="detail-button">Explore More</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useCookies } from 'vue3-cookies'
import Swal from 'sweetalert2'

const store = useStore()
const route = useRoute()
const router = useRouter()
const hotel = computed(() => store.state.hotel)
const { cookies } = useCookies()

const checkInDate = ref('')
const checkOutDate = ref('')
const numberOfRooms = ref(1)

// Function to format date in 'dd/mm/yyyy' format
const formatDate = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-GB') // Example: "dd/mm/yyyy"
}

onMounted(() => {
  store.dispatch('fetchHotel', route.params.id)
})

const bookNow = async () => {
  const userId = cookies.get('LegitUser')?.result?.userID

  // Check if all fields are filled
  if (!checkInDate.value || !checkOutDate.value || !numberOfRooms.value) {
    Swal.fire({
      title: 'Missing Information',
      text: 'Please fill in all fields before booking.',
      icon: 'warning',
      confirmButtonText: 'OK'
    })
    return
  }

  if (!userId) {
    Swal.fire({
      title: 'Login Required',
      text: 'You need to log in to make a booking.',
      icon: 'warning',
      confirmButtonText: 'Log in'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.setItem('bookingData', JSON.stringify({
          checkInDate: formatDate(checkInDate.value),
          checkOutDate: formatDate(checkOutDate.value),
          numberOfRooms: numberOfRooms.value,
          amount: hotel.value.amount * numberOfRooms.value
        }))
        router.push('/login')
      }
    })
    return
  }

  const bookingData = {
    userID: userId,
    hotelID: hotel.value.hotelID,
    checkInDate: checkInDate.value,
    checkOutDate: checkOutDate.value,
    numberOfRooms: numberOfRooms.value,
    amount: hotel.value.amount * numberOfRooms.value
  }

  try {
    await store.dispatch('addBooking', bookingData)
    await store.dispatch('fetchUserBookings', userId);
    router.push('/bookings') // Redirect to the bookings page
  } catch (error) {
    console.error(error)
    Swal.fire({
      title: 'Booking Failed',
      text: 'There was an issue with your booking. Please try again later.',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
}
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
