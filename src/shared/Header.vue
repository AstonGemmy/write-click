<template>  
  <div id="header" :class="`fixed left-0 z-50 top-0 flex w-full py-4 px-32 justify-between bg-${pageThemeColor}-700`">
    <router-link class="flex justify-center text-white items-center p-4 uppercase text-xl" to="/">
        Jide Ilori
    </router-link>
    <div @click="setActiveRoute" class="relative flex items-center justify-between text-white">
        <router-link :class="`relative px-8 py-4 mr-6 hover:bg-${pageThemeColor}-500`" to="/about">About Me</router-link>
        <router-link :class="`px-8 py-4 mr-6 hover:bg-${pageThemeColor}-500`" to="/contact">Contact</router-link>
        <div @click="toggleDropDown" :class="`relative flex flex-col cursor-pointer mr-6 hover:bg-${pageThemeColor}-500`">
          <span class="relative px-8 py-4">Project</span>
          <span v-if="showDropDown" :class="`w-full absolute top-14 left-2/4 transform -translate-x-2/4 flex flex-col bg-${pageThemeColor}-500`">
            <router-link to="/projects/python" :class="`hover:bg-${pageThemeColor}-600 w-full pl-4 py-2`">Python</router-link>
            <router-link to="/projects/matlab" :class="`hover:bg-${pageThemeColor}-600 w-full pl-4 py-2`">Matlab</router-link>
            <router-link to="/projects/machine-learning" :class="`hover:bg-${pageThemeColor}-600 w-full pl-4 py-2`">Machine Learning</router-link>
          </span>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    props: ['page-theme-color'],
    data() {
      return {
        showDropDown: false
      }
    },
    methods: {
      setActiveRoute(e) {
        if (e.target.className.includes(`bg-${this.pageThemeColor}-500`)) {
          e.target.classList.add(`bg-${this.pageThemeColor}-500`)
        } else {
          e.target.classList.remove(`bg-${this.pageThemeColor}-500`)
        }
      },
      toggleDropDown() {
        this.showDropDown = !this.showDropDown
      }
    }
  }

</script>