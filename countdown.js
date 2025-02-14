let ramadanDate = new Date("2025-03-01T00:00:00+05:00").getTime(); 
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateCountdown() {
  let now = new Date().getTime();
  let timeLeft = ramadanDate - now;
  if (timeLeft <= 0) {
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
    return;
  }
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

function displayHijriDate() {
  let hijriYear = 1446;
  document.getElementById("hijri-date").innerText = `Hijri Date: ${hijriYear} AH`;
}

function displayDayOfWeek() {
  let today = new Date();
  let dayOfWeek = daysOfWeek[today.getDay()];
  document.getElementById("day-of-week").innerText = `Today is: ${dayOfWeek}`;
}


setInterval(updateCountdown, 1000);
displayHijriDate();
displayDayOfWeek();
