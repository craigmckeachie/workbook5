window.onload = function () {
  const button = document.querySelector("button");
  button.onclick = changeImage;
  button.className = "highlight";
  button.classList.add("highlight");
};

function changeImage() {
  const img = document.querySelector("#dogImage");
  //   const img = { src: "", alt: "", width: "", alt: "" };
  img.src = "./images/alvan-nee-8g0D8ZfFXyA-unsplash.jpg";
  img.alt = "This is a photo of a really cute corgi!";

  img.className = "rounded";
}
