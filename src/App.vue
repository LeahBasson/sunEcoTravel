<template>

    <NavBar />
    <main class="container-fluid">
      <div class="row">
        <router-view /> 
      </div>
    </main>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  } 
}

</script>

<style src="./assets/css/style.css">

</style>