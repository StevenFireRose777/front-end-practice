let timeRunning = false;
let intervalID = null;
let focusTime = 25; // mins
let timeLeft = focusTime * 60; // total seconds

function updateDisplay(timeLeft){
// displays the remaining time left
const timerElement = document.getElementById("Timer");
const mins = Math.floor(timeLeft / 60); // remaining mins
const secs = timeLeft % 60; // remaining seconds
timerElement.textContent = `${mins}:${secs.toString().padStart(2, "0")}`; // seconds part is where secs is a number so we need to make it a string and make sure that it is 2 chars long with padStart(2, "0")
}

function timeCountDown(){

  // clear any existing interval to avoid duplicates
  clearInterval(intervalID);

  intervalID = setInterval(() => {

    if(timeRunning){

      timeLeft--;
      updateDisplay(timeLeft);

      if(timeLeft <= 0){
        clearInterval(intervalID);
        timeRunning = false;
        alert("It's over. Back to doom scrolling!");
      }
    }
  }, 1000); // will run every second

}

function setTime() {
  // If timer is at zero (first start or after finishing), reset to focusTime
  if (timeLeft <= 0) {
    timeLeft = focusTime * 60;
  }
  updateDisplay(timeLeft);

  if(!timeRunning){ // Allows timer to start whenever (even if paused)
    timeRunning = true;
    timeCountDown();
  }
}

function pauseTimer(){
  // stop the countdown but keep the current timeLeft
  timeRunning = false;
  clearInterval(intervalID);
}

// show initial time when the script loads
updateDisplay(timeLeft);





/*
1. Get amount of time to focus, (25 is set for now)
2. If the user clicks on the start button, timeRunning: false --> True
3. If user DOESN'T click on the start button, timeRunning false --> false
4. Once the time is running, decrement each second
5. If we decrement 60 seconds, decrement the focusTime by 1
*/
