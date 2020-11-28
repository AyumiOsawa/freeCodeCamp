// DROP IT   Given the array arr, iterate through and remove each element
// starting from the first element (the 0 index) until the function func returns
// true when the iterated element is passed through it. Then return the rest of
// the array once the condition is satisfied, otherwise, arr should be returned
// as an empty array.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

const dropElements = (arr, func) => {
  let dropped = arr;
  let index = 0;
  while(!func(arr[0]) && dropped.length !== 0) {
    dropped.shift();
  }
  return dropped;
};

module.exports = dropElements;
