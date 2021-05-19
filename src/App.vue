<template>
  <div>
    <!-- Overlay -->
    <Overlay />
    <!-- Loading Overlay -->
    <LoadingOverlay />
    <!-- Global Warning Modal -->
    <ConfirmationModal @setResponse="getResponse" />
    <router-view data-aos></router-view>
  </div>
</template>

<script>
  import ConfirmationModal from './shared/ConfirmationModal'
  import LoadingOverlay from './shared/LoadingOverlay'
  import Overlay from './shared/Overlay'
  import { mapState } from 'vuex'
  import AOS from './js/aos'

  export default {
    name: 'App',
    computed: {
      ...mapState([
        'confirmation_modal'
      ])
    },
    components: { LoadingOverlay, ConfirmationModal, Overlay },
    methods: {
      getResponse(value) {
        this.confirmation_modal.triggered = value
      },
    },
    created() {
      AOS.init({
        easing: 'ease-in-out-sine'
      })
    }
  }
</script>