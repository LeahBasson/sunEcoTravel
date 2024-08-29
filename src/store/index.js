import { createStore } from 'vuex'
import axios from 'axios'
import { toast }  from 'vue3-toastify'
import { applyToken } from '@/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import 'vue3-toastify/dist/index.css'
import router from '@/router'


const apiURL = 'https://sunecotravel.onrender.com/'
// Should you reload the page after logging in
applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    hotels : null,
    hotel : null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) { 
      state.users = value
    },
    setUser(state, value) { 
      state.user = value
    },
    setHotel(state, value) { 
      state.hotel = value
    },
    setHotels(state, value) { 
      state.hotels = value
    }
  },
  actions: {
     // ==== Hotel =====
     async fetchHotels(context) {
      try {
        const { results } = await (await axios.get(`${apiURL}hotel`)).data
        if (results) {
          context.commit('setHotels', results)
        } else {
          router.push({ name: 'login' })
        }
      } catch (err) {
        toast.error(`${err}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }
  },
  // ===== LOGIN =======
  async login(context, payload) {
    try {
      const { msg, result, token } = await (await axios.post(`${apiURL}user/login`, payload)).data

      if (result) {
        toast.success(`${msg}😎`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
        context.commit('setUser', {
          msg,
          result
        })
        cookies.set('LegitUser', { token, msg, result })
        applyToken(token)
        router.push({ name: 'hotels' })
      } else {
        toast.error(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  },
  modules: {
  }
})
