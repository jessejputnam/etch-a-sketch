"use strict";
const consoleScreen = document.querySelector(".console__screen");

for (let i = 0; i < 4800; i++) {
  const div = document.createElement("div");
  div.classList.add("sketch__square");
  consoleScreen.appendChild(div);
}

let screenWidth = window.innerWidth;
console.log(screenWidth);

const etchSquares = document.querySelectorAll(".sketch__square");

etchSquares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("active");
  });
});
