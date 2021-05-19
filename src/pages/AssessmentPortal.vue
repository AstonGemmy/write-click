<template>  
  <div class="bg-gray-100 bg-contain">
    <div class="relative overflow-x-hidden lg:overflow-hidden lg:grid grid-flow-col grid-cols-5 gap-0 w-screen lg:h-screen h-auto">
      
      <!-- Left Sidebar -->
      <LeftSideBar :sidebar="sidebar">
        <AppTitle />
        <CandidateAvatar />
        <CandidateData :candidate="candidate" />
        <ScoreLegend />
        <LogoutButton />
      </LeftSideBar>

      <!-- Main Section -->
      <div class="relative p-4 h-screen col-span-3">
        <!-- Sidebar Togglers -->
        <ToggleLeftSideBar @toggle="toggleSideBar" />
        <ToggleRightSideBar @toggle="toggleSideBar" />
        
        <form method="post" @submit.prevent="confirmSubmission" class="relative h-full pb-16">
          <div class="relative invisible-scrollbar overflow-y-auto h-full">
            <div class="sticky top-0 z-10 mb-4 mx-1 bg-white rounded-xl overflow-hidden shadow">
              <div class="flex items-center justify-between py-4 px-8 bg-white shadow">
                <h1 class="text-xl font-bold text-blue-600">
                  <!-- Name of Assessment -->
                  {{ assessment.subject }}
                </h1>
                <AssessmentProgress v-if="assessment.questions" :questions="assessment.questions" :answers="assessment.answers" :progress="assessment.progress" />
              </div>
              <Timer>
                <CountdownTimer :payload="assessment.timer" />
                <TimerMessage :message="assessment.timer.message" />
              </Timer>            
            </div>
            <!-- Question and Options Grid -->
            <AssessmentInterface v-if="assessment.questions" @setAnswers="setAnswers" :assessment="assessment" />
          </div>
          <!-- Submit button -->
          <div v-if="assessment.questions" class="absolute bottom-0 w-full z-10 bg-white rounded-xl overflow-hidden shadow">
            <div class="flex items-center justify-between py-2 px-8 bg-white shadow">
              <SubmitAssessmentButton :status="assessment.submission_is_disabled" @confirmSubmission="confirmSubmission" />
            </div>
          </div>
        </form>
      </div>
      <!-- Right Sidebar -->
      <RightSideBar :sidebar="sidebar">
        <Instructions :instructions="assessment.instructions" />
      </RightSideBar >
    </div>
  </div>
</template>

