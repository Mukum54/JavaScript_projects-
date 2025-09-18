// Get references to DOM elements we will update
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');

const toggleFormatBtn = document.getElementById('toggle-format');
const toggleSecondsBtn = document.getElementById('toggle-seconds');

// State: whether we show 24-hour format, and whether seconds are shown
let is24Hour = false;       // default: 12-hour show AM/PM
let showSeconds = true;     // default: show seconds

// Format the number to always have at least two digits (e.g., "3" -> "03")
function twoDigits(num) {
  return String(num).padStart(2, '0');
}

// Main function that reads the current time and updates the page
function updateClock() {
  const now = new Date(); // get the current date/time from the browser

  let hours = now.getHours();       // 0 - 23
  const minutes = now.getMinutes(); // 0 - 59
  const seconds = now.getSeconds(); // 0 - 59

  // Prepare AM/PM text and convert to 12-hour if needed
  let ampmText = '';
  if (!is24Hour) {
    ampmText = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // convert 0 -> 12 for midnight, 13 -> 1 for 1pm etc.
  }

  // Write values into the DOM (formatting with twoDigits)
  hoursEl.textContent = twoDigits(hours);
  minutesEl.textContent = twoDigits(minutes);

  if (showSeconds) {
    secondsEl.textContent = twoDigits(seconds);
    secondsEl.style.display = ''; // ensure visible
  } else {
    // hide seconds visually but keep accessible
    secondsEl.style.display = 'none';
  }

  ampmEl.textContent = ampmText;

  // Format a readable date string
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

// Toggle between 12-hour and 24-hour formats when the button is clicked
toggleFormatBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
  toggleFormatBtn.textContent = is24Hour ? 'Switch to 12h' : 'Switch to 24h';
  toggleFormatBtn.setAttribute('aria-pressed', String(is24Hour));
  updateClock(); // immediate refresh so UI updates at once
});

// Toggle showing seconds
toggleSecondsBtn.addEventListener('click', () => {
  showSeconds = !showSeconds;
  toggleSecondsBtn.textContent = showSeconds ? 'Hide Seconds' : 'Show Seconds';
  toggleSecondsBtn.setAttribute('aria-pressed', String(showSeconds));
  updateClock();
});

// Start: update immediately, and then every second
updateClock();
setInterval(updateClock, 1000);
