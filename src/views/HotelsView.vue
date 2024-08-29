<template>
  <div class="container">
    <div class="row" id="hotelBanner">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Where do you want to stay ? </h1>
            <div class="formAlignment">

              <form class="adventure-search" role="search">
              <div class="input-wrapper">
                <input class="form-control" type="text" placeholder="Hotel name or destination" id="searchInput">
                <span class="search-icon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </form>
            <form>
                <div class="calender-form">
                <flat-pickr v-model="dateRange" :config="dateRangeConfig" placeholder="Check-in | Check-out" class="form-control"/>
                <i class="fas fa-calendar-alt calendar-icon"></i>
              </div>
            </form>
            </div>
         
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>

            </div> 
       </div>
      </div>
  </div>
</template>

<script>
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: { FlatPickr },
  data() {
    return {
      dateRange: null, // Holds the selected date range
      dateRangeConfig: {
        mode: 'range',
        dateFormat: 'Y-m-d',
        onChange: this.handleDateChange
      }
    };
  },
  methods: {
    handleDateChange(selectedDates) {
      if (selectedDates.length === 2) {
        console.log('Check-In Date:', selectedDates[0]);
        console.log('Check-Out Date:', selectedDates[1]);
      }
    }
  }
};
</script>

<style scoped>
#hotelBanner{
  position: relative;
  z-index: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/greece8.jpg");
    background-size: cover;
    background-position: center; 
    position: relative;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(30, 35, 40, 0.4); 
    z-index: 1;
}

.banner-content{
  position: relative;
  z-index: 2;
  width: 64rem;
  margin: 13rem auto 13rem;
  color: var(--secondary);
  font-family: "Raleway", sans-serif;
  /* background-color: pink; */
}

.banner-content h1 {
    font-weight: 700;
    z-index: 2;
} 

.banner-content p{
    font-weight: 500;
    font-size: 1.2rem;
}

.scroll-btn {
  width: 3rem;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  font-size: 24px;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  margin-top: 2rem;
}

.scroll-btn:hover {
  transition: 2s;
  background: rgba(255, 255, 255, 0.3); 
}

.adventure-search {
  position: relative;
  width: 20rem;
}

.input-wrapper {
  position: relative;
}

.form-control {
  width: 100%;
  padding-left: 2.5rem;
  color: var(--primary);
  font-weight: 600;
}

.form-control::placeholder{
  color: var(--primary);
  font-weight: 600;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px; /* Adjust to position the icon */
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 1rem;
}

.formAlignment{
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 2rem;
}

.calender-form{
  width: 14rem;
  position: relative;
}

.calendar-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: var(--primary); /* Adjust color to match your design */
  pointer-events: none; /* Prevent the icon from blocking input clicks */
}

@media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .scroll-btn {
    display: none;
  }

  .banner-content{
    width: 100%;
    font-size: 0.8rem;
    margin: 6rem auto 6rem;
  }
 
}

</style>