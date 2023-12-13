// While Loops

// while (true) {
//      statement
// }

// let x = 0;
// while (x < 10) {
//   x++;
//   console.log(x);
// }

// // Do-while
// let count = 0;
// console.log("Let's Start counting...");

// do {
//      console.log("count is" + "" + count);
//      count++;
// }
// while (count < 8)
// console.log("Do while has ended")

// Date object

// const date = new Date();
// console.log(date.getDay());

for (let count = 0; count < 10; count++) {
  console.log("Current count: " + count);
}

console.log("Loop Stopped");

// For in Loop
const vehicle = {
  color: "Black",
  Model: "Ford",
  Millage: "50,000",
  Transmission: "automatically",
};

for (const proprty in vehicle) {
  console.log(proprty);
}
