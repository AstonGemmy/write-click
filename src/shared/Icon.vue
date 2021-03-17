<template>
    <i :class="[ icon ? icon : '' ]" class="mx-auto lg:mr-4"></i>
</template>

<script>

    export default {
        name: 'Icon',
        props: ['icon']
    }

</script>