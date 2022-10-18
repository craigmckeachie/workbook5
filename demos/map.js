let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

// let kidsNames = [];

// for (let index = 0; index < kids.length; index++) {
//   const kid = kids[index];
//   kidsNames.push(`${kid.first} ${kid.last}`);
// }

// console.log(kidsNames);

function buildFullName(kid) {
  return `${kid.first} ${kid.last}`;
}

let kidsNames = kids.map(buildFullName);
console.log(kidsNames);


// function filterCourses(wholeCourse) {
//     return wholeCourse.Fee <= 50;
// }
// let  underFitty = courses.filter(filterCourses).map(wholeCourse => wholeCourse.Title);
// console.log(` These courses are $50 0r less: 
// ${underFitty}`);


