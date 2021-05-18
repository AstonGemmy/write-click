<template>
    <confirmation-modal>
        <form @submit.prevent="confirmResponse" :class="toggleModal" class="fixed z-50 left-2/4 top-16 transform -translate-x-2/4 w-4/5 lg:w-4/12 bg-white rounded-lg overflow-hidden shadow-2xl">
            
            <div class="relative flex justify-between px-6 py-3 border-b-2 border-gray-100 text-blue-600 text-xl uppercase">
                <h1 class="">
                    <i class="far fa-lightbulb mr-3"></i>
                    {{ confirmation.heading }}
                </h1>
                <span v-if="confirmation.closeable" class="flex justify-center items-center h-6 w-6 bg-white rounded-full cursor-pointer" @click.prevent="closeModal">
                    <i class="fa text-red-400 fa-times"></i>
                </span>
            </div>

            <div class="relative px-8 h-full">
                
                <div class="relative p-8 h-full">
                    
                    <div class="w-full mx-auto text-xl text-blue-600">
                        {{ confirmation.message }}
                    </div>
                    
                </div>
                
                <div v-if="confirmation.action" class="px-6 py-4 border-t-2 border-gray-100">
                    
                    <button type="submit" class="ripple-node border-pink-800 bg-blue-600 text-white rounded-lg shadow text-xl px-6 py-2 mr-4"> {{ confirmation.action }} </button>
                    
                </div>
            
            </div>
        </form>
    </confirmation-modal>
</template>

<script>
import ConfirmationModal from './ConfirmationModal.vue'

    export default {
  components: { ConfirmationModal },

        data() {
            return {
                confirmation_modal: {
                    modal: true,
                    source: 'Here',
                    triggered: true,
                    heading: 'Heading',
                    message: 'Message',
                    action: 'Action',
                    closeable: false,
                    close: false
                }
            }
        },

        emits: ['setResponse'],

        props: ['confirmation'],

        computed: {
            toggleModal() {
                return this.confirmation.modal ? 'block' : 'hidden'
            }
        },

        methods: {
            closeModal() {
                // this.confirmation.modal = false
                // this.confirmation.can_close = false
            },

            confirmResponse() {
                // this.confirmation.closeable = false
                this.$emit('setResponse', this.confirmation.source)
                // this.closeModal()
            }

        },

        // watch: {
        //     '$store.state.confirmation_modal.close': {
        //         deep:true,
        //         handler(newState, oldState) {
        //             if (newState == true) {
        //                 this.closeModal()
        //             }
        //         }
        //     },
        // }

    }

</script>