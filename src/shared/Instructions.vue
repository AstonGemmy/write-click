<template>
    <div>
        <ul v-for="instruction in instructions" :key="instruction.title" class="text-sm list-decimal relative my-4 mx-4 md:mx-0 xl:mx-4 py-2 px-4 md:px-0 xl:px-4">
            <li v-for="content in instruction.content" :key="content" class="py-1 px-4">
                {{ content }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['instructions']
    }
</script>