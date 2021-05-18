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
        
        <div class="relative h-full pb-16">
          <div class="relative invisible-scrollbar overflow-y-auto h-full">
            <div class="sticky top-0 z-10 mb-4 mx-1 bg-white rounded-xl overflow-hidden shadow">
              <div class="flex items-center justify-between py-4 px-8 bg-white shadow">
                <h1 class="text-xl font-bold text-blue-600">
                  {{ assessment.subject }}
                </h1>
                <AssessmentProgress :questions="assessment.questions" :answers="assessment.answers" :progress="assessment.progress" />
              </div>
              <Timer>
                <CountdownTimer :payload="assessment.timer" />
                <TimerMessage :message="assessment.timer.message" />
              </Timer>            
            </div>
            <!-- Question and Options Grid -->
            <AssessmentInterface @setAnswers="setAnswers" :assessment="assessment" />
          </div>
          <!-- Submit button -->
          <div v-if="assessment.questions" class="absolute bottom-0 w-full z-10 bg-white rounded-xl overflow-hidden shadow">
            <div class="flex items-center justify-between py-2 px-8 bg-white shadow">
              <button v-bind:disabled="assessment.submission_is_disabled" @click="setSubmissionConfirmationMessage" class="focus:outline-none focus:bg-gray-400 hover:bg-blue-800 ripple-node w-full md:w-auto text-xl bg-blue-600 px-6 pt-3 pb-2 rounded-xl font-bold uppercase text-blue-200">
                Submit
              </button>
            </div>                            
          </div>
        </div>
      </div>
      <!-- Right Sidebar -->
      <RightSideBar :sidebar="sidebar">
        <Instructions :instructions="assessment.instructions" />
      </RightSideBar >
    </div>
  </div>
</template>

<script>
  import Instructions from '../shared/Instructions.vue'
  import LeftSideBar from '../shared/LeftSideBar.vue'
  import AppTitle from '../shared/AppTitle'
  import CandidateAvatar from '../shared/CandidateAvatar'
  import CandidateData from '../shared/CandidateData'
  import ScoreLegend from '../shared/ScoreLegend'
  import LogoutButton from '../shared/LogoutButton'
  import RightSideBar from '../shared/RightSideBar.vue'
  import ToggleLeftSideBar from '../shared/ToggleLeftSideBar.vue'
  import ToggleRightSideBar from '../shared/ToggleRightSideBar.vue'
  import Timer from '../shared/Timer'
  import AssessmentProgress from '../shared/AssessmentProgress'
  import CountdownTimer from '../shared/CountdownTimer.vue'
  import TimerMessage from '../shared/TimerMessage'
  import AssessmentInterface from '../shared/AssessmentInterface.vue'

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
          questions: require('../Data/Questions.json'),
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
      AssessmentInterface
    },

    methods: {
      toggleSideBar(payload) {
        this.sidebar = {...payload}
      },

      setAnswers(payload) {
        this.assessment.answers = payload
      },

      keyToProperFormat(key) {
        if (key !== null) {
          key = key.split('_');
          key = key.map(word => { 
            return word[0].toUpperCase() + word.slice(1);
          }).join(" ");
          return key
        }
      },

      getProperFormat(value) {
        if (value !== null) {
          value = value.split(' ');
          value = value.map(word => { 
            return word[0].toUpperCase() + word.slice(1);
          }).join(" ");
          return value
        }
      },

      setSubmissionConfirmationMessage() {          
        this.confirmation_modal.heading = 'Test Submission Notice'
        this.confirmation_modal.source = 'submit'
        this.confirmation_modal.closeable = true
        if (this.assessment.all_questions_answered) {
            this.confirmation_modal.message = 'Are you sure you are ready to submit?'
        } else {
            this.confirmation_modal.message = 'You have not answered all questions, do wish to submit?'
        }
        this.showModal()
      },

      submitTest() {          
        this.assessment.submission_is_disabled = true
        clearTimeout(this.assessment.timer_loop);  // Clear timeout for counter
        this.assessment.timer = '00:00' // Reset available time to 0
        this.calculateScore(this.assessment.total_questions)
      },

      testInitialization() {          
        this.confirmation_modal.source = 'init'
        this.confirmation_modal.message = `You are about to begin your test and you have ${this.assessment.timer} minutes for this test.
        If you are ready, you can continue.`
        this.confirmation_modal.heading = 'Test Initialization Notice'
        this.confirmation_modal.action = 'Yes, I am ready'
        // this.showModal()
      },

      autoSubmissionAlert() {          
        this.confirmation_modal.source = 'submit'
        this.confirmation_modal.message = `Your time is up and test will be automatically submitted now.`
        this.confirmation_modal.heading = 'Auto Submission Notice'
        this.confirmation_modal.action = ''
        this.showModal()

        const auto_submission_timeout = setTimeout(() => {
          this.submitTest()
          clearTimeout(auto_submission_timeout)
        }, 2000)
        const auto_close_modal_timeout = setTimeout(() => {
          this.confirmation_modal.close = true
          clearTimeout(auto_close_modal_timeout)
        }, 6000)
      }
    },

    created() {
      // setTimeout(this.testInitialization, 1000)
    },

    watch: {
      // 'assessment.timer.remaining': {
      //   handler(oldTimer, newTimer) {
      //     if (newTimer == '00:01') {
      //       // this.autoSubmissionAlert()
      //     }
      //   }
      // },
    //     '$store.state.confirmation_modal.triggered': {
    //         handler(newAction, oldAction) {
    //             if (newAction == 'init') {
    //                 this.fetchQuestions()
    //                 this.updateTestTimer()
    //                 this.test.started_at = moment().format()

    //             }
    //             if (newAction == 'submit') {
    //                 this.submitTest()
    //             }
    //         }
    //     }
    }

  }

</script>