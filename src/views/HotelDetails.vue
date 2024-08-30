<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Hotel Details</h2>
        </div>
        <div class="row justify-content-center" v-if="hotel">
            <Card class="card">
                <template #cardHeader>
                    <img :src="hotel.imgUrl" loading="lazy" class="img-fluid" :alt="hotel.hotelName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ hotel.hotelName }}</h5>
                    <p class="lead">
                        {{ hotel.hotelDescription }}
                    </p>
                    <p class="lead"><span class="fw-bold">Amount</span>: R{{ hotel.amount }}</p>
                </template>
            </Card>
        </div>
        <div v-else> 
            <Spinner/>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const hotel = computed(
    () => store.state.hotel
)
onMounted(() => {
    store.dispatch('fetchHotel', route.params.id)
}) 
</script>

<style scoped>
.card{
    width: 60%;
}
</style>