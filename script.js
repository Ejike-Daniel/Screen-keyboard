const toggleContainer = document.querySelector(".toggle-container");
const body = document.body;
const toggleBtn = document.querySelector(".toggle-btn");
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const inputColor = document.querySelector(".color-picker");
const keyContainer = document.querySelector(".keys-container");
const capslock = document.querySelector(".caps");
const capsOnIndicator = document.querySelector(".caps-on-indicator");
const megaBtn = document.querySelector(".mega-btn");

// Theme mode
toggleContainer.addEventListener("click", () => {
  body.classList.toggle("dark");
  display.classList.toggle("dark");
  toggleContainer.classList.toggle("dark");
  toggleBtn.classList.toggle("dark");
  keyContainer.classList.toggle("dark");
  capsOnIndicator.classList.toggle("dark");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("dark");
  }
});

// append to display
function appendToDisplay(input) {
  display.textContent += input;
}

// capslock function
let capsLockOn = false;

capslock.addEventListener("click", () => {
  capsLockOn = !capsLockOn; // Toggle caps lock state
  capsOnIndicator.style.display = capsLockOn ? "block" : "none"; // Show or hide caps lock indicator
});

// click events
keyContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON" && !target.classList.contains("mega-btn")) {
    let value = target.textContent.toLowerCase();
    if (capsLockOn) {
      value = target.textContent.toUpperCase();
    }
    appendToDisplay(value);
  } else if (target.dataset.key === "backspace") {
    const newResult = display.textContent.slice(0, -1);
    display.textContent = newResult;
  } else if (target.dataset.key === "tab") {
    appendToDisplay("\t");
  } else if (target.dataset.key === "enter") {
    appendToDisplay("\n");
  } else if (target.dataset.key === "space") {
    appendToDisplay(" ");
  } else {
    appendToDisplay(value);
  }
});

// input color function
inputColor.addEventListener("input", () => {
  keyContainer.style.background = inputColor.value;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = inputColor.value;
  }
});
