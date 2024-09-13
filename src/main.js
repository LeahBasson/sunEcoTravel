import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'aos/dist/aos.css';


createApp(App).use(store).use(router).mount('#app')
