const texts = [
  "Data Engineer",
  "Professional Spark / Scala Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const speed = 100;

function typeEffect() {
  const element = document.getElementById("typing-text");

  if (!element) return;

  if (!isDeleting && charIndex < texts[index].length) {
    currentText += texts[index].charAt(charIndex);
    charIndex++;
  } 
  else if (isDeleting && charIndex > 0) {
    currentText = currentText.slice(0, -1);
    charIndex--;
  } 
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % texts.length;
    }
    setTimeout(typeEffect, 800);
    return;
  }

  element.textContent = currentText + "|";
  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
