<!-- This is almost a timer... -->

<script>
    let currentTime = 15 * 60; // Set timer in seconds. Starts at 15 minutes

    // Time formatting functions
    const secondsToMinutes = (seconds) => Math.floor(seconds / 60);

    function formatTime(timeInSeconds) {
        const minutes = secondsToMinutes(timeInSeconds)
        const remainingSeconds = timeInSeconds % 60
        return `${timeInSeconds}`
    }

    // Function to start the timer
    function startTimer(){
    const interval = setInterval(() => {
      if (currentTime === 0) {
        completeTimer();
      }
      currentTime -= 1;
    }, 1000);
    }
</script>

<h3>{formatTime(currentTime)}</h3>

<button on:click={startTimer}>Start Timer</button>

