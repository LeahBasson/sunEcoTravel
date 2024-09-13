<template>
    <div class="container">
        <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content" loading="eager">
          <h1 class="animate__animated animate__fadeInDown">Admin</h1>
          <p class="animate__animated animate__fadeInUp">Add, Update & Delete</p>
          <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="admin-hotels">
      <h1 class="admin-heading">Hotels Table</h1>
    
    <div class="adminButtons">
        <button class="admin-button" @click="toggleSorting">{{ sortText }}</button>
      
        <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addHotelModal">
          Add New Hotel
        </button>
    </div>

    <AddHotelModel />
    <div class="tableContainer">
              <table>
                <thead>
                 <th>Hotel Name</th>
                 <th>Image Url</th>
                 <th>Amount</th>
                 <th>Actions</th>
                </thead>
                <tbody v-if="hotels">
                  <tr v-for="hotel in hotels" :key="hotel.hotelID">
                    <td>
                      {{ hotel.hotelName }}
                    </td>
                    <td>
                      <img :src="hotel.imgUrl" :alt="hotel.hotelName" loading="eager" class="img-fluid adminImages">
                    </td>
                    <td>
                      R{{ hotel.amount }} p/n
                    </td>
                    <td>
                      <div class="adminButtons">
                        <button class="table-button" data-bs-toggle="modal" :data-bs-target="'#updateHotelModal' + hotel.hotelID"><i class="bi bi-pen-fill"></i></button>
                        <button class="table-button" @click="deleteHotel(hotel.hotelID)"><i class="bi bi-trash-fill"></i></button>
                      </div>
                    </td>
                  </tr>
                   
                </tbody>
                <tbody v-else>
                  <tr>
                    <Spinner />
                  </tr> 
                </tbody>
             </table>
    </div>

    </div>

    <div v-for="hotel in hotels" :key="hotel.hotelID">
      <UpdateHotelModal :hotel='hotel'>
                
      </UpdateHotelModal> 

    </div>
    

    <!----------------- Users Table --------------------->

    <div class="row" id="admin-hotels">
      <h1 class="admin-heading">Users Table</h1>
    
    <div class="adminButtons">
        <button class="admin-button" @click="toggleSortingUser">{{ sortUser }}</button>
      
        <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addUserModal">
          Add New User
        </button>
    </div>

    <AddUserModal />
    <div class="tableContainer2">
              <table>
                <thead>
                 <th>First name</th>
                 <th>Last Name</th>
                 <th>Gender</th>
                 <th>Email address</th>
                 <th>User profile</th>
                 <th>Actions</th>
                </thead>
                <tbody v-if="users">
                  <tr v-for="user in users" :key="user.userID">
                    <td>
                      {{ user.firstName }}
                    </td>
                    <td>
                      {{ user.lastName }}
                    </td>
                    <td>
                      {{ user.Gender }}
                    </td>
                    <td>
                      {{ user.emailAdd }}
                    </td>
                    <td>
                      <img :src="user.userProfile" :alt="user.firstName" loading="eager" class="img-fluid adminImages">
                    </td>
                    <td>
                      <div class="adminButtons">
                        <button class="table-button" data-bs-toggle="modal" :data-bs-target="'#updateUserModal' + user.userID"><i class="bi bi-pen-fill"></i></button>
                        <button class="table-button" @click="deleteUser(user.userID)"><i class="bi bi-trash-fill"></i></button>
                      </div>
                    </td>
                  </tr>
                   
                </tbody>
                <div v-else>
                  <Spinner />
                </div>
             </table>
    </div>

    </div>
    <div v-for="user in users" :key="user.userID">
      <UpdateUserModal :user='user'>
                
      </UpdateUserModal> 

    </div>

    <!----------------- Bookings Table --------------------->
    <div class="row" id="admin-hotels">
      <h1 class="admin-heading">Bookings Table</h1>

    <div class="tableContainer3">
              <table>
                <thead>
                 <th>Booking ID</th>
                 <th>User ID</th>
                 <th>Number of rooms</th>
                 <th>Check In Date</th>
                 <th>Check Out Date</th>
                 <th>Amount</th>
                 <th>Action</th>
                </thead>
                <tbody v-if="bookings">
                  <tr v-for="booking in bookings" :key="booking.bookingID">
                    <td>
                      {{ booking.bookingID }}
                    </td>
                    <td>
                      {{ booking.userID }}
                    </td>
                    <td>
                      {{ booking.numberOfRooms }}
                    </td>
                    <td>
                      {{ booking.checkInDate }}
                    </td>
                    <td>
                      {{ booking.checkOutDate }}
                    </td>
                    <td>
                      {{ booking.amount }}
                    </td>
                  <td>
                    <div class="adminButtons">
                      
                    </div>
                    <button class="table-button" data-bs-toggle="modal" :data-bs-target="'#updateBookingModal' + booking.bookingID"><i class="bi bi-pen-fill"></i></button>
                  </td>   
                   </tr>
                </tbody>
                <div v-else>
                  <Spinner />
                </div>
             </table>
    </div>

    </div>
