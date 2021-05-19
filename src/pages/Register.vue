<template>
    <div>
        <div class="relative w-full">
            <div class="relative h-screen w-full bg-opacity-25 bg-black">
            <!-- Container -->
                <div class="h-full flex py-8 justify-center px-8 sm:px-32 relative">
                    <form @submit.prevent="registerUser" class="rounded-lg py-8 bg-white w-full shadow overflow-y-auto invisible-scrollbar">
                        <div class="flex mx-8 mb-8 justify-between">
                            <h1 class="text-xl font-bold text-pink-800 my-">
                                {{ app_name }}
                            </h1>
                            <router-link to="/">
                                <i class="fa fa-globe text-xl"></i>
                            </router-link>
                        </div>
                        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 mx-8 lg:px-8">
                            <div class="mt-8">
                                <h1 class="text-black font-bold">Personal Details</h1>
                                <div class="relative my-4">
                                    <label for="first_name" class="my-2 block">First Name</label>
                                    <input type="text" id="first_name" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                                <div class="relative my-4">
                                    <label for="middle_name" class="my-2 block">Middle Name</label>
                                    <input type="text" id="middle_name" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                                <div class="relative my-4">
                                    <label for="last_name" class="my-2 block">Surname</label>
                                    <input type="text" id="last_name" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                                <div class="relative my-4">
                                    <label for="username" class="my-2 block">Username</label>
                                    <input type="text" id="username" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                                <div class="relative my-4">
                                    <label for="password" class="my-2 block">Password</label>
                                    <input v-model="registration.password" type="password" id="password" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                            </div>
                            <div class="mt-8">
                                <h1 class="text-black font-bold">Academic Details</h1>
                                <div class="relative my-4">
                                    <label for="reg_no" class="my-2 block">Registration Number</label>
                                    <input type="text" id="reg_no" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                                <div class="relative my-4">
                                    <label for="class" class="my-2 block">Class</label>
                                    <input type="password" id="class" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                            </div>
                            <div class="mt-8">
                                <h1 class="text-black font-bold">Registration Type</h1>
                                <div class="relative my-4">
                                    <label for="role" class="my-2 block">Role</label>
                                    <select type="text" v-model="registration.role" id="role" class="px-8 py-3 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                        <option v-for="role in roles" :key="role" :value="role">
                                            {{ role }}
                                        </option>
                                    </select>
                                </div>
                                <div v-if="registration.role !== null && registration.role !== 'student'" class="relative my-4">
                                    <label for="reg_pin" class="my-2 block">Registration Pin</label>
                                    <input type="text" id="reg_pin" class="px-8 py-2 w-full bg-white text-lg focus:border-pink-300 focus:outline-none border-gray-300 border-2 rounded-lg">
                                </div>
                            </div>
                        </div>
                        <div class="flex mx-8 lg:px-8 justify-between mt-8">
                            <button type="submit" class="w-full sm:w-auto px-8 py-2 bg-pink-800 text-white hover:bg-pink-600 text-lg focus:outline-none border-gray-200 border-2 rounded-lg">
                                Register
                            </button>
                        </div>
                        <div class="relative w-full">
                            <Footer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import Footer from '../shared/Footer'

  export default {

    data: () => {
      return {
        app_name: process.env.VUE_APP_NAME,
        registration: {
          name: null,
          username: null,
          password: null,
          class: null,
          sex: null,
          reg_no: null,
          role: null,
          registration_key: {
            student: null,
            staff: null
          }
        },
        roles: [
            'student',
            'staff',
            'principal'
        ],
      }
    },

    components: {
      Footer
    },

    methods: {
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