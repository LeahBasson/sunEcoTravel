<template>
    <div class="container">
        <div class="row">
            <h1 class="login-heading">Login</h1>
        </div>
        <div class="row my-2 justify-content-center">
            <form class="form" @submit.prevent="handleLogin">
                <div class="form-control-wrapper">
                    <span>Enter Email address
                        <input type="email" class="form-control" placeholder="Email" v-model="email"
                            pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>Enter Password
                        <input type="password" class="form-control" placeholder="Password" v-model="password"
                            minlength="4" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <div class="account">
                        <button class="btnLogin" type="submit">Login</button>
                        <router-link to="/signin"><button class="btnLogin">Sign up</button></router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

// Reactive variables for login inputs
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await store.dispatch('login', { email: email.value, password: password.value })
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'You are now logged in.'
    })

    // Redirect after successful login
    const redirectAfterLogin = sessionStorage.getItem('redirectAfterLogin')
    sessionStorage.removeItem('redirectAfterLogin') // Clear the session storage
    if (redirectAfterLogin) {
      router.push(redirectAfterLogin)
    } else {
      router.push('/') // Redirect to default route
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Invalid email or password. Please try again.'
    })
  }
}
</script>

<style scoped>
.login-heading {
    color: var(--primary);
    font-family: "Poppins", sans-serif;
    padding-top: 6rem;
}

.form {
    width: 90%;
    padding-top: 1rem;
    text-align: left;
    font-family: "Poppins", sans-serif;
    padding-bottom: 4rem;
}

.form-control-wrapper {
    padding-top: 1.4rem;
}

.btnLogin {
    background-color: var(--alternative);
    border: none;
    width: 10rem;
    color: var(--secondary);
    padding: 0.4rem 0.8rem;
    border-radius: 0.3rem;
}

.btnLogin:hover {
    background-color: var(--awesome);
}

.account {
    display: flex;
    justify-content: space-between;
}

@media (width < 999px) {
    .login-heading {
        padding-top: 2rem;
    }
    .form {
        width: 90%;
        padding-top: 1rem;
    }
    .account {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .btnLogin {
        width: 100%;
        margin-top: 1rem;
    }
}
</style>
