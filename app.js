let milliSecond = document.getElementById("milliSecond");
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");
let timer;
startButton.addEventListener("click", () => {
  startButton.innerHTML = "Start";
  timer = setInterval(timerHandler, 10);
});
function timerHandler() {
  let milliSecondNumber = Number(milliSecond.innerHTML) + 1;
  milliSecond.innerHTML = milliSecondNumber;

  if (milliSecondNumber == 100) {
    let secondNumber = Number(second.innerHTML) + 1;
    if (secondNumber <= 9) {
      second.innerHTML = "0" + secondNumber;
    } else {
      second.innerHTML = secondNumber;
    }
    milliSecond.innerHTML = "00";

    if (secondNumber == 60) {
      let minuteNumber = Number(minute.innerHTML) + 1;
      if (minuteNumber <= 9) {
        minute.innerHTML = "0" + minuteNumber;
      } else {
        minute.innerHTML = minuteNumber;
      }
      second.innerHTML = "00";

      if (minuteNumber == 60) {
        let hourNumber = Number(hour.innerHTML);
        if (minuteNumber <= 9) {
          hour.innerHTML = "0" + hourNumber;
        } else {
          hour.innerHTML = hourNumber;
        }
        minute.innerHTML = "00";
      }
    }
  }
}
stopButton.addEventListener("click", () => {
  clearInterval(timer);
  startButton.innerHTML = "Resume";
});
resetButton.addEventListener("click", () => {
  startButton.innerHTML = "Start";
  clearInterval(timer);
  milliSecond.innerHTML = "00";
  second.innerHTML = "00";
  minute.innerHTML = "00";
  hour.innerHTML = "00";
});
