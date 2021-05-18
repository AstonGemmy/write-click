<template>
  <div>
    <!-- Loading Overlay -->
    <LoadingOverlay />
    <!-- Global Warning Modal -->
    <ConfirmationModal />
    <router-view data-aos></router-view>
  </div>
</template>

<script>
  import AOS from './js/aos'
  import ConfirmationModal from './shared/ConfirmationModal'
  import LoadingOverlay from './shared/LoadingOverlay.vue'

  export default {
    name: 'App',
    components: { ConfirmationModal, LoadingOverlay },
    methods: {
      getResponse(value) {
        alert(value)
      },
    },
    created() {
      AOS.init({
        easing: 'ease-in-out-sine'
      })
    }
  }
</script>