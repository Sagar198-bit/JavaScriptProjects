// A simple Script for Clock

setInterval(function () {
  const time = new Date().toLocaleTimeString();
  document.getElementById("displayTime").innerHTML = time;
}, 1000);
