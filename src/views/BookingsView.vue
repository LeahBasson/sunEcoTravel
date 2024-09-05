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
          <tr v-for="booking in bookings" :key="booking.bookingID">
            <td>{{ booking.hotelID }}</td>
            <td>{{ formatDate(booking.checkInDate) }}</td>
            <td>{{ formatDate(booking.checkOutDate) }}</td>
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
// Import a date formatting library if needed
// import { format } from 'date-fns'

const store = useStore()
const { cookies } = useCookies()

const bookings = computed(() => store.state.bookings || [])

onMounted(() => {
  const userId = cookies.get('LegitUser')?.result?.userID
  if (userId) {
    store.dispatch('fetchBookings', userId)
      .catch(error => {
        // Handle errors here
        console.error('Error fetching bookings:', error)
        // Optionally show a notification or alert
      })
  }
})

// Function to format dates, if needed
const formatDate = (date) => {
  // Use a date formatting library or custom formatting here
  // return format(new Date(date), 'MM/dd/yyyy')
  return new Date(date).toLocaleDateString() // Example formatting
}
</script>

<style scoped>
#booking-heading h1 {
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 2rem;
}
</style>
