const ramadanDate = new Date("2025-03-01T00:00:00+05:00").getTime(); 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = ramadanDate - now;
  if (timeLeft <= 0) {
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
    return;
  }
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

function displayHijriDate() {
  const hijriYear = 1446;
  document.getElementById("hijri-date").innerText = `Hijri Date: ${hijriYear} AH`;
}

function displayDayOfWeek() {
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  document.getElementById("day-of-week").innerText = `Today is: ${dayOfWeek}`;
}

// Start the countdown and display the dates
setInterval(updateCountdown, 1000);
displayHijriDate();
displayDayOfWeek();
