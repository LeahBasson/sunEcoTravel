<template>
    <div class="container">
        <div class="row">
            <h1 class="register-heading">Register</h1>
        </div>
        <div class="row sign-in-alignment">
            <form class="form" @submit.prevent="register">
                <div class="form-control-wrapper">
                    <span>
                        <label class="form-label">Enter your firstname: </label>
                        <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <label class="form-label">Enter your lastname: </label>
                        <input class="form-control" type="text" placeholder="Last name" v-model="payload.lastName"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <label class="form-label">Enter your age: </label>
                        <input class="form-control" type="text" placeholder="Age" v-model="payload.userAge" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <label class="form-label">Enter your gender: </label>
                        <input class="form-control" type="text" placeholder="Gender" v-model="payload.Gender" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <label class="form-label">Enter your email address: </label>
                        <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <label class="form-label">Enter your password: </label>
                        <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <label class="form-label">Enter your profile img url: </label>
                        <input class="form-control" type="text" placeholder="User Profile" v-model="payload.userProfile"
                            required />
                    </span>
                </div>
                <div class="form-button-wrapper">
                    <button type="submit" class="btnSignIn" @click="addUser">Submit</button>
                    <button type="reset" class="btnSignIn">Reset</button>
                </div>
            </form>
            <div class="sign-in-content">
                <h2>Sign up</h2>
                <p>Book your next stay with us. Sign in to access your personalized hotel recommendations, exclusive deals, and more.</p>
                <h5 class="sub-heading">Why Book with Sun Eco Travel?</h5>
                <ul class="textAlignment">
                <li>Eco-Friendly Hotels: Stay at hotels committed to sustainability and reducing their environmental impact.</li>
                <li>Personalized Recommendations: Get hotel suggestions tailored to your preferences and travel needs.</li>
                <li>Exclusive Deals: Access special offers and discounts available only to our members</li>
                <li>24/7 Support: We’re here to help you anytime, anywhere.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const payload = reactive({
    firstName: '',
    lastName: '',
    userAge: '',
    Gender: '',
    emailAdd: '',
    userPass: '',
    userProfile: ''
})
function addUser() {
    store.dispatch('addUser', payload)
}
</script>

<style scoped>
.register-heading{
    color: var(--primary);
    font-family: "Poppins",sans-serif;
    padding-top: 2rem;
}

.form{
    width: 40rem;
    text-align: left;
    color: var(--primary);
    font-family: "Poppins",sans-serif;
}

.sign-in-alignment{
    display: flex;
    justify-content: space-evenly;
    padding-top: 2rem;
}

.sign-in-content{
    width: 40rem;
    font-family: "Poppins",sans-serif;
}

.form-control-wrapper{
    padding-bottom: 1.5rem;
}

.btnSignIn{
    width: 10rem;
    background-color: var(--alternative);
    border: none;
    color: var(--secondary);
    font-family: "Poppins",sans-serif;
    border-radius: 0.3rem;
    padding: 0.3rem 1rem;
}

.btnSignIn:hover{
    background-color: var(--awesome);
}

.textAlignment{
    text-align: left;
}

.sub-heading{
    padding-top: 3rem;
}

.form-button-wrapper{
    display: flex;
    justify-content: space-between;
}

@media (width < 999px)
{

.sign-in-content{
    width: 90%;
    padding-top: 4rem;
}

.form{
    width: 90%;
}

.form-button-wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
}

.btnSignIn{
    width: 100%; 
}
}
</style>