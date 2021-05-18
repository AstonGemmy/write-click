<template>
    <div @click="toggleSidebar" class="lg:hidden fixed bottom-6 right-8 z-50 bg-blue-400 rounded-full flex justify-center items-center w-12 h-12">
        <i :class="toggleStateIcon" class="fa text-xl text-white transform scale-y-75"></i>
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
            toggleStateIcon() {
                return this.toggleState ? 'fa-times' : 'fa-chevron-right'
            }
        },
        methods: {
            toggleSidebar() {
                this.toggleState = !this.toggleState
                this.$emit('toggle', {
                    left: false,
                    right: this.toggleState,                    
                })
            },
        }
    }
</script>