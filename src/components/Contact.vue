<template>  
  <div>
    <MainSectionTitle align="text-center" title-text="CONTACT JIDE ILORI" />
    <ContactCard :page-theme-color="color" />
  </div>
</template>

<script>

  import MainSectionTitle from '../shared/MainSectionTitle'
  import ContactCard from '../shared/ContactCard'

  export default {
    name: 'Contact',
    components: { MainSectionTitle, ContactCard },
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