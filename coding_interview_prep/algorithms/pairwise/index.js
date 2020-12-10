// PAIR WISE
//
// Given an array arr, find element pairs whose sum equal the second argument
// arg and return the sum of their indices.
//
// You may use multiple pairs that have the same numeric elements but different
// indices. Each pair should use the lowest possible available indices. Once an
// element has been used it cannot be reused to pair with another element. For
// instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0
// rather than the 1 at index 1, because 0+2 < 1+2.
//
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to
// 20 are [7, 13] and [9, 11]. We can then write out the array with their
// indices and values.
//
// -----------------------------
// | Index | 0 | 1 | 2 | 3 | 4 |
// |---------------------------|
// | Value | 7 | 9 | 11| 13| 15|
// -----------------------------
// Below we'll take their corresponding indices and add them.
//
//  7 + 13 = 20 → Indices 0 + 3 = 3
//  9 + 11 = 20 → Indices 1 + 2 = 3
//  3 + 3 = 6 → Return 6
//
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
//
const pairwise = (arr, arg) => {
  // create a table of all the valid combination
  const table = [];
  for (let i = 0; i < arr.length; i++) {
    table.push(Array(arr.length));
  };

  arr.forEach((firstElm, firstIndex, array) => {
    array.forEach((secondElm, secondIndex) => {
      if (firstElm + secondElm === arg) {
        table[firstIndex][secondIndex] = true;
      }
    });
  });

  // consider only the half of the table (under the diagonal line(i.e. where
  // rowIndex > colmnIndex).
  // find the set with the row indeces and column indeces and calculate
  // the sum.
  const set = [];
  table.forEach((row, rowIndex) => {
    for (let columnIndex = 0; columnIndex < arr.length; columnIndex++) {
      if (row[columnIndex] &&
        rowIndex > columnIndex &&
        !set.includes(columnIndex)) {
        set.push(columnIndex, rowIndex);
        break;
      };
    };
  });

  return set.length === 0 ? 0 : set.reduce((acc, currentVal) => {
    return acc += currentVal
  });
};

module.exports = pairwise;
