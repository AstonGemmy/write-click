<template>  
  <div class="relative w-full bg-main bg-fixed bg-no-repeat">
    <div class="flex flex-col h-screen overflow-y-scroll items-between relative w-full bg-black bg-opacity-75 mx-auto">
      <Header :page-theme-color="color" />
      <div :class="addThemeGradientColor" class="flex flex-col justify-between relative w-full pt-32 lg:pt-56 bg-gradient-to-b to-transparent h-full">
        <div class="relative w-full px-8 lg:px-32">
          <router-view @setColor="setColor"></router-view>
        </div>
        <Footer />
      </div>
    </div>    
  </div>
</template>

<script>

  import Header from './shared/Header'
  import Footer from './shared/Footer'

  export default {
    name: 'App',
    components: { Header, Footer },
    computed: {
      addThemeGradientColor() {
        return this.color ? `from-${this.color}-600` : ''
      }
    },
    props: {
      pageThemeColor: String,
    },
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