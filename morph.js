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
