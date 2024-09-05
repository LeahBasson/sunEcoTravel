<template>
    <div class="container">
        <div class="row">
            <h1 class="login-heading">Login</h1>
        </div>
        <div class="row my-2 justify-content-center">
            <form class="form" @submit.prevent="login">
                <div class="form-control-wrapper">
                    <span>Enter Email address
                        <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd"
                            pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>Enter Password
                        <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass"
                            minlength="4" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <div class="account">
                        <button class="btnLogin">Login</button>
                        <router-link to="/signin"><button class="btnLogin">Sign up</button></router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const payload = reactive({
    emailAdd: '',
    userPass: ''
})

async function login() {
    try {
        // Check that payload contains required parameters
        if (!payload.emailAdd || !payload.userPass) {
            throw new Error('Email or password missing')
        }

        // Dispatch the login action
        const userID = await store.dispatch('login', payload)
        
        if (!userID) {
            throw new Error('Failed to retrieve user ID')
        }

        // Retrieve the stored redirect path
        const redirectAfterLogin = sessionStorage.getItem('redirectAfterLogin')

        if (redirectAfterLogin) {
            // Remove the redirect path from storage and navigate to it
            sessionStorage.removeItem('redirectAfterLogin')
            router.push(redirectAfterLogin)
        } else {
            // Navigate to the account page or another default page
            router.push({ name: 'account', params: { id: userID } })
        }
    } catch (error) {
        // Handle login error (e.g., show an error message)
        console.error('Login failed:', error.message)
    }
}
</script>

<style scoped>
.login-heading{
    color: var(--primary);
    font-family: "Poppins",sans-serif;
    padding-top: 6rem;
}

.form{
    width: 90%;
    padding-top: 1rem;
    text-align: left;
    font-family: "Poppins",sans-serif;
    padding-bottom: 4rem;
}

.form-control-wrapper{
    padding-top: 1.4rem;
}

.btnLogin{
    background-color: var(--alternative);
    border: none;
    width: 10rem;
    color: var(--secondary);
    padding: 0.4rem 0.8rem;
    border-radius: 0.3rem;
}

.btnLogin:hover{
    background-color: var(--awesome);
}

.account{
    display: flex;
    justify-content: space-between;
}

@media (width < 999px)
{
.login-heading{
padding-top: 2rem;
}
.form{
width: 90%;
padding-top: 1rem;
}

.account{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.btnLogin{
    width: 100%;
    margin-top: 1rem;
}
}
</style>