<template>
  
  <div class="relative bg-main bg-fixed bg-position-5/5 bg-no-repeat">
    
    <div class="relative grid grid-rows-5 bg-black bg-opacity-75 items-stretch min-h-screen">

      <div id="header" :class="`fixed left-0 z-50 top-0 flex w-full py-4 px-32 justify-between bg-${color}-700`">
        <router-link class="flex justify-center text-white items-center p-4 uppercase text-xl" to="/">
          Jide Ilori
        </router-link>
        <div class="relative flex items-center justify-between text-white">
          <router-link :class="`relative px-8 bg-${color}-400 py-4 mr-6`" to="/about">About Me</router-link>
          <router-link class="px-8 py-4 mr-6" to="/contact">Contact</router-link>
          <router-link class="px-8 py-4 mr-6" to="/project">Projects</router-link>
        </div>
      </div>

      <div class="relative row-span-5">
        <div :class="`px-32 pt-56 bg-gradient-to-b from-${color}-600 to-transparent`">
          <router-view @setColor="setColor" class="relative" />
        </div>
      </div>

      <div class="relative flex items-start h-auto w-full px-32 py-4 text-white justify-between">
        <div class="flex justify-center items-center p-4 uppercase text-xl mx-auto">
          Copyright 2021
        </div>
      </div>

    </div>

  </div>

</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        color: null
      }
    },
    methods: {
      setColor(value) {
        this.color = value
      }
    }
  }

</script>