<script>
  import SubmitAssessmentButton from '../shared/SubmitAssessmentButton'
  import AssessmentInterface from '../shared/AssessmentInterface'
  import ToggleRightSideBar from '../shared/ToggleRightSideBar'
  import AssessmentProgress from '../shared/AssessmentProgress'
  import ToggleLeftSideBar from '../shared/ToggleLeftSideBar'
  import CandidateAvatar from '../shared/CandidateAvatar'
  import CountdownTimer from '../shared/CountdownTimer'
  import CandidateData from '../shared/CandidateData'
  import LogoutButton from '../shared/LogoutButton'
  import TimerMessage from '../shared/TimerMessage'
  import Instructions from '../shared/Instructions'
  import RightSideBar from '../shared/RightSideBar'
  import ScoreLegend from '../shared/ScoreLegend'
  import LeftSideBar from '../shared/LeftSideBar'
  import { mapActions, mapState } from 'vuex'
  import AppTitle from '../shared/AppTitle'
  import Timer from '../shared/Timer'

  export default {
    name: 'Assessment',
    data() {
      return {
        sidebar: {},
        candidate: {
          name: "Aston Gemmy O'naire",
          reg_no: 4321,
          session: '2020/2021',
          class: 'JSS 3',
          date: 'Dec. 18th, 2021',
          term: 'First',
          time_allowed: '2 Hours'
        },
        assessment: {
          questions: null,
          answers: [],
          subject: 'General Mathematics',
          instructions: [
            {
              title: 'Follow the following instructions!',
              content: [
                'Computer operator',
                'Systems design architect',
                'Hardware service manager',
                'ICT cordinator',
                'Computer analyst',
                'Software engineer'
              ]
            }
          ],
          timer: {
            duration: '2 Hours',
            remaining: "00:10",
            message: 'Enough time remaining!',
            status: 'off'
          },
          progress: {
            answered: 0,
            total: 0,
            all_questions_answered: false
          },
          submission_is_disabled: false,
          
        }
      }
    },

    computed: {
      ...mapState([
        'confirmation_modal'
      ])
    },

    components: {
      RightSideBar,
      Instructions,
      LeftSideBar,
      Timer,
      AppTitle,
      CandidateAvatar,
      CandidateData,
      ScoreLegend,
      LogoutButton,
      ToggleLeftSideBar,
      ToggleRightSideBar,
      AssessmentProgress,
      CountdownTimer,
      TimerMessage,
      AssessmentInterface,
        SubmitAssessmentButton
    },

    methods: {

      ...mapActions([
        'showModal',
        'closeModal'
      ]),
      // Assessment initialization warning
      initializationNotice(payload) {
        this.setAssessmentNotice(payload).init()
        this.showModal()
      },
      // Sets confirmation modal options based on notice type
      setAssessmentNotice(payload) {
        return {
          // Type: Assessment is about to begin
          init: () => {
            [payload.source, payload.message, payload.heading, payload.action] = [
              'init',
              `You are about to begin your test and you have ${this.assessment.timer.remaining} minutes for this test. If you are ready, you can continue.`,
              'Test Initialization Notice',
              'Yes, I am ready'
            ]
          },
          // Type: Assessment timer is off and submission happens automatically
          autoSubmit: () => {
            [payload.source, payload.message, payload.heading, payload.action] = [
              'submit',
              `Your time is up and test will be automatically submitted now.`,
              'Auto Submission Notice',
              ''
            ]
          },
          // Type: All assessment questions have been answered and candidate isi about to submit
          complete: () => {
            [payload.source, payload.message, payload.heading, payload.closeable] = [
              'submit',
              'Are you sure you are ready to submit?',
              'Test Submission Notice',
              true
            ]
          },
          // Type: All assessment questions have not been answered and candidate isi about to submit
          incomplete: () => {
            [payload.source, payload.message, payload.heading, payload.closeable] = [
              'submit',
              'You have not answered all questions, do wish to submit?',
              'Test Submission Notice',
              true
            ]
          }
        }        
      },

      fetchQuestions() {
        this.assessment.questions = require('../data/Questions.json')
      },

      startCountdown() {
        this.assessment.timer.status = 'start'
      },

      resetCountdown() {
        this.assessment.timer.status = 'reset'
      },
      // Update answer payload with currently selected answer
      setAnswers(payload) {
        this.assessment.answers = payload
      },
      
      confirmSubmission() {
        if (this.assessment.all_questions_answered) {
          this.setAssessmentNotice(this.confirmation_modal).complete()
        } else {
          this.setAssessmentNotice(this.confirmation_modal).incomplete()
        }
        this.showModal()
      },
      // Disable submit button once assessment is submitted
      disableSubmission() {
        this.assessment.submission_is_disabled = true
      },

      submitTest() {
        this.disableSubmission()
        this.resetCountdown() // Reset available time to 0
        // this.calculateScore(this.assessment.total_questions)
      },

      autoSubmit(payload) {
        this.setAssessmentNotice(payload).autoSubmit()
        this.showModal()

        const auto_submission_timeout = setTimeout(() => {
          this.submitTest()
          clearTimeout(auto_submission_timeout)
        }, 2000)
        const auto_close_modal_timeout = setTimeout(() => {
          this.closeModal()
          clearTimeout(auto_close_modal_timeout)
        }, 6000)
      },
      // Shuffles sidebar toggler and statuses
      toggleSideBar(payload) {
        this.sidebar = {...payload}
      }
    },

    mounted() {
      this.initializationNotice(this.confirmation_modal)
    },

    watch: {
      // Watch timer for when coutdown is off
      'assessment.timer.remaining': {
        handler(oldTimer, newTimer) {
          if (newTimer == '00:01') {
            this.autoSubmit(this.confirmation_modal)
          }
        }
      },
      // Watch confirmation modal object to know which action just got confirmed
      '$store.state.confirmation_modal.triggered': {
        handler(newAction) {
          // If assessment initialization
          if (newAction == 'init') {
            this.fetchQuestions()
            this.startCountdown()
            // this.test.started_at = moment().format()

          }
          // If assessment submission
          if (newAction == 'submit') {
            this.submitTest()
          }
        }
      }
    }

  }

</script>