<template>
    <div :class="sidebarToggler" class="fixed lg:right-0 top-0 w-full md:w-2/4 lg:w-full p-4 h-screen z-20 lg:relative lg:z-0 transition-all duration-700">
        <div class="bg-white h-full px-0 pb-4 rounded-xl shadow">
            <div class="relative h-full pr-1 py-2">
                <div class="relative h-full overflow-x-hidden px-2">
                    <div class="relative">
                        <h1 class="sticky z-10 text-blue-600 -top-2 px-8 md:px-1 xl:px-8 py-4 bg-white border-b border-gray-100 border-1">
                            <i class="fa fa-spinner text-blue-600 mr-4"></i>
                            Instructions
                        </h1>
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['sidebar'],
        computed: {
            sidebarToggler() {
                return this.sidebar.right ? 'right-0' : '-right-full'
            }
        }
    }
</script>