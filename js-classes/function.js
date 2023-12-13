// function mutilplyNumber(param1, param2) {
//   const result = param1 * param2;
//   return result;
// }

// const mutilply1 = mutilplyNumber(5, 5);
// console.log(mutilply1);

// // Function to calculate the sum of two numbers
// function sumTwoNumbers(param1, param2) {
//   const result = param1 + param2;
//   return result;
// }

// const add1 = sumTwoNumbers(5, 5);
// console.log(add1);

// // Rewrite it using arrow function
// const sumTwoNumbersArrow = (param1, param2) => param1 + param2;
// console.log(sumTwoNumbersArrow(2, 1));

// // With a block
// const calculatePercentageScore = (param1, param2) => {
//   const baseResult = param1 / param2;
//   const result = baseResult * 100;
//   return Math.round(result);
// };

// console.log(calculatePercentageScore(4, 10));

// // Write a fucntion that returns the mean of two or three numbers
// const meanNumbers = (param1, param2) => {
//   const meanResult = param1 + param2;
//   const finalResult = meanResult / 2;
//   return finalResult;
// };

// const meanNumber1 = meanNumbers(5, 5);
// console.log(meanNumber1);

// // Fuction Scope
// const parantFuc = () => {
//   const name = "Bassey";

//   function splitName() {
//     console.log(name.split(""));
//   }

//   setTimeout(splitName, 10000);
//   splitName();
// };

// parantFuc();

// const eatingGariTime = () =>{
//   const gariTime = 8;
//   return gariTime;
//   // console.log(gariTime);
// }

// console.log(eatingGariTime());

const myName = () => {
  const name = "khalid";
  function secondName() {
    console.log(name);
  }
  secondName();
  secondName();

  setTimeout(secondName, 10000);
  setTimeout(secondName, 15000);

  // secondName();
  // secondName();
  // secondName();
  // secondName();
};
myName();

function* numberGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Create a generator for numbers from 1 to 5
const myGenerator = numberGenerator(1, 5);

// Iterate over the generated numbers using a for...of loop
for (const number of myGenerator) {
  console.log(number);
}
