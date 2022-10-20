# Workbook 5

# Class Cliff Notes

## JS

- variables

```js
let a = 1;
const b = "test";
```

- objects

```js
let person = {
    first: 'Ngoc'
    last: 'Black'
}
```

- arrays

```js
let numbers = [1,2,3,4]

let arrayOfObjects = [
    {
    first: 'Ngoc'
    last: 'Black'
    },
    {
    first: 'Tarik'
    last: 'Bedada'
    }
]
```

- conditional statements (if)

```js
isEndOfDay = true;
if (isEndOfDay) {
  //do this
}
```

- looping (for, forof, .forEach, .find, .map)

```js
imageFiles.forEach((imageFile) => {
  let option = new Option(imageFile.name, imageFile.name);
  guitarList.appendChild(option);
});
```

- know what type something is
- Refer to `What is it?` document

## Web Standard

- query an element or elements on a page

### element

```html
<div id="myDiv"></div>
```

```js
let myDiv = document.getElementById("myDiv");
//or
let myDiv = document.querySelector("#myDiv");
```

### elements

```html
<body>
  <div id="imagesDiv">
    <img src="./1.jpg" alt="1" />
    <img src="./2.jpg" alt="2" />
    <img src="./3.jpg" alt="3" />
  </div>
</body>
```

```js
//or
let images = document.querySelectorAll("img");
```

- associate a function with an event (event handling)

```html
<button id="addImageButton">Add Image</button>
```

```js
function addImage() {
  //...
}

window.onload = () => {
  const addImageButton = document.getElementById("addImageButton");
  addImageButton.onclick = addImage;
};
```

- set a property on an HTMLElement

```html
//before
<div id="myDiv" class="card"></div>
//after
<div id="myDiv" class="card rounded">This is a message</div>
```

```js
let myDiv = document.querySelector("#myDiv");
myDiv.innerText = "This is a message";
myDiv.classList.add("rounded");
```

- add, remove, replace elements on a page

```html
<body>
  <div id="imagesDiv">
    <img src="./1.jpg" alt="1" />
    <img src="./2.jpg" alt="2" />
    <img src="./3.jpg" alt="3" />
  </div>
</body>
```

```js
let imagesDiv = document.querySelector("#imagesDiv");
let images = document.querySelectorAll("img");

//remove one image (first)
imagesDiv.removeChild(images[0]);
//or
//remove all images
images.forEach((image) => imagesDiv.removeChild(image));
```
