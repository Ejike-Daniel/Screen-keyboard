let keys = document.querySelectorAll(".keys");
let spacekey = document.querySelector(".space-key");
let shift_left = document.querySelector(".shift-left");
let shift_right = document.querySelector(".shift-right");
let caps_lock_key = document.querySelector(".caps-lock-key");
let toggle_circle = document.querySelector(".toggle-circle");
let night_mode = document.querySelector(".night-mode");
let body = document.querySelector("body");
let output = document.querySelector(".output");
let change_color = document.querySelector(".change-light-color");
let input_colors = document.querySelector(".colors-input");
let keyboard_lights = document.querySelector(".keyboard-lights");
let keyboard_wrapp = document.querySelector(".keyboard-wrap");

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerText);
  keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
}

window.addEventListener("keydown", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.add("active");
    }

    if (e.code == "space") {
      spacekey.classList.add("active");
    }
    if (e.code == "shiftLeft") {
      shift_right.classList.remove("active");
    }

    if (e.code == "shiftRight") {
      shift_left.classList.remove("active");
    }

    if (e.code == "CapsLock") {
      caps_lock_key.classList.toggle("active");
    }
  }
});

window.addEventListener("keyup", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.remove("active");
      keys[i].classList.add("remove");
    }

    if (e.code == "space") {
      spacekey.classList.remove("active");
      spacekey.classList.add("remove");
    }

    if (e.code == "ShiftLeft") {
      shift_right.classList.remove("active");
      shift_right.classList.remove("remove");
    }
    if (e.code == "ShiftRight") {
      shift_left.classList.remove("active");
      shift_left.classList.remove("remove");
    }
    setTimeout(() => {
      keys[i].classList.remove("remove");
    }, 200);
  }
});

night_mode.addEventListener("click", function () {
  toggle_circle.classList.toggle("active");
  body.classList.toggle("active");
  night_mode.classList.toggle("active");
  keyboard_wrapp.classList.toggle("active");
  output.classList.toggle("active");
  change_color.classList.toggle("active");
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle("keys_night");
  }
});

input_colors.addEventListener("input", function () {
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = input_colors.value;
  }
  keyboard_wrapp.style.background = input_colors.value;
});

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", (e) => {
    let keyValue = e.target.innerHTML;
    if (
      keyValue == "backspace" ||
      keyValue == "Enter" ||
      keyValue == "tab" ||
      keyValue === "Caps Lock" ||
      keyValue === "Alt" ||
      keyValue === "Win" ||
      keyValue === "Ctrl" ||
      keyValue === "Shift" ||
      keyValue === "fn"
    ) {
      if (keyValue === "backspace") {
        const newResult = output.value.slice(0, -1);
        output.value = newResult;
      } else if (keyValue === "Enter") {
        output.value += "\n";
      }
    } else {
      output.value += e.target.innerHTML;
      console.log(e.target.innerHTML);
    }

    if (e.target.innerHTML === "") {
      output.value += " ";
    }

    if (keyValue === "tab") {
      output.value += "\t";
    }
  });
}


