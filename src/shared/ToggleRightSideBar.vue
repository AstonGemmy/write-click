<template>
    <div @click="toggleSidebar" class="lg:hidden fixed bottom-6 right-8 z-50 bg-blue-400 rounded-full flex justify-center items-center w-12 h-12">
        <i :class="stateIcon" class="fa text-xl text-white transform scale-y-75"></i>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toggleState: false,
            }
        },
        computed: {
            stateIcon() {
                return this.toggleState ? 'fa-times' : 'fa-chevron-right'
            }
        },
        methods: {
            toggleSidebar() {
                // Toggle this sidebar visibility status
                this.toggleState = !this.toggleState
                // Emit toggle method and signal sidebar direction being toggled
                this.$emit('toggle', {
                    left: false,
                    right: this.toggleState,                    
                })
            },
        }
    }
</script>