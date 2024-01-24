// Select all blurDivs
const blurDivs = document.querySelectorAll('[id^="blur-div-"]');

blurDivs.forEach((blurDiv) => {
  const section = blurDiv.parentElement;

  if (!section) {
    console.error(`Parent element not found for ${blurDiv.id}`);
    return;
  }

  document.addEventListener('mousemove', (event) => {
    const sectionRect = section.getBoundingClientRect();
    const x = event.clientX - sectionRect.left;
    const y = event.clientY - sectionRect.top;
    blurDiv.style.transform = `translate(${x}px, ${y}px)`;
  });
});