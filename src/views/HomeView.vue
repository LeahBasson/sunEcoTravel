<template>
  <div>
   <section class="row" id="home">
    <CarouselBanner />
    <TopDestinationHome />
    <TopStoryHome />
   </section>
 </div>  
</template>

<script>
import CarouselBanner from '@/components/CarouselBanner.vue';
import TopDestinationHome from '@/components/TopDestinationHome.vue';
import TopStoryHome from '@/components/TopStoryHome.vue';
export default {
  
  name: 'HomeView',
  components:{
    CarouselBanner,
    TopDestinationHome,
    TopStoryHome
  }
  
}

</script>