<div v-for="booking in bookings" :key="booking.bookingID">
      <UpdateBookingModal :booking='booking'>
                
      </UpdateBookingModal> 

    </div>
    

    <!----------------- Stories Table --------------------->
    <div class="row" id="admin-hotels">
      <h1 class="admin-heading">Stories Table</h1>

    <div class="tableContainer3">
              <table>
                <thead>
                 <th>Story ID</th>
                 <th>Title</th>
                 <th>Type of Review</th>
                 <th>Date</th>
                 <th>Action</th>
                </thead>
                <tbody v-if="stories">
                  <tr v-for="story in stories" :key="story.storyID">
                    <td>
                      {{ story.storyID }}
                    </td>
                    <td>
                      {{ story.title }}
                    </td>
                    <td>
                      {{ story.typeOfStory }}
                    </td>
                    <td>
                      {{ story.dateOfStory }}
                    </td>
                  <td>
                    <button class="table-button" @click="deleteStory(story.storyID)"><i class="bi bi-trash-fill"></i></button>
                  </td>   
                   </tr>
                </tbody>
                <div v-else>
                  <Spinner />
                </div>
             </table>
    </div>

    </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import UpdateHotelModal from '@/components/UpdateHotelModal.vue';
import AddHotelModel from '@/components/AddHotelModel.vue';
import AddUserModal from '@/components/AddUserModal.vue';
import Spinner from '@/components/Spinner.vue';
import UpdateUserModal from '@/components/UpdateUserModal.vue';
import UpdateBookingModal from '@/components/UpdateBookingModal.vue';

const store = useStore();

const hotels = computed(() => store.state.hotels);
const users = computed(() => store.state.users);
const bookings = computed(() => store.state.bookings);
const stories = computed(() => store.state.stories);

const sortText = ref('Sort Alphabetically'); // Initial button text
let sortState = ref(0);
const sortUser = ref('Sort Alphabetically');

// Sort hotels by name
function toggleSorting() {
  if (!hotels.value || hotels.value.length === 0) {
    alert('No hotels to sort.');
    return;
  }

  if (sortState.value === 0) {
    // Sort by name in ascending order (A to Z)
    hotels.value.sort((a, b) => a.hotelName.localeCompare(b.hotelName));
    sortText.value = 'NAME: A TO Z';
    sortState.value = 1;
  } else if (sortState.value === 1) {
    // Sort by name in descending order (Z to A)
    hotels.value.sort((a, b) => b.hotelName.localeCompare(a.hotelName));
    sortText.value = 'NAME: Z TO A';
    sortState.value = 2;
  } else {
    // Reset to default sorting (Sort Alphabetically)
    fetchHotels(); // Re-fetch original data or reset the order
    sortText.value = 'Sort Alphabetically';
    sortState.value = 0;
  }
}

// Sort users by name
function toggleSortingUser() {
  if (!users.value || users.value.length === 0) {
    alert('No users to sort.');
    return;
  }

  if (sortState.value === 0) {
    // Sort by name in ascending order (A to Z)
    users.value.sort((a, b) => a.firstName.localeCompare(b.firstName));
    sortUser.value = 'NAME: A TO Z';
    sortState.value = 1;
  } else if (sortState.value === 1) {
    // Sort by name in descending order (Z to A)
    users.value.sort((a, b) => b.firstName.localeCompare(a.firstName));
    sortUser.value = 'NAME: Z TO A';
    sortState.value = 2;
  } else {
    // Reset to default sorting (Sort Alphabetically)
    fetchUsers(); // Re-fetch original data or reset the order
    sortUser.value = 'Sort Alphabetically';
    sortState.value = 0;
  }
}

