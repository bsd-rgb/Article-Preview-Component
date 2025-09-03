"use strict";
console.log("Hello world");

const btnShare = document.querySelector(".img-share");
const imgWrapper = document.querySelector(".img-wrapper ");
const modal = document.querySelector(".share-modal");

btnShare.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  imgWrapper.classList.toggle("svg-color");
});
