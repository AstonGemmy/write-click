<template>
    <!-- Question and Options Grid -->
    <ul v-if="assessment.questions" class="relative grid grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 w-full h-auto px-1 py-4 my-2 mx-auto">
        <li v-for="(question, key) in assessment.questions" :key="question.id" class="grid grid-flow-rows grid-cols-1 grid-rows-auto items-stretch gap-4 lg:mt-0 mt-8 overflow-hidden relative rounded-xl shadow bg-white">
            <div class="p-4">
                <span class="mr-4 uppercase">
                    <!-- Serial Numbering -->
                    {{ key + 1 }}
                </span>
                <!-- Question section -->
                Question: <Questions :question="question.question" />
                <!-- Options section -->
                <div class="mt-4">
                    <span class="">Options</span>
                    <!-- Options component -->
                    <!-- Options in this component are shuffled and... -->
                    <!-- ...question key is required to index corresponding options for current question -->
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
        name: 'Assessment Interface',
        props: ['assessment'],
        components: { Questions , Options },
        data() {
            return {
                // Hold answers selected by candidate
                answers: []
            }
        },
        methods: {
            // Emits setAnswers method in Assessment Potal to update answers object
            setAnswers(payload) {
                this.$emit('setAnswers', payload)
            },
            // Initialize all answers to null before assessment begins
            initializeAnswers({questions, answers}) {
                Object.keys(questions).forEach(() => {
                    answers.push(null)
                })
            }
        },
        mounted() {
            this.initializeAnswers({
                questions: this.assessment.questions,
                answers: this.answers
            })
        },
        watch: {
            // Watch for newly selected answers and trigger answers object update
            'answers': {
                deep: true,
                handler(oldState, newState) {
                    this.setAnswers(newState)
                }
            }
        }
    }
</script>