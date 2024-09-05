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
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import Swal from 'sweetalert2'

const store = useStore()
const route = useRoute()
const router = useRouter()

const hotel = computed(() => store.state.hotel)
const user = computed(() => store.state.user) // assuming you have a user object in Vuex store

onMounted(() => {
    store.dispatch('fetchHotel', route.params.id)
})

const handleBooking = async () => {
    if (user.value) {  // Check if user is logged in
        // User is logged in, proceed with booking
        const booking = {
            hotelID: hotel.value.hotelID,
            checkInDate: new Date().toISOString(), // Replace with actual check-in date
            checkOutDate: new Date().toISOString(), // Replace with actual check-out date
            numberOfRooms: 1,  // Replace with actual room count
            totalPrice: hotel.value.amount,
            userID: user.value._id // Include userID in the booking
        }

        try {
            await store.dispatch('addBooking', booking)
            router.push('/bookings')
        } catch (error) {
            // Show an error message if booking fails
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an issue processing your booking. Please try again.'
            })
        }
    } else {
        // User is not logged in, prompt them to log in
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
                sessionStorage.setItem('redirectAfterLogin', '/bookings')
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