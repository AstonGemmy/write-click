<template>  
  <div class="relative bg-main bg-fixed bg-position-5/5 bg-no-repeat">    
    <div class="relative grid grid-rows-5 bg-black bg-opacity-75 items-stretch min-h-screen">
      <Header :page-theme-color="color" />
      <div class="relative row-span-5">
        <div :class="`px-32 pt-56 bg-gradient-to-b from-${color}-600 to-transparent`">
          <router-view @setColor="setColor" class="relative" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>

  import Header from './shared/Header'
  import Footer from './shared/Footer'

  export default {
    name: 'App',
    components: { Header, Footer },
    props: {
      pageThemeColor: String
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