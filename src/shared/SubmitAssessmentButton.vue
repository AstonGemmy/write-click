<template>
   <button v-bind:disabled="status" @click="confirmSubmission" class="focus:outline-none focus:bg-gray-400 hover:bg-blue-800 ripple-node w-full md:w-auto text-xl bg-blue-600 px-6 pt-3 pb-2 rounded-xl font-bold uppercase text-blue-200">
        Submit
    </button>
</template>

<script>
    export default {
        name: 'Assessment Submission Button',
        props: ['status'],
        methods: {
            confirmSubmission() {
                // Emit confirmSubmission event when clicked
                this.$emit('confirmSubmission')
            }
        }
    }
</script>