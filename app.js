let start = document.getElementById("start");
let pause = document.getElementById("pause");
let innerTimer = document.getElementById("input-timer");
let log = console.log;
let timer
let remaining
let timerVal = innerTimer.value;
function countDown() {}
function stopTurn() {}

start.addEventListener("click", async () => {
  timerVal = innerTimer.value;
  let orignalTime = innerTimer.value;
  timer = setInterval(() => {
    timerVal--;
    console.log(timerVal);
    if (timerVal === 0) {
      clearInterval(timer);
    }
    innerTimer.value = timerVal + "s";
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    innerTimer.value = orignalTime;
  }, orignalTime * 1000);
});
pause.addEventListener('click', ()=>{
       clearInterval(timer)     
})
