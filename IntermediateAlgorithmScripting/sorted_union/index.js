// SORTED UNION
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

const uniteUnique = (...arr) => {
  let unioned = arr[0];
  // going through all input arrays
  for(let i = 1; i < arr.length; i++) {
    // going through each value in an array
    for(let k = 0; k < arr[i].length; k++) {
      if(unioned.includes(arr[i][k])) {
        continue;
      } else {
        unioned.push(arr[i][k]);
      }
    }
  }
  return unioned;
}

module.exports = uniteUnique;
