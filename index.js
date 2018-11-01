let clockArray = new Array();
let currentRunningClock = -1;

clockObject = (bigTime, mode, animation, color, id) => {
  this.bigTime = bigTime;
  this.mode = mode;
  this.animation = animation;
  this.color = color;
  this.id = id;
  var percent;
  var mins;
  var secs;
  var countdownId;

  this.minutes = document.getElementById("minutes_" + id);
  this.seconds = document.getElementById("seconds_" + id);
  this.message = document.getElementById("message_" + id);
  this.start = false;
  this.longBreakVal = 600;
  this.shortBreakVal = 300;
  this.isStarted = false;
  this.messageId = "message_" + id;
};

let test = document.getElementById("test");

initElements = (id) => {
  clockArray[id] = new clockObject(1499, "normal", "fadeToBlack", "0D5B85", id);
};
counter = (clockId) => {
  clockArray[clockId].mins = Math.floor(clockArray[clockId].bigTime / 60);
  clockArray[clockId].secs = Math.floor(clockArray[clockId].bigTime - clockArray[clockId].mins * 60);

  clockArray[clockId].minutes.innerHTML = (clockArray[clockId].mins < 10 ? '0' : '') + clockArray[clockId].mins;
  clockArray[clockId].seconds.innerHTML = (clockArray[clockId].secs < 10 ? '0' : '') + clockArray[clockId].secs;

  if (clockArray[clockId].bigTime === 0){
    let returnVal = playSound();
    currentRunningClock = -1;
    clearInterval(clockArray[clockId].countdownId);
    if (returnVal = -1){
      alert("Work has been finished for the running clock")
    }
    hideClock(clockId);
  } else {
    clockArray[clockId].bigTime = clockArray[clockId].bigTime = -1;
  }
};
counterLongBreak = (longClockId) => {
  clockArray[longClockId].mins = Math.floor(clockArray[longClockId].longBreakVal / 60);
  clockArray[longClockId].secs = Math.floor(clockArray[longClockId].longBreakVal - clockArray[longClockId].mins * 60);

  clockArray[longClockId].mins.innerHTML = (clockArray[longClockId].mins < 10 ? '0' : '') + clockArray[longClockId].mins;
  clockArray[longClockId].secs.innerHTML = (clockArray[longClockId].secs < 10 ? '0' : '') + clockArray[longClockId].secs;

  if(clockArray[longClockId].longBreakVal === 0){
    clearInterval(clockArray[longClockId].countdownId);
    clockArray[longClockId].countdownId = setInterval("counter(currentRunningClock)",1000);
  } else {
    clockArray[longClockId].longBreakVal = clockArray[longClockId].longBreakVal = -1;
  }
};