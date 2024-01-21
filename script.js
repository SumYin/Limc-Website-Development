/* -- Timer -- */

// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("April 20, 2024 9:00:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours, seconds and minutes
    // Algorithm to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Algorithm to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Algorithm to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Algorithm to calc seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Create Time String
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // Set time on document
    document.querySelector('.countdown').innerText = time;
  }
}




/* -- SignUp -- */
document.getElementById('myForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form data
  const formData = new FormData(event.target);

  // Convert form data to JSON object
  const jsonObject = {};
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });

  // Make POST request to webhook URL
  const response = await fetch('http://127.0.0.1:5000/', {
    method: 'POST',
    body: JSON.stringify(jsonObject),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    // Select the button with the data-modal-target attribute
    let button = document.getElementById('successButton');
    
   // Simulate a click event
    button.click();

    // Webhook request successful
    console.log('Form data sent to webhook successfully.');

    // modal.toggle();
  } else {
    // Webhook request failed
    console.error('Failed to send form data to webhook.');
  }
});

/* --modal button thingy--*/ 

/* --dark mode-- */
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

/* -- Morph effect -- */

const blurDiv1 = document.getElementById('blur-div-1');
const section1 = document.getElementById('Welcome');

document.addEventListener('mousemove', (event) => {
  const section1Rect = section1.getBoundingClientRect();
  const x = event.clientX - section1Rect.left;
  const y = event.clientY - section1Rect.top;
  blurDiv1.style.transform = `translate(${x}px, ${y}px)`;
});

const blurDiv2 = document.getElementById('blur-div-2');
const section2 = document.getElementById('myForm');

document.addEventListener('mousemove', (event) => {
  const section2Rect = section2.getBoundingClientRect();
  const x = event.clientX - section2Rect.left;
  const y = event.clientY - section2Rect.top;
  blurDiv2.style.transform = `translate(${x}px, ${y}px)`;
});

const blurDiv3 = document.getElementById('blur-div-3');
const section3 = document.getElementById('map');

document.addEventListener('mousemove', (event) => {
  const section3Rect = section3.getBoundingClientRect();
  const x = event.clientX - section3Rect.left;
  const y = event.clientY - section3Rect.top;
  blurDiv3.style.transform = `translate(${x}px, ${y}px)`;
});

/* -- Line animation -- */

