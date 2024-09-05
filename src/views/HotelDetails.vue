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
                    <p class="lead description">
                        {{ hotel.hotelDescription }}
                    </p>
                    <p class="lead"><span class="fw-bold">Amenities</span>: {{ hotel.amenities }}</p>
                    <p class="lead"><span class="fw-bold">Address</span>: {{ hotel.hotelAdd }}</p>
                    <p class="lead"><span class="fw-bold">Country</span>: {{ hotel.country }}</p>
                    <p class="lead"><span class="fw-bold">City</span>: {{ hotel.city }}</p>
                    <p class="lead"><span class="fw-bold">Amount</span>: R {{ hotel.amount }}</p>

                    <!-- Booking Inputs -->
                    <div class="row">
                        <input type="date" v-model="checkInDate" placeholder="Check-in Date" class="form-control" />
                        <input type="date" v-model="checkOutDate" placeholder="Check-out Date" class="form-control" />
                        <input type="number" v-model="numberOfRooms" min="1" placeholder="Number of Rooms" class="form-control" />
                    </div>
                </template>
            </Card>
        </div>
        <div v-else> 
            <Spinner/>
        </div>
        <div class="detailsButtons">
            <button class="detail-button" @click="handleBooking">Book Now</button>
            <router-link to="/hotels" class="detail-width"><button class="detail-button">Explore More</button></router-link>
        </div>  
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import Swal from 'sweetalert2'

const store = useStore()
const route = useRoute()
const router = useRouter()

// Reactive variables for booking inputs
const checkInDate = ref('')
const checkOutDate = ref('')
const numberOfRooms = ref(1)

const hotel = computed(() => store.state.hotel)

// Computed property for user
const user = computed(() => {
  console.log('Current user:', store.state.user)
  return store.state.user
})

onMounted(() => {
    store.dispatch('fetchHotel', route.params.id)
})

const handleBooking = async () => {
    if (user.value) {  // Check if user is logged in
        if (!checkInDate.value || !checkOutDate.value || !numberOfRooms.value) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please fill in the check-in, check-out dates, and number of rooms.'
            })
            return
        }

        const booking = {
            hotelID: hotel.value.hotelID,
            checkInDate: checkInDate.value,
            checkOutDate: checkOutDate.value,
            numberOfRooms: numberOfRooms.value,
            totalPrice: hotel.value.amount * numberOfRooms.value, 
            userID: user.value.userID 
        }

        try {
            await store.dispatch('addBooking', booking)
            router.push('/bookings')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an issue processing your booking. Please try again.'
            })
        }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Login Required',
            text: 'Please log in to book a hotel.',
            confirmButtonText: 'Login',
            showCancelButton: true,
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Store the intended route and redirect to login
                sessionStorage.setItem('redirectAfterLogin', route.fullPath)
                router.push('/login')
            }
        })
    }
}

</script>


<style scoped>
.card{
    width: 50%;
    display: flex;
    justify-content: space-between;
    color: var(--primary);
    font-family: "Poppins",sans-serif;
}

.img-width{
    width: 100%;
    border-radius: 0.3rem;
}

.details-heading{
    font-family: "Poppins",sans-serif;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.detailsButtons{
    display: flex;
    justify-content: space-around;
    width: 77%;
    margin: auto;
}

.detail-button{
    width: 10rem;
    background-color: var(--alternative);
    color: var(--secondary);
    font-family: "Poppins",sans-serif;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 0.3rem;
}

.detail-button:hover{
    background-color: var(--awesome);
}

@media (width < 999px)
{
.card{
width: 100%;
}

.detailsButtons{
display: flex;
justify-content: center;
flex-direction: column;
gap: 1rem;
align-items: center;
width: 100%;
}

.detail-button{
    width: 90%;
}

.description{
font-size: 1rem;
}

.img-width{
    width: 92%;
}
.detail-width{
    width: 100%; 
}
}

</style>
