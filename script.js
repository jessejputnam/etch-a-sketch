"use strict";

// ########## Declare DOM Variables ##########
const consoleScreen = document.querySelector(".console__screen");
const baseKnobs = document.querySelectorAll(".base__knob");
const resOptions = document.querySelectorAll(".radio__selection");
const lowRes = document.getElementById("low");
const medRes = document.getElementById("med");
const hiRes = document.getElementById("hi");
const btnClear = document.getElementById("btn__clear");

// ########## Declare DRY variables ##########
const reset = function () {
  document.querySelectorAll(".sketch__square").forEach((square) => {
    square.classList.remove("active");
  });
};

const generateChosenResolution = function () {
  const div = document.createElement("div");
  div.classList.add("sketch__square");
  consoleScreen.appendChild(div);
};

// ########## Generate Board Resolution ##########
resOptions.forEach((selection) => {
  selection.addEventListener("click", () => {
    // Low Resolution (21 x 28)
    if (lowRes.checked) {
      // Change active resolution in CSS
      consoleScreen.classList.add("low__res");
      consoleScreen.classList.remove("med__res");
      consoleScreen.classList.add("hi__res");

      // Generate correct grid size
      for (let i = 0; i < 588; i++) {
        generateChosenResolution();
      }

      reset();
    }

    // Medium Resolution (36 x 48)
    if (medRes.checked) {
      consoleScreen.classList.remove("low__res");
      consoleScreen.classList.add("med__res");
      consoleScreen.classList.remove("hi__res");

      for (let i = 0; i < 1728; i++) {
        generateChosenResolution();
      }

      reset();
    }

    // High Resolution (60 x 80)
    if (hiRes.checked) {
      consoleScreen.classList.remove("low__res");
      consoleScreen.classList.remove("med__res");
      consoleScreen.classList.add("hi__res");

      for (let i = 0; i < 4800; i++) {
        generateChosenResolution();
      }

      reset();
    }

    // Actual etch functionality with hover
    document.querySelectorAll(".sketch__square").forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.classList.add("active");
      });
    });
  });
});

btnClear.addEventListener("click", () => {
  reset();
});
