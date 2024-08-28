<template>
  <div>
   <section class="row" id="home">
    <CarouselBanner />
    <TopDestinationHome />
   </section>
 </div>  
</template>

<script>
import CarouselBanner from '@/components/CarouselBanner.vue';
import TopDestinationHome from '@/components/TopDestinationHome.vue';
export default {
  
  name: 'HomeView',
  components:{
    CarouselBanner,
    TopDestinationHome
  }
  
}

</script>
