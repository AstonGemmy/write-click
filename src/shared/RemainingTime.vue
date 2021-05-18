<template>
    <div class="">
        Time Remaining <span class="ml-4 text-gray-600"> {{ remaining }} </span>
    </div>
</template>

<script>
    export default {
        props: ['remaining']
    }
</script>