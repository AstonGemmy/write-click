<template>
    <!-- Left Sidebar -->
    <div :class="sidebarToggler" class="fixed lg:left-0 top-0 w-full md:w-2/4 lg:w-full p-4 h-screen z-20 lg:relative lg:z-0 transition-all duration-700">
        <div class="relative bg-white overflow-hidden pr-0 shadow h-full rounded-xl">
            <div class="relative overflow-y-auto h-full">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['sidebar'],
        computed: {
            sidebarToggler() {
                return this.sidebar.left ? 'left-0' : '-left-full'
            }
        }
    }
</script>