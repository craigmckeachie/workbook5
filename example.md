```js
let mountain = {
  name: "Mt. Ranier",
  description: "This is a great mountain",
  img: "rainiermtn.jpg",
};

function buildMountainCard(section, mountain) {
  let colDiv = document.createElement("div");
  colDiv.className = "col";

  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.className ="card-img-top"
  img.src = mountain.img;
  img.alt = mountain.name

 


  section.appendChild(colDiv);
  colDiv.appendChild(div);
  div.appendChild(img);



}
```

```html
<div id="section">
  <div class="col">
    <div class="card">Mt. Ranier</div>
  </div>
</div>
```

```html
<div id="section">
  <h3>Mountain Name</h3>
  <p>Moutain Descr........</p>
  <p></p>
</div>
```



```html
<div id="section">
  <div class="col">
    <div class="card">
      <img src="{mountain.img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{mountain.name}</h5>
        <p class="card-text">{mountain.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
```
