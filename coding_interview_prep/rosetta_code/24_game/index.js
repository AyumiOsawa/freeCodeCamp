// 24 GAME
//
// The 24 Game tests a person's mental arithmetic.
//
// The aim of the game is to arrange four numbers in a way that when evaluated,
// the result is 24
//
// Implement a function that takes a string of four digits as its argument,
// with each digit from 1 to 9 (inclusive) with repetitions allowed, and
// returns an arithmetic expression that evaluates to the number 24. If no such
// solution exists, return "no solution exists".
//
// Rules:
// - Only the following operators/functions are allowed: multiplication,
//   division, addition, subtraction.
// - Division should use floating point or rational arithmetic, etc, to
//   preserve remainders.
// - Forming multiple digit numbers from the supplied digits is disallowed. (So
//   an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
// - The order of the digits when given does not have to be preserved.
//
// Example input;	Example output
// solve24("4878");	(7-8/8)*4
// solve24("1234");	3*1*4*2
// solve24("6789");	(6*8)/(9-7)
// solve24("1127");	(1+7)*(2+1)
//
// https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/24-game

function solve24 (numStr) {


  const peremutateNumbers = (inputArr) => {
    let workingArr = [];
    // while (inputArr.length > 0) {
    //   workingArr
    // }

  };




  return true;
}

// Take one working array and possible numbers to add, and add each one of the
// numbers to the working array and return
let allArrays = [];
const addOneNumber = function(remainingNum, arrayToAddTo = []) {
  if (remainingNum.length === 0) {
    allArrays.push(arrayToAddTo);
    return;
  }
  let updatedArrays = [];
  for (let i = 0; i < remainingNum.length; i++) {
    let added = [...arrayToAddTo];
    added.push(remainingNum[i]);
    let updatedRemainings = [...remainingNum];
    updatedRemainings.splice(i, 1);
    let newArr = {
                    remaining: updatedRemainings,
                    array: added
                };
    updatedArrays.push(newArr);
  }

  return updatedArrays.forEach(arrObj => {
    return addOneNumber(arrObj.remaining, arrObj.array);
  });
};

addOneNumber([1, 2, 3, 4]);
console.log('result:', allArrays.length);

// module.exports = solve24;
//
//
// memo:
// - use 3 operators to apply to 4 positive numbers
//
// - look up backtracking
// - write a function that permutate the 4 input numbers.
// - write a function that permutate binary tree for 4 leaf nodes.
// - write a function that calculate all the possible combination of oprands on one fixed order of numbers.
// - write a function that generate an answer.
