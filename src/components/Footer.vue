<template>
    <div class="container-fluid" id="Footer">
        <div class="row">

            <div class="footerContent">
                <div class="leftContent">
                    <h3>Sign Up for Newsletter</h3>
                    <form id="contactForm" action="https://formspree.io/f/mjvqdzra" method="POST"  @submit.prevent="validateForm($event)" target="_blank">

                    <div class="form-group">
                        <!-- Email address input-->
                        <input class="form-control" id="email-footer" type="email" name="Email" placeholder="Enter your email address*" v-model="footerEmail"/>
                        <label id="email_error_footer" class="contact-label"></label>
                    </div>
                    <div class="text-center"><button class="button1" id="submitButton" type="submit">Send</button></div>
                    </form>
                    <div class="socialLinks">
                        <h3>Social Links: </h3>
                        <div class="footer-icons">
                            <a class="text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
                            <a class="text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
                            <a class="text-white" href="https://github.com/LeahBasson/sunEcoTravel.git" target="_blank"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="rightContent">
                    <div class="discoverLinks">
                        <h3>Discover</h3>
                        <router-link class="textDecor text-white" to="/hotels"><p>Hotels</p></router-link>
                        <router-link class="textDecor text-white" to="/gallery"><p>Gallery</p></router-link>
                        <router-link class="textDecor text-white" to="/about"><p>About Us</p></router-link>
                        <router-link class="textDecor text-white" to="/contact"><p>Contact Us</p></router-link>
                    </div>
                   <div class="exploreLinks">
                    <h3>Explore</h3>
                    <router-link class="textDecor text-white" to="/topDestination"><p>Top Destinations</p></router-link>
                    <router-link class="textDecor text-white" to="/topstory"><p>Top Stories</p></router-link>
                   </div>  
                </div>
            </div>

            <p class="fs-4 text-white mt-2 copyright">Sun Eco Travel &copy; {{ cYear }}</p>
        </div>
       
    </div>
</template>

<script>
export default {
      name: "FooterComp",
      data(){
          return{
            cYear: new Date().getUTCFullYear(),
            footerEmail:''
          }
        },

        methods: {
     validateForm(e){
      let footerEmail = document.querySelector('#email-footer').value;
      if(footerEmail === ""){
        document.getElementById("email_error_footer").innerHTML = "Please enter your email address";
        return false; // Prevent form submission
      }
      else{
     // Clear the error message
        document.getElementById("email_error_footer").innerHTML = "";
        e.target.submit()
      }
    }
  }
}
</script>

<style scoped>
#Footer{
    margin-top: 10rem;
    background-color: var(--alternative);
}

.footerContent{
    display: flex;
    justify-content: space-evenly;
    padding-top: 2rem;
}

.footerContent .leftContent{
    width: 40rem;
    /* background-color: pink; */
    text-align: left;
}

.footerContent .leftContent h3{
    font-family: "Raleway", sans-serif;
    color: var(--secondary);
}

.footerContent .rightContent{
    width: 40rem;
    /* background-color: aquamarine; */
    display: flex;
    justify-content: space-between;
    color: var(--secondary);
}

.footerContent .rightContent h3{
    font-family: "Raleway", sans-serif;
}

.footerContent .rightContent p{
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
}

.footerContent .rightContent p:hover{
    color: var(--primary);
    cursor: pointer;
}

.discoverLinks{
    text-align: left;
}

.exploreLinks{
    text-align: left;
}

.copyright{
    font-family: "Poppins", sans-serif
}

.footerContent .form-control{
    width: 20rem;
    padding: 0.5rem 0.3rem;
}

.footerContent .form-control::placeholder{
    color: var(--primary);
    font-family: "Poppins",sans-serif;
}

#contactForm{
    display: flex;
    justify-content: start;
    padding-top: 1rem;
    gap: 1rem;
}

.button1{
    background-color: var(--alternative);
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 0.3rem;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    border: 1px solid var(--secondary);
}

.button1:hover{
  background-color: var(--awesome);
}

.socialLinks{
    display: flex;
    justify-content: start;
    gap: 1rem;
    padding-top: 1rem;
}

.footer-icons{
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.footer-icons i:hover{
   color: var(--primary);
}

.textDecor{
    text-decoration: none;
}

.contact-label{
    font-family: "Poppins", sans-serif;
    color: var(--primary);
}

@media (width < 999px)
{
#Footer{
    margin-top: 5rem;
}

.footerContent{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 2rem;
    width: 100%;
}

.footerContent .rightContent{
    width: 100%;
    /* background-color: aquamarine; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: var(--secondary);
}

.footerContent .leftContent{
    width: 100%;
    /* background-color: pink; */
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.footerContent .form-control{
    padding: 0.5rem 0.3rem;
    font-size: 0.9rem;
    width: 100%;
}

#contactForm{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 1rem;
    gap: 0.1rem;
    margin: auto;
    width: 85%;
}

.button1{
    font-size: 0.9rem;
    width: 100%;
}

.contact-label{
    text-align: left;
   font-size: 0.9rem;
   width: 100%;
}

.socialLinks{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
}

.footerContent .rightContent h3{
    text-align: center;
}

.footerContent .rightContent p{
    text-align: center;
}

.discoverLinks{
    padding-top: 2rem;
}

.exploreLinks{
    padding-top: 2rem;
    padding-bottom: 2rem;
}

}

</style>

