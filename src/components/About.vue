<template>  
  <div>
    <MainSectionTitle align="text-center" title-text="ABOUT JIDE ILORI" />
    <TextContainer :text-content="text" />
    <SocialHandles />
    
  </div>
</template>

<script>

  import MainSectionTitle from '../shared/MainSectionTitle'
  import TextContainer from '../shared/TextContainer'
  import SocialHandles from '../shared/SocialHandles'

  export default {
    name: 'About',
    components: { MainSectionTitle, TextContainer, SocialHandles },
    data() {
      return {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique dolor necessitatibus ipsum facilis! Ullam error in, cum ea sapiente hic suscipit quisquam ab doloremque optio accusamus reprehenderit quia eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique dolor necessitatibus ipsum facilis! Ullam error in, cum ea sapiente hic suscipit quisquam ab doloremque optio accusamus reprehenderit quia eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique dolor necessitatibus ipsum facilis! Ullam error in, cum ea sapiente hic suscipit quisquam ab doloremque optio accusamus reprehenderit quia eius.
        `
      }
    },
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