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
    hotel : null,
    recentHotels: null
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
    },
    setRecentHotels(state, value) { 
      state.recentHotels = value
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
    },

    async fetchHotel(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}hotel/${id}`)).data
        if (result) {
          context.commit('setHotel', result)
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
    async fetchRecentHotels(context) {
      console.log(context)
      try {
        const res = await axios.get(`${apiURL}hotel/recent`) 
        const {results, msg} = await res.data
        if(results) {
          context.commit('setRecentHotels', results)
        } else {
          toast.error(`${ msg }`)  , {  //its going to be success if the request was successful. Its style
            autoClose: 2000
          }  //Used to display an error message
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        }) // Toast is used to display an error message
      }
    },
    async addHotel(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}hotel/add`, payload)).data
        if (msg) {
          context.dispatch('fetchHotels')
          toast.success(`${msg}`, {
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
    async updateHotel(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}hotel/${payload.hotelID}`, payload)).data
        if (msg) {
          context.dispatch('fetchHotels')
          toast.success(`${msg}`, {
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

    async deleteHotel(context, id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}hotel/${id}`)).data
        if (msg) {
          context.dispatch('fetchHotels')
          toast.success(`${msg}`, {
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
        router.push({ name: 'account' })
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
  // ==== User ========
  async fetchUsers(context) {
    try {
      const { results, msg } = await (await axios.get(`${apiURL}user`)).data
      if (results) {
        context.commit('setUsers', results)
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
  async fetchUser(context, id) {
    try {
      const { result, msg } = await (await axios.get(`${apiURL}user/${id}`)).data
      if (result) {
        context.commit('setUser', result)
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
  async addUser(context, payload) {
    try {
      const { msg } = await (await axios.post(`${apiURL}user/register`, payload)).data
      if (msg) {
        context.dispatch('fetchUsers')
        toast.success(`${msg}`, {
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
  async updateUser(context, payload) {
    try {
      const { msg, err } = await (await axios.patch(`${apiURL}user/${payload.userID}`, payload)).data
      if (msg) {
        context.dispatch('fetchUsers')
      } else {
        toast.error(`${err}`, {
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
  async deleteUser(context, id) {
    try {
      const { msg, err } = await (await axios.delete(`${apiURL}user/${id}`)).data
      if (msg) {
        context.dispatch('fetchUsers')
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      } else {
        toast.error(`${err}`, {
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
  }

  },
  
  modules: {
  }
})
