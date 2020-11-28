// STEAMROLLER
// Flatten a nested array. You must account for varying levels of nesting.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

const steamrollArray = (arr) => {
  let flattened = [];
  const recursivelyFlatten = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i])) {
        flattened.push(arr[i]);
      } else {
        recursivelyFlatten(arr[i]);
      }
    }
  };
  recursivelyFlatten(arr);
  return flattened;
}

module.exports = steamrollArray;
