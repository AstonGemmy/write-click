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
      // Actions
      // Split time into array of minutes and seconds
      splitTime(payload) {
        return {
          minutes: payload.remaining.split(/[:]+/)[0],
          seconds: payload.remaining.split(/[:]+/)[1]
        }
      },
      countdown(payload) {
        //  Destructure minutes and seconds from splitted time array
        let {minutes, seconds} = this.splitTime(payload)
        // Initialize timeout variable
        let timeout;

        // Do not run if minutes and seconds is exhausted already on start.
        if (minutes == 0 && seconds == 0) {return;}
        // Decrement seconds by 1 and format it
        seconds = this.formatSeconds(this.decrementSeconds(seconds))
        // Set warning message if time is low.
        if (minutes < 3) {
          this.statusMessage(payload, 'Buckle up!')
        }
        // Decrement minutes if seconds is out
        if (seconds == 59) {
          minutes = this.decrementMinutes(minutes) // Reduce minute everytime seconds counts down to 0
        }
        // If time is out
        if (minutes == 0 && seconds == 0) { // If both minutes and seconds are equal to 0, then countdown is done                
          this.clearTimer(payload) // Reset available time to 0
          clearTimeout(timeout);  // Clear timeout for counter
          this.statusMessage(payload, 'Time is up!') // Reset timer message
        } else {
          const formatted_time = this.formatTime(minutes, parseInt(seconds))
          this.remainingTime(payload, formatted_time) // Set available time
          // Run timer again after a second
          timeout = setTimeout(() => {
            this.countdown(payload)
          }, 1000);
        }
      },
      // Setters
      remainingTime(payload, value) {
        payload.remaining = value
      },
      statusMessage(payload, message) {
        payload.message = message
      },
      clearTimer(payload) {
        payload.remaining = '00:00'
      },
      // Decrementers
      decrementSeconds(seconds) {
        seconds = seconds - 1
        return seconds
      },
      decrementMinutes(minutes) {
        minutes = minutes - 1
        return minutes
      },
      // Formatters
      formatTime(minutes, seconds) {
        const formatted_minutes = this.formatMinutes(minutes)
        const formatted_seconds = this.formatSeconds(seconds)
        const formatted_time = `${formatted_minutes}:${formatted_seconds}`
        return formatted_time;
      },          
      formatSeconds(seconds) {
        if (seconds < 10 && seconds >= 0) {seconds = "0" + seconds} // Append a zero to seconds
        if (seconds < 0) {seconds = "59"} // Reset seconds
        return seconds;
      },          
      formatMinutes(minutes) {
        return minutes.toString().length < 2 ? '0' + minutes : minutes // Check if minutes is less than 10 and apped a 0 to it
      }
    },

    watch: {
      'payload.status': {
        handler(status) {
          if (status == 'start') {
            this.countdown(this.payload)
          }
          if (status == 'reset') {
            this.clearTimer(this.payload)
          }
        }
      }
    }

  }

</script>