"use strict";

// Write a script that assesss a student's total marks in all the the test taken. The student should have A+ grade when the sum marks are in the range 89 ... 100 inclusive, if the tet is "Final-test" the student will recive A+ grade and total marks must be greater than or equak to 90. if the student gets an A+ grade return tru otherwise return false.
// function calculateTotalMarks(testScores) {
//   let totalMarks = 0;
//   let hasFinalTest = false;

//   for (let i = 0; i < testScores.length; i++) {
//     const score = testScores[i];

//     if (Number(score)) {
//       totalMarks = totalMarks + score;
//     }

//     if (score === "Final-test") {
//       hasFinalTest = true;
//     }
//   }

//   if (totalMarks >= 90 || (hasFinalTest && totalMarks >= 89)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Example usage:
// const student1Scores = ["Final-test", 8, 2, 8, 5];
// const student2Scores = ["Final-test", 92, 88, 95];

// const student1Result = calculateTotalMarks(student1Scores);
// const student2Result = calculateTotalMarks(student2Scores);

// console.log("Student 1 A+ Grade:", student1Result);
// console.log("Student 2 A+ Grade:", student2Result);

// function calculateTotalMarks(totalMarks, isFinal) {
//   if (isFinal) {
//     return totalMarks >= 90;
//   } else {
//     return totalMarks >= 89 && totalMarks <= 100;
//   }
// }

// console.log(calculateTotalMarks(90, true))



