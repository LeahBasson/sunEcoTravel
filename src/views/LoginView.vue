<template>
  <div class="container">
    <div class="row">
      <h1 class="login-heading animate__animated animate__fadeInDown">Login</h1>
    </div>
    <div class="row my-2 justify-content-center" data-aos="fade-up"  data-aos-duration="3000">
      <form class="form" @submit.prevent="handleLogin">
        <div class="form-control-wrapper">
          <span>Enter Email address
            <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd"
              pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" />
          </span>
        </div>
        <div class="form-control-wrapper">
          <span>Enter Password
            <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass"/>
          </span>
        </div>
        <div class="form-control-wrapper">
          <div class="account">
            <button class="btnLogin" type="submit">Login</button>
            <router-link to="/signin">
              <button class="btnLogin">Sign up</button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template> 



<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import AOS from 'aos';

const store = useStore()

const payload = reactive({
emailAdd: '',
userPass: ''
})

const handleLogin = async () => {
  if (!payload.emailAdd || !payload.userPass) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in both the email and password fields!',
      confirmButtonColor: '#FF9A00',
    });
    return;
  }

  try {
    await store.dispatch('login', payload);
  } catch (error) {
    console.error('Login failed:', error.message); // This will log the error message in the console
    Swal.fire({
      icon: 'error',
      title: 'Login failed',
      text: error.message,
      confirmButtonColor: '#FF9A00',
    });
  }
};

onMounted(async () => {
  AOS.init();
})

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