"use strict";

let imageFiles = [
  { path: "https://loremflickr.com/320/240/guitar?lock=1", name: "Electric" },
  { path: "https://loremflickr.com/320/240/guitar?lock=2", name: "Acoustic" },
  { path: "https://loremflickr.com/320/240/guitar?lock=3", name: "Amplifier" },
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

  //   const imagePath = null;
  //   imageFiles.forEach((imageFile) => {
  //     if (imageFile.name === selectedValue) {
  //       imagePath = imageFile.path;
  //       return;
  //     }
  //   });

  let imageFile = imageFiles.find((f) => f.name === selectedValue);
  console.log(imageFile.path);
}

window.onload = () => {
  loadGuitarList();

  const addImageButton = document.getElementById("addImageButton");
  addImageButton.onclick = addImage;
};
