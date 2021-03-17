<template>
    <p class="lg:text-center text-2xl text-white px-4 py-12 mx-auto">
      {{ textContent }}
    </p>
</template>

<script>
    export default {
        name: 'Main Section Text Container',
        props: ['text-content']
    }
</script>