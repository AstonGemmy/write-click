<template>
  <div>
    <div class="relative bg-login w-full bg-top bg-no-repeat">
      <div class="relative h-screen w-full bg-opacity-25 bg-black">
        <!-- Container -->
        <div class="h-full flex items-center justify-center px-8 sm:px-0 relative">
          <form @submit.prevent="loginUser" class="rounded-lg p-8 bg-white w-full sm:w-auto shadow">
            <div class="flex mb-8 justify-between">
              <h1 class="text-xl font-bold text-pink-800 my-">
                Write-Click
              </h1>
              <router-link to="/">
                <i class="fa fa-globe text-xl"></i>
              </router-link>
            </div>
            <div class="relative my-4">
              <label for="username" class="my-2 block">Username</label>
              <input v-model="login.username" type="text" id="username" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
            </div>
            <div class="relative my-4">
              <label for="password" class="my-2 block">Password</label>
              <input v-model="login.password" type="password" id="password" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
            </div>
            <div class="relative my-4">
              <button type="submit" class="px-8 py-2 bg-pink-800 text-white hover:bg-pink-600 text-lg focus:outline-none border-gray-200 border-2 rounded-lg">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <div class="absolute left-0 w-screen bottom-0">
      <Footer />
    </div>
  </div>
</template>

<script>

  import Footer from '../shared/Footer'

  export default {

    data() {
      return {
        login: {
          username: null,
          password: null
        },
        registration: {
          name: null,
          username: null,
          password: null,
          class: null,
          sex: null,
          reg_no: null,
          role: [
            'student',
            'staff',
            'principal'
          ],
          registration_key: {
            student: null,
            staff: null
          }
        }
      }
    },

    components: {
      Footer
    },

    methods: {
      async loginUser() {
        alert(JSON.stringify(this.login))
        // const login = await axios.post('http://localhost/auth', this.login)
        // .then(res.json())
        // .then(res => {
        //   if (res.data.status == 200 && res.data !== '') {
        //     alert('Logged in!')
        //   } else {
        //     alert('Error logging in!')
        //   }
        // })
        // .catch(error => {
        //   alert(error.message)
        // })
      },
      // Destroys session
      async logoutUser() {
      //   const logout = await window.axios.post('/logout')
      //   .then(response => {
      //   if (response.data.status == 'success') {
      //         context.commit('setLoginState', false)
      //         context.dispatch('redirectTo', {intended: '/'})
      //       }
      //   })
      //   .catch(error => {
      //       context.commit('setLoginState', true)
      //   })
      },
      // Registers new user
      async registerUser() {
      //   context.commit('setLoader', true)
      //   context.dispatch('addLoader', 'register_loader')
      //   const attempt_registration = await window.axios.post('/api/users', register)
      //   .then(response => {
      //       if (response.data.status == 'success') {
      //         context.dispatch('toggleResponseFeedback', {
      //             target: 'register',
      //             message: 'Registration successful! A verification email has been sent to your email!',
      //             type: 'success'
      //         })
      //       } else {
      //         context.dispatch('toggleResponseFeedback', {
      //             target: 'register',
      //             message: 'Registration not successful! Try again later!',
      //             type: 'error'
      //         })
      //       }
      //   })
      //   .catch(error => {
      //       context.dispatch('toggleResponseFeedback', {
      //         target: 'register',
      //         message: 'Registration error!',
      //         type: 'error'
      //       })
      //   });
      //   context.commit('setLoader', false)
      //   context.dispatch('removeLoader', 'register_loader')
      },
    }
  }
</script>