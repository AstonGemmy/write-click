<template>
    <div class="flex justify-between relative">                                        
        <h1 class="text-blue-600 px-1">
            <i class="fa fa-spinner text-blue-600 mr-4"></i>
            Progress
        </h1>
        <div class="relative">
            <span class="">
                {{ `${progress.answered} / ${progress.total}` }} answered
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['questions', 'answers', 'progress'],
    methods: {
        updateAssessmentProgress(payload) {
            let { total, answers, progress } = payload
            let answered = 0
            Object.keys(answers).forEach(answer => {
            if (answers[answer] !== null) {
                answered = answered + 1
            }
            })
            this.setAssessmentProgress(progress, {total: total, answered: answered})
            if (answered == total) {
                progress.all_questions_answered = true
            }
        },
        setAssessmentProgress(payload, values) {
            payload.total = values.total
            payload.answered = values.answered
        }
    },
    created() {
        this.setAssessmentProgress(this.progress, {
            total: Object.keys(this.questions).length,
            answered: 0
        })
    },
    watch: {
      'answers': {
        deep: true,
        handler(oldState) {
          const payload = {
            total: Object.keys(this.questions).length,
            answers: oldState,
            progress: this.progress
          }
          this.updateAssessmentProgress(payload)
        }
      }
    }
}
</script>