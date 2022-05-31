// Countdown timer for the next year

const numDaysLeft = document.querySelector(".list-item .days");
const numHoursLeft = document.querySelector(".list-item .hours");
const numMinutesLeft = document.querySelector(".list-item .minutes");
const numSecondsLeft = document.querySelector(".list-item .seconds");
const message = document.querySelector(".message");

let futureTime = new Date().getTime() + 1000 * 60 * 60 * 24 * 365; // next year
// let futureTime = new Date().getTime() + 1000 * 12; // 10 secs
let days, hours, minutes, seconds;

// Functions
function countDownTimer() {
  let currentTime = new Date().getTime();
  let secondsLeft = (futureTime - currentTime) / 1000; // future - now in seconds

  days = parseInt(secondsLeft / (24 * 60 * 60));
  secondsLeft = secondsLeft % (24 * 60 * 60);

  hours = parseInt(secondsLeft / (60 * 60));
  secondsLeft = secondsLeft % (60 * 60);

  minutes = parseInt(secondsLeft / 60);
  seconds = parseInt(secondsLeft % 60);

  // DOMs
  numDaysLeft.innerHTML = days;
  numHoursLeft.innerHTML = hours;
  numMinutesLeft.innerHTML = minutes;
  numSecondsLeft.innerHTML = seconds;

  if (seconds === 0) {
    stopTimer();
  }
}

// General
const myInterval = setInterval(countDownTimer, 1000);

function stopTimer() {
  clearInterval(myInterval);
  message.innerHTML = "The time is passed!";
}
