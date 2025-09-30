"use strict";

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
