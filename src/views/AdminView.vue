<template>
    <div class="container">
        <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content">
          <h1 class="animate__animated animate__fadeInDown">Admin</h1>
          <p class="animate__animated animate__fadeInUp">Add, Update & Delete</p>
          <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="admin-hotels">
      <h1 class="admin-heading">Hotels Table</h1>
    
    <div class="adminButtons">
        <button class="admin-button" @click="sortByNameAsc">Sorting Alphabetically</button>
      
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
                      R{{ hotel.amount }}
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
        <button class="admin-button" @click="sortUserNameAsc">Sorting Alphabetically</button>
      
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

    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import UpdateHotelModal from '@/components/UpdateHotelModal.vue';
import AddHotelModel from '@/components/AddHotelModel.vue';
import AddUserModal from '@/components/AddUserModal.vue';
import Spinner from '@/components/Spinner.vue';
import UpdateUserModal from '@/components/UpdateUserModal.vue';

const store = useStore();
const hotels = computed(() => store.state.hotels);
const users = computed(() => store.state.users);

function fetchHotels() {
  store.dispatch('fetchHotels');
}

function fetchUsers() {
  store.dispatch('fetchUsers');
}

function deleteHotel(hotelID) {
  store.dispatch('deleteHotel', hotelID);
}

function deleteUser(userID) {
  store.dispatch('deleteUser', userID);
}

function sortByNameAsc() {
  hotels.value.sort((a, b) => a.hotelName.localeCompare(b.hotelName));
}

function sortUserNameAsc() {
  users.value.sort((a, b) => a.firstName.localeCompare(b.firstName));
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
}

thead tr {
    display: none;
}

tr {
    margin-bottom: 15px;
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
    white-space: nowrap;
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


}
</style>