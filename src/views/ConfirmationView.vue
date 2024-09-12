<template>
<div class="container" id="confirmation-page">
    <div class="row">
        <div class="confirmation">
            <div class="content">
            <h1 class="animate__animated animate__heartBeat animate__infinite">Thank You for Booking with Us!</h1>
        </div>

        <div class="content-two">
            <p>Dear {{ firstName }},</p>
            <p>We are delighted to confirm your reservation with Sun Eco Travel. Thank you for choosing us. We are committed to providing you with an exceptional experience and look forward to welcoming you.</p> 
            <p><span class="fw-bold">Need Assistance?</span> If you have any questions or need further assistance, please do not hesitate to contact us at +27 82 245 7439. Our team is here to ensure your stay is memorable.</p> 
            <p>We look forward to making your stay with us unforgettable.</p>
        </div> 

        </div>  
        <div class="continue">
            <router-link to="/">
                <button class="continue-button">Continue Exploring</button>
            </router-link>    
        </div>
    </div>
</div>
</template>

<script>
export default {
  computed: {
    firstName() {
      return this.$store.state.user.firstName;
    }
  },

  created() {
    // Fetch the user data if it's not already available
    if (!this.$store.state.user.firstName) {
      this.$store.dispatch('fetchCurrentUser');
    }
  }
}
</script>

<style scoped>
#confirmation-page h1{
    font-family: "Poppins",sans-serif;
    padding-top: 3rem;
    font-size: 3rem;
    color: #FF9A00;
    text-shadow: 0 1px 0 #ec8f03d1, 0 2px 0 #ec8f03d1, 0 3px 0 #ec8f03d1, 0 4px 0 #ec8f03d1,
    0 5px 0 #ec8f03d1, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

.content{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirmation{
    display: flex;
    margin: auto;
    justify-content: space-between;
    width: 90%;
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.content-two{
    width: 45%;
    font-family: "Poppins",sans-serif;
    padding-top: 3rem;
    color: var(--primary);
    font-size: 1.1rem;
}

.continue-button{
  background-color: var(--alternative);
    color: var(--secondary);
    width: 12rem;
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 0.3rem;
    font-weight: 600;
    font-family: "Poppins",sans-serif;
    margin-top: 1rem;
}

.continue-button:hover{
  background-color: var(--awesome);
}

@media (width < 999px)
{
    .confirmation{
    display: flex;
    margin: auto;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.content{
    display: none;
}

.content-two{
    width: 100%;
    font-family: "Poppins",sans-serif;
    padding-top: 3rem;
    color: var(--primary);
    font-size: 1.1rem;
}
}
</style>