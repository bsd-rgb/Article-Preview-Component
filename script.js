"use strict";
console.log("Hello world");

const btnShare = document.querySelector(".img-share");
const imgWrapper = document.querySelector(".img-wrapper ");
const modal = document.querySelector(".share-modal");
const mobileQuery = window.matchMedia("(max-width: 43em)");

btnShare.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  imgWrapper.classList.toggle("svg-color");
  if (mobileQuery.matches) {
    imgWrapper.classList.toggle("active");
  } else {
    imgWrapper.classList.remove("active");
  }
});

//on click take away the position:absolute for the img-wrapper
