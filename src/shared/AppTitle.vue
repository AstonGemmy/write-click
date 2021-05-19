<template>
    <!-- Header -->
    <h1 class="bg-pink-700 text-xl uppercase sticky top-0 flex justify-center items-center mb-6 px-8 md:px-4 xl:px-8 pt-4 pb-3 text-white font-bold">
        {{ app_name }}
    </h1>
</template>

<script>
    export default {
        data: () => {
            return {
                app_name: process.env.VUE_APP_NAME
            }
        }
    }
</script>