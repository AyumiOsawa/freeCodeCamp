// SUM ALL ODD FIBONACCI NUMBERS
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers


// SOLUTION2: WITHOUT MAKING AN ARRAY OF FIBONACCI NUMBERS
const sumFibs = (num) => {
  let currentFibNums = [1, 1];
  let accumulator = currentFibNums[0];

  while(currentFibNums[1] <= num) {
    if (currentFibNums[1] % 2 !== 0) {
      accumulator += currentFibNums[1];
    }
    currentFibNums = [
          currentFibNums[1],
          currentFibNums[0] + currentFibNums[1]
        ];
  }
  return accumulator;
}

// SOLUTION1:
//
// const sumFibs = (num) => {
//   const seed = 1;
//   const createFibonacci = (num) => {
//     let fibonacci = [];
//     let index = 0;
//     let currentVal = 1;
//     while (currentVal <= num) {
//       fibonacci.push(currentVal);
//       currentVal = fibonacci[index] + (fibonacci[index-1] || 0);
//       index += 1;
//     }
//     return fibonacci;
//   }
//
//   const sum = createFibonacci(num).reduce((accumulator, currentVal) => {
//     if(currentVal % 2 === 1) {
//       accumulator += currentVal
//     }
//     return accumulator;
//   })
//   return sum;
// }

module.exports = sumFibs;
