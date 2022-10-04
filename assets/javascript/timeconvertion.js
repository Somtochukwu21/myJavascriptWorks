// THE FIRST ASSIGNMENT TIME CONVERTANT
function convertBetweenTime(time, from, to) {
  time = Number(time);
  if (isNaN(time)) {
    console.error("Please enter a correct input");
  }

  let secondsValue = 0;

  if (from === "ms") {
    secondsValue = time / 1000;
  }

  if (from === "s") {
    secondsValue = time;
  }

  if (from === "m") {
    secondsValue = time * 60;
  }

  if (from === "hr") {
    secondsValue = time * 3600;
  }

  let toValue = 0;

  if (to === "ms") {
    toValue = secondsValue * 1000;
  }

  if (to === "s") {
    toValue = secondsValue;
  }

  if (to === "m") {
    toValue = secondsValue / 60;
  }

  if (to === "hr") {
    toValue = secondsValue / 3600;
  }

  return `${time} in ${from} is ${toValue} in ${to}`;
}

console.log(convertBetweenTime(1, "m", "s"));
