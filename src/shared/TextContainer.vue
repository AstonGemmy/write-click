<template>
    <p class="text-sm lg:text-2xl text-white p-4 lg:py-12 mx-auto">
      {{ textContent }}
    </p>
</template>

<script>
    export default {
        name: 'Main Section Text Container',
        props: ['text-content']
    }
</script>