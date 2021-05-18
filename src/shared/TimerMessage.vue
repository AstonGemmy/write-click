<template>    
    <div class="">
        Status message: <span class="ml-4 text-gray-600"> {{ message }} </span>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>