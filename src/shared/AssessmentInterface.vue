<template>
    <!-- Question and Options Grid -->
    <ul v-if="assessment.questions" class="relative grid grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 w-full h-auto px-1 py-4 my-2 mx-auto">
        <li v-for="(question, key) in assessment.questions" :key="question.id" class="grid grid-flow-rows grid-cols-1 grid-rows-auto items-stretch gap-4 lg:mt-0 mt-8 overflow-hidden relative rounded-xl shadow bg-white">
            <div class="p-4">
                <span class="mr-4 uppercase">
                    {{ key + 1 }}
                </span>
                Question: <Questions :question="question.question" />
                <div class="mt-4">
                    <span class="">Options</span>
                    <Options :payload="assessment.questions" :index="key" v-model="answers[key]" />
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import Questions from '../shared/Questions'
    import Options from './Options.vue'

    export default {
        props: ['assessment'],
        components: { Questions , Options },
        data() {
            return {
                answers: []
            }
        },
        methods: {
            setAnswers(payload) {
                this.$emit('setAnswers', payload)
            }
        },
        watch: {
            'answers': {
                deep: true,
                handler(oldState, newState) {
                    this.setAnswers(newState)
                }
            }
        }
    }
</script>