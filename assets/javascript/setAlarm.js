// THE SECOND ASSIGNMENT SETTING OF ALARM

function setAlarm(time) {
  if (isNaN(time)) {
    console.error("Error at line 58");
  }

  const theHour = new Date().getHours();
  const theMinutes = new Date().getMinutes();
  if (theMinutes == time) {
    console.log(`Wake up it's ${theHour}:${theMinutes}`);
    clearInterval(createInterval);
  }
}

const createInterval = setInterval(() => {
  setAlarm(32);
}, 1000);
