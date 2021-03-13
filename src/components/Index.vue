<template>

  <div class="">

    <div :class="`uppercase text-center text-white mx-auto text-6xl`">
      MACHINE LEARNING ENGINEER
    </div>

    <div class="flex justify-center text-white p-4 py-12">

      <router-link to="/projects/python" class="bg-blue-500 bg-opacity-85 px-4 py-3 border-4 border-white mx-4 rounded-lg">
        <i class="fab fa-python mx-auto text-2xl"></i>
        <div class="mt-2">PYTHON</div>
      </router-link>

      <router-link to="/projects/matlab" class="bg-green-600 px-4 py-3 border-4 border-white mx-4 rounded-lg">
        <i class="fa fa-laptop-code mx-auto text-2xl"></i>
        <div class="mt-2">MATLAB</div>
      </router-link>

      <router-link to="/projects/machine-learning" class="bg-red-400 px-4 py-3 border-4 border-white mx-4 rounded-lg">
        <i class="fa fa-bezier-curve mx-auto text-2xl"></i>
        <div class="mt-2">MACHINE LEARNING</div>
      </router-link>

      <!-- <router-link @click="setThemeColor('red')" :color="theme.color" to="/projects/:props" class="bg-purple-400 px-4 py-3 border-4 border-white mx-4 rounded-lg">
        <i class="fa fa-chart-bar mx-auto text-2xl"></i>
        <div class="mt-2">PROJECTS</div>
      </router-link> -->

    </div>

    <div class="flex justify-center p-4">
      
      <a href="#" class="flex justify-center items-center rounded-full bg-white text-black shadow h-12 w-12 mx-4">
        <i class="fab fa-github text-2xl"></i>
      </a>
      
      <a href="#" class="flex justify-center items-center rounded-full bg-blue-500 text-white shadow h-12 w-12 mx-4">
        <i class="fab fa-linkedin text-2xl"></i>
      </a>

      <a href="#" class="flex justify-center items-center rounded-full bg-blue-400 text-white shadow h-12 w-12 mx-4">
        <i class="fab fa-twitter text-2xl"></i>
      </a>

      <a href="#" class="flex justify-center items-center rounded-full bg-red-400 text-white shadow h-12 w-12 mx-4">
        <i class="fa fa-envelope text-2xl"></i>
      </a>

      <a href="#" class="flex justify-center items-center rounded-full bg-blue-400 text-white shadow h-12 w-12 mx-4">
        <i class="fab fa-medium-m text-2xl"></i>
      </a>

    </div>
   
  </div>

</template>

<script>
  export default {
    name: 'Home',
    emits: ['setColor'],
    props: {
      color: String
    },
    methods: {
      setColor(color) {
        this.$emit('setColor', color)
      }
    },
    created() {
      this.setColor(this.color)
    }
  }
</script>