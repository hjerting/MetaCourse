const timePlace = document.querySelector("#time");

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  let time = "";
  if (hours < 10) time += 0;
  time += hours + ":";
  if (minutes < 10) time += 0;
  time += minutes + ":";
  if (seconds < 10) time += "0";
  time += seconds;
  timePlace.innerHTML = time;
}

setInterval(setTime, 1000);
