let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms gummy bears", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Snickers", price: 2.79 },
  { product: "Kit Kat", price: 1.79 },
  { product: "Skittles", price: 3.79 },
  { product: "Cow Tails", price: 1.67 },
];

//cheap products
// let cheaperProducts = products.filter((product) => product.price < 4.0);
// console.log(cheaperProducts);

let mmCandies1 = products.filter((product) => {
  if (product.product.includes("M&Ms")) {
    return true;
  }
  return false;
});

let mmCandies2 = products.filter((p) => p.product.includes("M&Ms"));
console.log(mmCandies1);
console.log(mmCandies2);

let swedishFishCandies = products.filter((p) =>
  p.product.includes("Swedish Fish")
);
console.log(swedishFishCandies.length != 0);

let swedishFishCandy = products.find((p) => p.product.includes("Swedish FishSticks"));
console.log(swedishFishCandy != null);
