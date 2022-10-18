let numbers = [300, 150, 25];

// let sum = numbers.reduce(function (currentTotal, arrayValue) {
//     return currentTotal + arrayValue;
//   }, 0);

let sum = numbers.reduce(
  (currentTotal, arrayValue) => currentTotal + arrayValue,
  0
);
// sum contains 475
console.log(sum);


// 1. Replace `function` on left of parameter list with `=>` on the right side of the parameter list.
// 2. If the function is only one line you can:
//     - omit the return
//     - omit the curly braces and semicolon