setInterval(show_time, 1000);
function show_time() {
  let d = new Date();
  let days = d.getDay();
  let hrs = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  if (hrs <= 12) {
    hrs = "0" + hrs;
  } else {
    hrs = hrs - 12;
  }
  document.querySelector(".day").textContent = days;
  document.querySelector(".hrs").textContent = hrs;
  document.querySelector(".min").textContent = min;
  document.querySelector(".Sec").textContent = sec;
}
