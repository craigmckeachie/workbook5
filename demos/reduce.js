//GOAL OF REDUCE
//to aggregate values (usually numbers) in an array
// [a,b,c,d]
// a + b + c + d = total

//NEW SCHOOL
//reduce example
let ticketPackage = [
  //array
  { ticketType: "Senior", price: 49.99, numTickets: 1 }, // arrayElement, type= object, represent= one ticket
  { ticketType: "Adult", price: 79.99, numTickets: 2 }, //arrayElement
  { ticketType: "Child", price: 29.99, numTickets: 3 }, //arrayElement
];

function getTotalCost(currentTotal, ticket) {
  return currentTotal + ticket.price * ticket.numTickets;
}

let sum = ticketPackage.reduce(getTotalCost, 0);
console.log(sum);

//OLD SCHOOL
//manual way of doing reduce
function getTicketPackageCost(ticketPackage) {
  let sum = 0;
  for (let index = 0; index < ticketPackage.length; index++) {
    const ticketGroup = ticketPackage[index];
    sum = sum + ticketGroup.price * ticketGroup.numTickets;
  }
  return sum;
}

let sumOfTickets = getTicketPackageCost(ticketPackage);
console.log(sumOfTickets);
