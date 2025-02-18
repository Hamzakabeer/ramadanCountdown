// Ramadan countdown date
let ramadanDate = new Date("2025-03-01T00:00:00+05:00").getTime();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// First Sehri and Iftar timings
let firstSehriTime = new Date("2025-03-01T05:00:00+05:00");
let firstIftarTime = new Date("2025-03-01T18:45:00+05:00");

// Function to update Ramadan countdown
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

// Function to display Hijri date
function displayHijriDate() {
  let hijriYear = 1446;
  document.getElementById("hijri-date").innerText = `Hijri Date: ${hijriYear} AH`;
}

// Function to display the day of the week
function displayDayOfWeek() {
  let today = new Date();
  let dayOfWeek = daysOfWeek[today.getDay()];
  document.getElementById("day-of-week").innerText = `Today is: ${dayOfWeek}`;
}

// Function to update Sehri countdown
function updateSehriCountdown() {
  let now = new Date().getTime();
  let sehriTimeLeft = firstSehriTime.getTime() - now;

  if (sehriTimeLeft > 0) {
    let days = Math.floor(sehriTimeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((sehriTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((sehriTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((sehriTimeLeft % (1000 * 60)) / 1000);
    document.getElementById("sehr-time").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s left for Sehri`;
  } else {
    document.getElementById("sehr-time").innerText = "First Sehri time has passed";
  }
}

// Function to update Iftar countdown
function updateIftarCountdown() {
  let now = new Date().getTime();
  let iftarTimeLeft = firstIftarTime.getTime() - now;

  if (iftarTimeLeft > 0) {
    let days = Math.floor(iftarTimeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((iftarTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((iftarTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((iftarTimeLeft % (1000 * 60)) / 1000);
    document.getElementById("iftar-time").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s left for Iftar`;
  } else {
    document.getElementById("iftar-time").innerText = "First Iftar time has passed";
  }
}

// Function to display the date and day of the first Sehri
function displayFirstSehriInfo() {
  let firstSehriDate = firstSehriTime.toLocaleDateString("en-PK", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("first-sehri-info").innerText = `First Sehri: ${firstSehriDate}`;
}

// Function to continuously update Sehri and Iftar countdowns
function updateSehriIftarCountdown() {
  updateSehriCountdown();
  updateIftarCountdown();
}

// Start Sehri and Iftar countdown when the user hovers over the countdown section
document.getElementById("countdown").addEventListener("mouseover", function () {
  updateSehriIftarCountdown();
  setInterval(updateSehriIftarCountdown, 1000);
});

// Initialize the page
setInterval(updateCountdown, 1000); // Update Ramadan countdown every second
displayHijriDate();
displayDayOfWeek();
displayFirstSehriInfo();
