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
import router from '@/router';

const store = useStore()
const { cookies } = useCookies()

const bookings = computed(() => store.state.bookings || [])

onMounted(() => {
  const userId = cookies.get('LegitUser')?.result?.userID;
  if (userId) {
    store.dispatch('fetchBookings', userId)
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  } else {
    // Redirect to login if the user is not logged in
    router.push({ name: 'login' });
  }
});

</script>

<style scoped>
#booking-heading h1 {
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 2rem;
}
</style>
