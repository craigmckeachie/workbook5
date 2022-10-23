"use strict";

let imageFiles = [
  { path: "./images/electric.jpg", name: "Electric" },
  { path: "./images/acoustic.jpg", name: "Acoustic" },
  { path: "./images/amplifier.jpg", name: "Amplifier" },
];

function loadImageList() {
  const imageList = document.getElementById("imageList");
  imageFiles.forEach((imageFile) => {
    let option = new Option(imageFile.name, imageFile.name);
    imageList.appendChild(option);
  });
}

function addImage() {
  const imageList = document.getElementById("imageList");
  const selectedImageName = imageList.value;

  let imageFile = imageFiles.find((f) => f.name === selectedImageName);
  let img = document.createElement("img");
  img.src = imageFile.path;
  img.alt = imageFile.name;

  imagesDiv.appendChild(img);
  imageList.value = "";
}

function clearImages() {
  let imagesDiv = document.querySelector("#imagesDiv");

  // imagesDiv.innerHTML = "";
  //OR
  let images = document.querySelectorAll("#imagesDiv img");
  images.forEach((image) => imagesDiv.removeChild(image));
}

window.onload = () => {
  loadImageList();

  const addImageButton = document.getElementById("addImageButton");
  addImageButton.onclick = addImage;

  const clearImagesButton = document.getElementById("clearImagesButton");
  clearImagesButton.onclick = clearImages;
};
