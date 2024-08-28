<template>

    <NavBar />
    <main class="container-fluid">
      <div class="row">
        <router-view /> 
      </div>
    </main>
    <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  } 
}

</script>

<style src="./assets/css/style.css">

</style>