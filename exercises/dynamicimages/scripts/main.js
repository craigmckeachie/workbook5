"use strict";

let imageFiles = [
  { path: "./images/electric.jpg", name: "Electric" },
  { path: "./images/acoustic.jpg", name: "Acoustic" },
  { path: "./images/amplifier.jpg", name: "Amplifier" },
];

const guitarList = document.getElementById("guitarList");
const imagesDiv = document.querySelector("#imagesDiv");

function loadGuitarList() {
  imageFiles.forEach((imageFile) => {
    let option = new Option(imageFile.name, imageFile.name);
    guitarList.appendChild(option);
  });
}

function addImage() {
  const selectedValue = guitarList.value;

  let imageFile = imageFiles.find((f) => f.name === selectedValue);
  let img = document.createElement("img");
  img.src = imageFile.path;
  img.alt = imageFile.name;

  imagesDiv.appendChild(img);
}

function clearImages() {
  // imagesDiv.innerHTML = "";
  let imagesDiv = document.querySelector("#imagesDiv");
  let images = document.querySelectorAll("#imagesDiv img");
  images.forEach((image) => imagesDiv.removeChild(image));
}

window.onload = () => {
  loadGuitarList();

  const addImageButton = document.getElementById("addImageButton");
  addImageButton.onclick = addImage;

  const clearImagesButton = document.getElementById("clearImagesButton");
  clearImagesButton.onclick = clearImages;
};
