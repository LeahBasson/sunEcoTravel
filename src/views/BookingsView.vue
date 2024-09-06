<template>
  <div class="container">
    <div class="row" id="booking-heading">
      <h1>Bookings</h1>
    </div>

    <div v-if="bookings.length">
      <table class="table">
        <thead>
          <tr>
            <th>Hotel ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Number of Rooms</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking._id">
            <td>{{ booking.hotelID }}</td>
            <td>{{ booking.checkInDate }}</td>
            <td>{{ booking.checkOutDate }}</td>
            <td>{{ booking.numberOfRooms }}</td>
            <td>{{ booking.totalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No bookings found.</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useCookies } from 'vue3-cookies'

const store = useStore()
const { cookies } = useCookies()

// Fetch only the logged-in user's bookings
const bookings = computed(() => store.state.bookings || [])

onMounted(() => {
  const userId = cookies.get('LegitUser')?.result?.userID
  if (userId) {
    // Dispatch an action to fetch bookings for the specific user
    store.dispatch('fetchUserBookings', userId)
  }
})
</script>

<style scoped>
#booking-heading h1 {
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 2rem;
}
</style>
