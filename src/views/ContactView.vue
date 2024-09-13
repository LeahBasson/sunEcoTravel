<template>
  <div class="container">
    <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content" loading="eager">
          <h1 class="animate__animated animate__fadeInDown">Contact Us</h1>
          <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row" id="contact">
      <div class="leftContent">
        <form id="contactForm" method="POST" action="https://formspree.io/f/mjvqdzra" name="myForm" @submit.prevent="validateForm" target="_blank">
          <div class="row">
            <div class="col formDiv">
              <div class="form-group">
                <label class="labelText">Enter your name:</label>
                <input class="form-control" id="name" type="text" name="Name" placeholder="Name" v-model="name" />
                <label class="contact-label" v-if="errors.name">{{ errors.name }}</label>
              </div>
              <div class="form-group">
                <label class="labelText">Enter your email address:</label>
                <input class="form-control" id="email" type="email" name="Email" placeholder="Email address" v-model="email" />
                <label class="contact-label" v-if="errors.email">{{ errors.email }}</label>
              </div>
              <div class="form-group mb-md-0">
                <label class="labelText">Enter your phone number:</label>
                <input class="form-control" id="phone" type="tel" name="cell" placeholder="Phone number" v-model="cellNumber" />
                <label class="contact-label" v-if="errors.cellNumber">{{ errors.cellNumber }}</label>
              </div>
              <div class="form-group form-group-textarea mb-md-0">
                <label class="labelText">Enter your inquiry:</label>
                <textarea class="form-control mb-2" id="message" name="Message" placeholder="Inquiry" v-model="message"></textarea>
                <label class="contact-label" v-if="errors.message">{{ errors.message }}</label>
              </div>
            </div>
          </div>
          <div class="mb-2 contact-button">
            <button class="btnContactSubmit" id="submitButton" type="submit">SUBMIT</button>
            <button class="btnContactSubmit" id="clearButton" type="reset">CLEAR</button>
          </div>
        </form>
      </div>
      <div class="rightContent" data-aos="fade-up"  data-aos-duration="3000">
        <h1>Get in Touch</h1>
        <p>We’d love to hear from you! Whether you have questions about your booking, need assistance with your travel plans, or want to learn more about our eco-friendly initiatives, our team is here to help.</p>
        <p class="fw-bold">Reservations Team</p>
          <p>Phone: +632 8657 1919</p>
          <p>Mobile: +63 917 521 4260 | +63 917 517 6638</p>
        <p class="fw-bold">Office Hours</p>
          <p>Mondays to Saturdays | 9:00 AM - 6:00 PM</p>
        <p>For any inquiries or further information, please fill out the form, and our team will get back to you as soon as possible.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  name: "ContactView",
  data() {
    return {
      name: '',
      email: '',
      cellNumber: '',
      message: '',
      errors: {
        name: '',
        email: '',
        cellNumber: '',
        message: ''
      }
    };
  },
  methods: {
    validateForm(e) {
      this.errors = {
        name: this.name ? '' : 'Please enter your name',
        email: this.email ? '' : 'Please enter your email',
        cellNumber: this.cellNumber ? '' : 'Please enter your phone number',
        message: this.message ? '' : 'Please enter your inquiry'
      };

      if (this.errors.name || this.errors.email || this.errors.cellNumber || this.errors.message) {
        // Prevent form submission if there are validation errors
        return;
      }

      // Clear the error messages and submit the form
      e.target.submit();
    },
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
      AOS.init();
    }
}
</script>

  <style scoped>
  #AdventureRoulette{
    position: relative;
    z-index: 1;
  }
  
  .banner-image{
      background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/maldivesBanner.jpg");
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
    width: 44rem;
    margin: 16rem auto 16rem;
    color: var(--secondary);
    font-family: "Raleway", sans-serif;
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
  
  #gallery-heading{
    font-family: "Poppins",sans-serif;
    color: var(--primary);
  }

  #contact{
    width: 90%;
    margin: auto;
    display: flex;
    font-family: "Poppins",sans-serif;
    color: var(--primary);
    justify-content: space-between;
    padding-top: 4rem;
  }

  .leftContent{
    width: 40rem;
    text-align: left;
  }

  .rightContent{
    width: 35rem;
    text-align: left;
  }

  .rightContent p{
   font-size: 1.1rem;
  }

  .contact-button{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .btnContactSubmit{
    background-color: var(--alternative);
  border: none;
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: var(--secondary);
  }

  .btnContactSubmit:hover{
    background-color: var(--awesome);
  }

  .form-group{
    padding-bottom: 2rem;
  }

  .contact-label{
    color: red;
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

  #contact{
    width: 90%;
    margin: auto;
    display: flex;
    font-family: "Poppins",sans-serif;
    color: var(--primary);
    justify-content: space-between;
    padding-top: 4rem;
  }

  .leftContent{
    width: 100%;
    text-align: left;
  }

  .rightContent{
    width: 100%;
    text-align: center;
    margin: auto;
    padding-top: 3rem;
  }

  .contact-button{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
  }

  .btnContactSubmit{
    width: 100%;
    margin: auto;
  }
}
 
  </style>
  