"use strict";

let imageFiles = [
  { path: "https://loremflickr.com/320/240/guitar?lock=3", name: "Electric" },
  { path: "https://loremflickr.com/320/240/guitar?lock=1", name: "Acoustic" },
  { path: "https://loremflickr.com/320/240/guitar?lock=5", name: "Amplifier" },
];

const guitarList = document.getElementById("guitarList");

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

  const imagesDiv = document.querySelector("#imagesDiv");
  imagesDiv.appendChild(img);
}

window.onload = () => {
  loadGuitarList();

  const addImageButton = document.getElementById("addImageButton");
  addImageButton.onclick = addImage;
};
