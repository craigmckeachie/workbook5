"use strict";

let imageFiles = [
  { path: "https://loremflickr.com/320/240/guitar?lock=1", name: "Electric" },
  { path: "https://loremflickr.com/320/240/guitar?lock=2", name: "Acoustic" },
  { path: "https://loremflickr.com/320/240/guitar?lock=3", name: "Amplifier" },
];

const guitarList = document.getElementById("guitarList");

function loadGuitarList() {
  imageFiles.forEach((imageFile) => {
    let option = new Option(imageFile.name, imageFile.path);
    guitarList.appendChild(option);
  });
}

window.onload = () => {
  loadGuitarList();
};
