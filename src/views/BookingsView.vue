<template>
  <div class="container">
    <div class="row animate__animated animate__fadeInDown" id="booking-heading">
      <h1>Bookings</h1>
    </div>

    <div v-if="bookings.length" class="table">
      <table>
        <thead>
          <tr>
            <th>Hotel ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Number of Rooms</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking.bookingID">
            <td>{{ booking.hotelID }}</td>
            <td>{{ booking.checkInDate }}</td>
            <td>{{ booking.checkOutDate }}</td>
            <td>{{ booking.numberOfRooms }}</td>
            <td>R{{ booking.amount }}</td>
            <td>
              <div class="adminButtons">
                <button class="table-button" @click="deleteBooking(booking)"><i class="bi bi-trash-fill"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="wrapper">
        <div class="total-display">
          <p>
            Total Price: R{{ totalPrice }}
          </p>
        </div>
      </div>
      <div class="row">
      <div class="button-wrapper">
        <router-link to="/confirmation">
          <button class="confirm-button">Confirm</button>
        </router-link>
        <div>
          <button class="delete-all-button"  @click="deleteAllBookings">Cancel</button>
        </div>
      </div>
    </div>
    </div>

    <div v-else>
      <p class="text-book">No bookings yet</p>
      <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/travelIcon.png" class="img-fluid" alt="bookingImage" loading="eager">
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

// Calculate the total price for all bookings
const totalPrice = computed(() => {
  let total = 0;
  bookings.value.forEach(booking => {
    total += booking.amount;
  });
  return total;
});

function deleteAllBookings() {
  const userId = cookies.get('LegitUser')?.result?.userID;
  if (userId) {
    store.dispatch('deleteBookings', { userID: userId });
  }
}

function deleteBooking(booking) {
  store.dispatch('deleteBooking', {
    userID: cookies.get('LegitUser')?.result?.userID,
    bookingID: booking.bookingID
  });
}

onMounted(() => {
  const userId = cookies.get('LegitUser')?.result?.userID
  if (userId) {
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

.text-book{
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 8rem;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Table Styling*/
th, td{
    padding: 0.6rem 2rem;
    margin: 0;
}

table{
  width: 90.5%;
  margin: auto;
  margin-top: 2rem;
  color: var(--primary);
  font-family: "Poppins",sans-serif;
}

img[alt="bookingImage"]{
  width: 14rem;
}

.table-button{
  background-color: var(--alternative);
  color: var(--secondary);
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}

.table-button:hover{
  background-color: var(--awesome);
}

.wrapper{
  width: 90%;
  margin: auto;
}

.button-wrapper{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}

.delete-all-button{
  background-color: var(--alternative);
    color: var(--secondary);
    width: 10rem;
    padding: 0.6rem 0.8rem;
    border: none;
    border-radius: 0.3rem;
    font-weight: 600;
    font-family: "Poppins",sans-serif;
}

.delete-all-button:hover{
  background-color: var(--awesome);
}

.confirm-button{
  background-color: var(--alternative);
    color: var(--secondary);
    width: 10rem;
    padding: 0.6rem 0.8rem;
    border: none;
    border-radius: 0.3rem;
    font-weight: 600;
    font-family: "Poppins",sans-serif;
}

.confirm-button:hover{
  background-color: var(--awesome);
}

.total-display p{
  text-align: left;
  font-family: "Poppins",sans-serif;
  color: var(--primary);
  font-size: 1.2rem;
}

@media (width < 999px)
{
  .text-book{
    padding-top: 3rem;
  }

.total-display p{
  text-align: center;
}

.button-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: auto;
  gap: 1rem;
}

th, td{
    border: 1px solid black;
    padding: 0.8rem 0.8rem;
    margin: 0;
}

thead{
  display: none;
}

table, tbody, th, td, tr {
    display: block;
}

table {
    margin-bottom: 1.5rem;
    font-family: "Poppins",sans-serif;
    width: 89%;
    border-bottom: none;
}

thead tr {
    display: none;
}

tr {
    margin-bottom: 15px;
}

th{
  word-wrap: break-word;
}

td {
    position: relative;
    padding-left: 50%;
}

td:before {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 45%;
    padding-right: 10px;
    white-space: wrap;
    transform: translateY(-50%);
}

.table-button{
  width: 100%;
}

.confirm-button{
  margin: auto;
  width: 100%;
}

.delete-all-button{
  margin: auto;
  width: 100%;
}

  /* Bookings Table Mobile */
.table td:nth-of-type(1):before { content: "Hotel ID"; }
.table td:nth-of-type(2):before { content: "Check in date"; }
.table td:nth-of-type(3):before { content: "Check out date"; }
.table td:nth-of-type(4):before { content: "Number of rooms"; }
.table td:nth-of-type(5):before { content: "Amount"; }
.table td:nth-of-type(6):before { content: "Action"; }
.table .total-row td:before { content: ""; }
.table .total-row td:before { content: ""; }
}
</style>