function fetchHotels() {
  store.dispatch('fetchHotels');
}

function fetchStories() {
  store.dispatch('fetchStories');
}

function fetchUsers() {
  store.dispatch('fetchUsers');
}

function fetchBookings() {
  store.dispatch('fetchBookings');
}

function deleteHotel(hotelID) {
  store.dispatch('deleteHotel', hotelID);
}

function deleteStory(storyID) {
  store.dispatch('deleteStory', storyID);
}

function deleteUser(userID) {
  store.dispatch('deleteUser', userID);
}

function scrollDown() {
  window.scrollTo({
    top: document.getElementById('admin-hotels').offsetTop,
    behavior: 'smooth',
  });
}

onMounted(() => {
  fetchHotels();
  fetchUsers();
  fetchBookings();
  fetchStories();
});
</script>

<style scoped>
#AdventureRoulette{
  position: relative;
  z-index: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/adminBanner.jpg");
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
  margin: 15rem auto 15rem;
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

.admin-heading{
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 4rem;
}

.adminButtons{
    width: 92%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.admin-button{
  background-color: var(--alternative);
  border: none;
  border-radius: 0.5rem;
  width: 16rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: var(--secondary);
}

.admin-button:hover{
  background-color: var(--awesome);
}

/* Table Styling*/
th, td{
    border: 1px solid black;
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

.adminImages{
    width: 20%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
}

#addHotelForm #name_error,#category_error{
    display: none;
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

  .admin-button{
  width: 85%;
  margin: auto;
}

.table-button{
  width: 100%;
}

.adminButtons{
  display: flex;
  justify-content: center;
  flex-direction: column; 
  gap: 1rem;
  width: 100%;
  margin-top: 0rem;
}

.adminImages{
    width: 6rem;
}

table{
  width: 85%;
  margin: auto;
  margin-top: 2rem;
}

th, td{
    border: 1px solid black;
    padding: 0.6rem 0.8rem;
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
}

thead tr {
    display: none;
}

tr {
    margin-bottom: 15px;
}

th{
  font-weight: 700;
}

td {
    position: relative;
    padding-left: 50%;
    word-wrap: break-word;
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

.mobile-email{
  word-wrap: break-word;
}

.word-wrap{
  word-wrap: break-word;
}
/* Products Table Mobile*/
.tableContainer td:nth-of-type(1):before { content: "Hotel Name"; }
.tableContainer td:nth-of-type(2):before { content: "Image"; }
.tableContainer td:nth-of-type(3):before { content: "Amount"; }
.tableContainer td:nth-of-type(4):before { content: "Actions"; }
.tableContainer .total-row td:before { content: ""; }
.tableContainer .total-row td:before { content: ""; }

/* Users Table Mobile */
.tableContainer2 td:nth-of-type(1):before { content: "First name"; }
.tableContainer2 td:nth-of-type(2):before { content: "Last name"; }
.tableContainer2 td:nth-of-type(3):before { content: "Gender"; }
.tableContainer2 td:nth-of-type(4):before { content: "Email address"; }
.tableContainer2 td:nth-of-type(5):before { content: "User profile"; }
.tableContainer2 td:nth-of-type(6):before { content: "Actions"; }
.tableContainer2 .total-row td:before { content: ""; }
.tableContainer2 .total-row td:before { content: ""; }

/* Bookings Table Mobile */
.tableContainer3 td:nth-of-type(1):before { content: "Booking ID"; }
.tableContainer3 td:nth-of-type(2):before { content: "User ID"; }
.tableContainer3 td:nth-of-type(3):before { content: "Number of rooms"; }
.tableContainer3 td:nth-of-type(4):before { content: "Check in date"; }
.tableContainer3 td:nth-of-type(5):before { content: "Check out date"; }
.tableContainer3 td:nth-of-type(6):before { content: "Amount"; }
.tableContainer3 td:nth-of-type(7):before { content: "Action"; }
.tableContainer3 .total-row td:before { content: ""; }
.tableContainer3 .total-row td:before { content: ""; }


}
</style>