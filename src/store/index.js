import { createStore } from 'vuex'
import axios from 'axios'
import { toast }  from 'vue3-toastify'
import { applyToken } from '@/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import 'vue3-toastify/dist/index.css'
import router from '@/router'


const apiURL = 'https://sunecotravel.onrender.com/'
const savedUser = cookies.get('LegitUser');
if (savedUser && savedUser?.token) {
  applyToken(savedUser.token);
}
export default createStore({
  state: {
    users: null,
    user: savedUser ? savedUser.result : null,
    hotels : null,
    hotel : null,
    recentHotels: null,
    bookings: null,
    booking: null,
    redirectIntent: null,
    stories: null,
    story: null
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
    },
    setBookings(state, value) {
      state.bookings = value;
    },
    setBooking(state, value) {
      state.booking = value;
    },
    setRedirectIntent(state, value) {
      state.redirectIntent = value;
    },
    setStories(state, value) {
      state.stories = value;
    },
    setStory(state, value) {
      state.story = value;
    },
    setBookingCount(state, count) {
      state.bookingCount = count;
    },
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
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          }  //Used to display an error message
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
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
    async fetchCurrentUser({ commit }) {
      try {
        const token = cookies.get('LegitUser')?.token;
        if (!token) return;

        const { result } = await (await axios.get(`${apiURL}user/account`, {
          headers: { Authorization: `Bearer ${token}` }
        })).data;

        if (result) {
          commit('setUser', result);
        } else {
          cookies.remove('LegitUser');  // Clear the token if invalid
        }
      //   setTimeout(() => {
      //     location.reload();
      // }, 3000);
      } catch (error) {
        toast.error(`Error fetching user: ${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
      setTimeout(() => {
        location.reload();
    }, 4000)
    },

    // ===== LOGIN =======
    async login(context, payload) {
      try {
        const response = await axios.post(`${apiURL}user/login`, payload);
        const { msg, result, token } = response.data;
        if (result) {
          toast.success(`${msg}😎`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
    
          // Commit user data to Vuex store
          context.commit('setUser', result);
    
          // Set token in cookies
          cookies.set('LegitUser', { token, msg, result });
    
          // Apply token for authorization
          applyToken(token);
    
          // Redirect based on user role and redirectIntent
          if (context.state.redirectIntent === 'admin' && result.userRole === 'admin') {
            router.push({ name: 'admin' });
          } else {
            await router.push({ name: 'account', params: { id: result.userID } });
            location.reload();

          }
          // Clear redirectIntent after successful login
          context.commit('setRedirectIntent', null);
        } else {
          // Login failed
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error(`Login failed: ${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
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
    console.log(payload);
    try {
      const { msg, err} = await(await axios.patch(`${apiURL}user/${payload.userID}`, payload)).data
      if (msg) {
        context.dispatch('fetchUsers')
        cookies.set('LegitUser', {
            token: savedUser.token,
            result: payload
          })
          setTimeout(() => {
            location.reload();
        }, 3000);
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
  },
  // ==== Bookings ========
  async fetchBookings(context, uid) {
    try {
      const { results, msg } = await (await axios.get(`${apiURL}user/${uid}/bookings`)).data
      if (results) {
        context.commit('setBookings', results)
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
  async fetchUserBookings(context, uid) {
    try {
      const { results, msg } = await (await axios.get(`${apiURL}user/${uid}/booking`)).data;
      if (results) {
        context.commit('setBookings', results);
      } else {
        toast.error(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  },
  async updateBooking(context, payload) {
    try {
      const { msg } = await (await axios.patch(`${apiURL}user/${payload.userID}/booking/${payload.bookingID}`, payload)).data;
      if (msg) {
        context.dispatch('fetchBookings', payload.userID);
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  },
  async addBooking(context, payload) {
    try {
      const { msg, booking } = await (await axios.post(`${apiURL}user/${payload.userID}/booking`, payload)).data;
      if (booking) {
        context.dispatch('fetchUserBookings', payload.userID);
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      } else {
        toast.success(`${msg}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  },
  async deleteBooking(context, payload) {
    try {
      const { msg } = await (await axios.delete(`${apiURL}user/${payload.userID}/booking/${payload.bookingID}`)).data
      if (msg) {
        context.dispatch('fetchUserBookings', payload.userID)
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
  async deleteBookings(context, payload) {
    try {
      const { msg } = await (await axios.delete(`${apiURL}user/${payload.userID}/bookings`)).data
      if (msg) {
        context.dispatch('fetchUserBookings', payload.userID)
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
  // ==== Story =====
  async fetchStories(context) {
    try {
      const { results } = await (await axios.get(`${apiURL}story`)).data
      if (results) {
        context.commit('setStories', results)
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
  async addStory(context, payload) {
    try {
      const { msg } = await (await axios.post(`${apiURL}story/addStory`, payload)).data
      if (msg) {
        context.dispatch('fetchStories')
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
  async deleteStory(context, id) {
    try {
      const { msg } = await (await axios.delete(`${apiURL}story/${id}`)).data
      if (msg) {
        context.dispatch('fetchStories')
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

  },
  
  modules: {
  }
})
