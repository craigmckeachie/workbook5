"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// When does the PROG200 course start?
let searchCourseId = "PROG200";

// look for courseid
// and look for PROG200 value in it
function searchCourses(course) {
  return course.CourseId === searchCourseId;
}

// look through the courses
let course = courses.find(searchCourses);

// and look the start date in the course
console.log(`${searchCourseId} starts on ${course.StartDate}`);

console.log("________________________________");

function searchCourses(course) {
  return course.CourseId === "PROJ500";
}

let course1 = courses.find(searchCourses);
console.log(`${course1.CourseId} is ${course1.Title}`);

// What are the titles of the courses that cost $50 or less?
console.log("________________________________");

function searchCourses(course) {
  return course.Price <= 50;
}

let cheapCourses = courses.filter(searchCourses);
console.log(cheapCourses);



// What classes meet in "Classroom 1"?

console.log("________________________________");

function searchCourses(course) {
  return course.Location === "Classroom 1";
}

let matchingCourses = courses.filter(searchCourses);
console.log(matchingCourses);
