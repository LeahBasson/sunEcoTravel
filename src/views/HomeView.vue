<template>
  <div>
   <section class="row" id="home">
    <CarouselBanner />
    <TopDestinationHome />
    <TopStoryHome />
    <TopThingsToDoHome />
    <recentHotels />
   </section>
 </div>  
</template>

<script>
import CarouselBanner from '@/components/CarouselBanner.vue';
import TopDestinationHome from '@/components/TopDestinationHome.vue';
import TopStoryHome from '@/components/TopStoryHome.vue';
import TopThingsToDoHome from '@/components/TopThingsToDoHome.vue';
import recentHotels from '@/components/recentHotels.vue'

export default {
  
  name: 'HomeView',
  components:{
    CarouselBanner,
    TopDestinationHome,
    TopStoryHome,
    TopThingsToDoHome,
    recentHotels
  }
  
}

</script>
