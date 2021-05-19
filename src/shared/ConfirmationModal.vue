<template>
    <form @submit.prevent="confirmResponse" :class="toggleModal" class="fixed z-50 left-2/4 top-16 transform -translate-x-2/4 w-4/5 lg:w-4/12 bg-white rounded-lg overflow-hidden shadow-2xl">
        <div class="relative flex justify-between px-6 pt-3 pb-1 border-b-2 border-gray-100 text-blue-600 uppercase">
            <h1 class="">
                <i class="far fa-lightbulb mr-3"></i>
                {{ confirmation_modal.heading }}
            </h1>
            <span v-if="confirmation_modal.closeable" class="flex justify-center items-center h-6 w-6 bg-white rounded-full cursor-pointer" @click.prevent="closeModal">
                <i class="fa text-red-400 fa-times"></i>
            </span>
        </div>
        <div class="relative px-8 h-full">            
            <div class="relative p-4 h-full">                
                <div class="w-full mx-auto text-blue-600">
                    {{ confirmation_modal.message }}
                </div>                
            </div>            
            <div v-if="confirmation_modal.action" class="px-0 py-4 border-t-2 border-gray-100">                
                <button type="submit" class="focus:outline-none hover:bg-blue-700 ripple-node border-pink-800 bg-blue-600 text-white rounded-lg shadow px-6 py-2 mr-4"> {{ confirmation_modal.action }} </button>                
            </div>        
        </div>
    </form>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'COnfirmation Modal',
        emits: ['setResponse'],
        computed: {
            ...mapState([
                'confirmation_modal'
            ]),
            toggleModal() {
                return this.confirmation_modal.show ? 'block' : 'hidden'
            }
        },
        methods: {
            ...mapActions([
                'closeModal'
            ]),
            confirmResponse() {
                this.confirmation_modal.closeable = false
                this.$emit('setResponse', this.confirmation_modal.source)
                this.closeModal()
            }
        },
        watch: {
            '$store.state.confirmation_modal.show': {
                deep:true,
                handler(newState) {
                    if (newState == false) {
                        this.closeModal()
                    }
                }
            },
        }
    }

</script>