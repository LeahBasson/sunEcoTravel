<template>
  <div>
   <section class="row" id="home">
    <CarouselBanner />
    <TopDestinationHome />
    <TopStoryHome />
    <recentHotels />
   </section>
 </div>  
</template>

<script>
import CarouselBanner from '@/components/CarouselBanner.vue';
import TopDestinationHome from '@/components/TopDestinationHome.vue';
import TopStoryHome from '@/components/TopStoryHome.vue';
import recentHotels from '@/components/recentHotels.vue'

export default {
  
  name: 'HomeView',
  components:{
    CarouselBanner,
    TopDestinationHome,
    TopStoryHome,
    recentHotels
  }
  
}

</script>
