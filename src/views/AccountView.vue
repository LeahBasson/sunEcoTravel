<template>
    <div class="container">
      <div class="row">
        <h1 class="account-heading">Account</h1>
      </div>
      <div class="row justify-content-center" v-if="user">
        <Card class="card">
          <template #cardHeader>
            <img :src="user.userProfile" loading="lazy" class="img-fluid img-width" :alt="user.firstName">
          </template>
          <template #cardBody>
            <h3 class="card-title fw-bold">{{ user.firstName }}</h3>
            <h3 class="card-title fw-bold">{{ user.lastName }}</h3>
            <p class="lead"><span class="fw-bold">Email Address</span>: {{ user.emailAdd }}</p>
            <p class="lead"><span class="fw-bold">Age</span>: {{ user.userAge }}</p>
            <p class="lead"><span class="fw-bold">Gender</span>: {{ user.Gender }}</p>
          </template>
        </Card> 
      </div>
      <div v-else>
        <Spinner />
      </div>
      <div class="accountButtons">
          <button class="account-button" data-bs-toggle="modal" :data-bs-target="'#updateAccountModal' + user.userID"><i class="bi bi-pen-fill"></i></button>
          <button class="account-button" @click="deleteUser(user.userID)"><i class="bi bi-trash-fill"></i></button>
        </div>
        <div class="buttons">
          <router-link to="/"><button class="btnHome">Go back home</button></router-link>
        <button class="btnHome" @click="logout">Logout</button>
        </div>
        
      <!-- Ensure the modal is only rendered when user data is available -->
      <UpdateAccountModal :user="user" @update="handleUpdate" />
    </div>
  </template>
  
  <script setup>
import { useStore } from 'vuex'
import { computed, onMounted, watch } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import UpdateAccountModal from '@/components/UpdateAccountModal.vue'
import { useRoute, useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies'

const store = useStore()
const router = useRouter()
const route = useRoute()
const { cookies } = useCookies()

const user = computed(() => store.state.user)

onMounted(() => {
  if (!user.value) {
    store.dispatch('fetchCurrentUser');
  } else {
    const userID = route.params.id;
    if (userID) {
      store.dispatch('fetchUser', userID);
    }
  }
});

function handleUpdate() {
  store.dispatch('fetchCurrentUser');
}

function deleteUser(userID) {
  store.dispatch('deleteUser', userID);
}

function logout() {
  // Remove the cookie
  cookies.remove('LegitUser');  // Make sure to use the correct cookie name\
  store.state.bookings = []
  // Redirect to the home page
  router.push('/');
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

.card{
    font-family: "Poppins", sans-serif;
    color: var(--primary);
    width: 25%;
}

.accountButtons{
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 24%;
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
  width: 24%;
  margin: auto;
  gap: 1rem;
  margin-top: 2rem;
}

@media (width < 999px)
{
.card{
    width: 85%;
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