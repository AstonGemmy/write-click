<template>
  <div>
    <MainSectionTitle align="text-center" title-text="MACHINE LEARNING ENGINEER" />
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
    </div>
    <SocialHandles />   
  </div>
</template>

<script>

  import MainSectionTitle from '../shared/MainSectionTitle'
  import SocialHandles from '../shared/SocialHandles'

  export default {
    name: 'Home',
    emits: ['setColor'],
    components: { MainSectionTitle, SocialHandles },
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