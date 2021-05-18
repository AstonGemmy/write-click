<template>  
  <RemainingTime :remaining="payload.remaining" />
</template>

<script>
  import RemainingTime from '../shared/RemainingTime'

  export default {
    name: 'Countdown Timer',
    props: ['payload'],
    components: { RemainingTime },
    methods: {
      countdownTimer(payload) {
        // Actions
        const actions = {
          splitTime: (payload) => {
            return {
              minutes: payload.remaining.split(/[:]+/)[0],
              seconds: payload.remaining.split(/[:]+/)[1]
            }
          }          
        }
        // Setters
        const mutations = {
          remainingTime: (payload, value) => {
            payload.remaining = value
          },
          statusMessage: (payload, message) => {
            payload.message = message
          },
          clearTimer: (payload) => {
            payload.remaining = '00:00'
          },
        }
        // Decrementers
        const decrementers = {
          seconds: (seconds) => {
            seconds = seconds - 1
            return seconds
          },
          minutes: (minutes) => {
            minutes = minutes - 1
            return minutes
          }
        }
        // Formatters
        const formatters = {
          time: (minutes, seconds) => {
            const formatted_minutes = formatters.minutes(minutes)
            const formatted_seconds = formatters.seconds(seconds)
            const formatted_time = `${formatted_minutes}:${formatted_seconds}`
            return formatted_time;
          },          
          seconds: (seconds) => {
            if (seconds < 10 && seconds >= 0) {seconds = "0" + seconds} // Append a zero to seconds
            if (seconds < 0) {seconds = "59"} // Reset seconds
            return seconds;
          },          
          minutes: (minutes) => {
            return minutes.toString().length < 2 ? '0' + minutes : minutes // Check if minutes is less than 10 and apped a 0 to it
          }
        }

        //  Destructure minutes and seconds from splitted time array
        let {minutes, seconds} = actions.splitTime(payload)
        // Initialize timeout variable
        let timeout;

        // Do not run if minutes and seconds is exhausted already on start.
        if (minutes == 0 && seconds == 0) {return;}
        // Decrement seconds by 1 and format it
        seconds = formatters.seconds(decrementers.seconds(seconds))
        // Set warning message if time is low.
        if (minutes < 3) {
          mutations.statusMessage(payload, 'Buckle up!')
        }
        // Decrement minutes if seconds is out
        if (seconds == 59) {
          minutes = decrementers.minutes(minutes) // Reduce minute everytime seconds counts down to 0
        }
        // If time is out
        if (minutes == 0 && seconds == 0) { // If both minutes and seconds are equal to 0, then countdown is done                
          mutations.clearTimer(payload) // Reset available time to 0
          clearTimeout(timeout);  // Clear timeout for counter
          mutations.statusMessage(payload, 'Time is up!') // Reset timer message
        } else {
          const formatted_time = formatters.time(minutes, parseInt(seconds))
          mutations.remainingTime(payload, formatted_time) // Set available time
          // Run timer again after a second
          timeout = setTimeout(() => {
            this.countdownTimer(payload)
          }, 1000);
        }              
      }
    },

    created() {
      this.countdownTimer(this.payload)
    },

    watch: {
    //     '$store.state.assessment.timer': {
    //         handler(oldTimer, newTimer) {
    //             if (newTimer == '00:01') {
    //                 this.autoSubmissionAlert()
    //             }
    //         }
    //     }
    }

  }

</script>