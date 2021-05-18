<template>
    <div @click="toggleSidebar" class="lg:hidden fixed bottom-6 left-8 z-50 bg-blue-400 rounded-full flex justify-center items-center w-12 h-12">
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
                return this.toggleState ? 'fa-times' : 'fa-chevron-left'
            }
        },
        methods: {
            toggleSidebar() {
                this.toggleState = !this.toggleState
                this.$emit('toggle', {
                    left: this.toggleState,
                    right: false
                })
            },
        }
    }
</script>