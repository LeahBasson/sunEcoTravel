<template>
  <div>
   <section class="row" id="home">
    <CarouselBanner />
   </section>
 </div>  
</template>

<script>
import CarouselBanner from '@/components/CarouselBanner.vue';
export default {
  
  name: 'HomeView',
  components:{
    CarouselBanner
  }
  
}

</script>
