<template>
  <div class="container">
    <div class="row">
      <h1 class="account-heading animate__animated animate__fadeInDown">Account</h1>
    </div>
    
    <div class="row" v-if="user">
      <div class="account-details-container">
        <div class="img-container">
          <img :src="user.userProfile" loading="lazy" class="img-fluid img-width" :alt="user.firstName">
        </div>
        <div class="account-detail">
          <h3 class="lead"><span class="fw-bold">First Name</span>: {{ user.firstName }}</h3>
          <h3 class="lead"><span class="fw-bold">Last Name</span>: {{ user.lastName }}</h3>
          <p class="lead"><span class="fw-bold">Email Address</span>: {{ user.emailAdd }}</p>
          <p class="lead"><span class="fw-bold">Age</span>: {{ user.userAge }}</p>
          <p class="lead"><span class="fw-bold">Gender</span>: {{ user.Gender }}</p>
          <div class="accountButtons">
        <button class="account-button" data-bs-toggle="modal" :data-bs-target="'#updateAccountModal' + user.userID"><i class="bi bi-pen-fill"></i></button>
        <button class="account-button" @click="deleteUser(user.userID)"><i class="bi bi-trash-fill"></i></button>
      </div>
      <div class="buttons">
        <router-link to="/"><button class="btnHome">Go back home</button></router-link>
        <router-link to="/logout">

          <button class="btnHome" :disabled="isUserDeleted">Logout</button>
        </router-link>
      </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
       
    <UpdateAccountModal :user="user" @update="handleUpdate" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed, onMounted, watch } from 'vue'
import Spinner from '@/components/Spinner.vue'
import UpdateAccountModal from '@/components/UpdateAccountModal.vue'
import { useCookies } from 'vue3-cookies'
import Swal from 'sweetalert2'

const store = useStore()
const { cookies } = useCookies()
const isUserDeleted = ref(false) // Variable to track if the user is deleted

const user = computed(() => store.state.user || cookies.get('LegitUser') )

onMounted(() => {
if (!user.value) {
  store.dispatch('fetchCurrentUser');
  
} else {
  const userID = this?.user.userID;
  if (userID) {
    // store.dispatch('fetchUser', userID);
  }
}
});

function handleUpdate() {
//  store.dispatch('fetchCurrentUser');
}

function deleteUser(userID) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#FF9A00',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch('deleteUser', userID)
      cookies.remove('LegitUser')
      isUserDeleted.value = true // Disable logout button when user is deleted

      Swal.fire({
      title: 'Deleted!',
      text: 'Your account has been deleted.',
      icon: 'success',
      confirmButtonColor: '#FF9A00'
    })
    }
  })
}

watch(user, (newUser) => {
console.log("User data updated:", newUser);
})
</script>

<style scoped>
.account-button{
background-color: var(--alternative);
color: var(--secondary);
border: none;
border-radius: 0.3rem;
padding: 0.8rem;
margin-left: 0.2rem;
margin-right: 0.2rem;
}

.account-button:hover{
background-color: var(--awesome);
}

.account-heading{
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.accountButtons{
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
}

.btnHome{
background-color: var(--alternative);
border: none;
border-radius: 0.5rem;
width: 22rem;
margin: auto;
padding: 0.5rem;
font-family: "Poppins", sans-serif;
font-weight: 600;
color: var(--secondary);
}

.btnHome:hover{
background-color: var(--awesome);
}

.buttons{
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
margin: auto;
gap: 1rem;
margin-top: 8rem;
}

.account-details-container{
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 2rem;
}

.img-container{
  width: 30%;
} 

.img-container img{
  border-radius: 0.3rem;
  box-shadow: 0.8rem 0.5rem 1rem var(--borderColor);
}

@media (width < 999px)
{
  .account-details-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding-top: 0rem;
}

.img-container{
  width: 85%;
  padding-bottom: 3rem;
  margin: auto;
} 

.accountButtons{
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 85%;
}

.img-width{
  width: 100%;
}

.btnHome{
width: 100%;
margin: auto;
}

.buttons{
display: flex;
justify-content: center;
flex-direction: column;
width: 84%;
margin: auto;
gap: 1rem;
margin-top: 2rem;
}
}

</style>