<template>  
  <div id="header" :class="addThemeBGColor" class="fixed left-0 z-50 top-0 flex w-full py-4 px-8 lg:px-32 items-center justify-between">
    <router-link class="flex justify-center text-white items-center p-4 uppercase text-xl" to="/">
      Jide Ilori
    </router-link>
    <div @click="toggleNavBar" class="lg:hidden w-10 h-10 flex justify-center items-center rounded-full text-white">
      <i class="fa fa-bars"></i>
    </div>
    <div @click="setActiveRoute" :class="addToggleAttributes" class="text-center lg:text-left flex flex-col lg:flex-row fixed left-0 lg:relative w-full lg:w-auto items-start lg:items-center lg:justify-center lg:justify-between text-white">
        <router-link to="/about" :class="addThemeHoverBGColor500" class="w-full lg:w-auto relative px-8 py-4">About Me</router-link>
        <router-link to="/contact" :class="addThemeHoverBGColor500" class="w-full lg:w-auto relative px-8 py-4">Contact</router-link>
        <div @click="toggleDropDown" :class="addThemeHoverBGColor500" class="relative w-full lg:w-auto flex flex-col cursor-pointer">
          <span class="relative px-8 py-4">Project</span>
          <span v-if="showDropDown" :class="dropMenuBGColor" class="w-full relative lg:absolute top-auto lg:top-14 left-auto lg:left-2/4 transform -translate-none lg:-translate-x-2/4 flex flex-col">
            <router-link to="/projects/python" :class="addThemeHoverBGColor600" class="w-full lg:pl-4 py-2">Python</router-link>
            <router-link to="/projects/matlab" :class="addThemeHoverBGColor600" class="w-full lg:pl-4 py-2">Matlab</router-link>
            <router-link to="/projects/machine-learning" :class="addThemeHoverBGColor600" class="w-full lg:pl-4 py-2">Machine Learning</router-link>
          </span>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    props: ['page-theme-color'],
    computed: {
      addThemeBGColor() {
        return this.pageThemeColor ? `bg-${this.pageThemeColor}-700` : ''
      },
      dropMenuBGColor() {
        return `bg-${this.pageThemeColor}-800`
      },
      addToggleAttributes() {
        return this.navBarIsOpen ? `bottom-0 bg-${this.pageThemeColor}-800` : '-bottom-full'
      },
      addThemeHoverBGColor500() {
        return `hover:bg-${this.pageThemeColor}-500`
      },
      addThemeHoverBGColor600() {
        return `hover:bg-${this.pageThemeColor}-600`
      }
    },
    data() {
      return {
        showDropDown: false,
        navBarIsOpen: false
      }
    },
    methods: {
      setActiveRoute(e) {
        if (e.target.className.includes(`bg-${this.pageThemeColor}-500`)) {
          e.target.classList.add(`bg-${this.pageThemeColor}-500`)
        } else {
          e.target.classList.remove(`bg-${this.pageThemeColor}-500`)
        }
        if (e.target.nodeName.toLowerCase() == 'a') {
          this.closeNavbar()
        }
      },
      toggleDropDown() {
        this.showDropDown = !this.showDropDown
      },
      toggleNavBar() {
        this.navBarIsOpen = !this.navBarIsOpen
      },
      closeNavbar() {
        this.navBarIsOpen = false
      }
    },
    created() {
      window.addEventListener('resize', this.closeNavbar)
    },
    unmount() {
      window.removeEventListener('resize', this.closeNavbar)
    }
  }

</script>