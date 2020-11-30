// ARGUMENTS OPTIONAL
//
// Create a function that sums two arguments together. If only one argument is
// provided, then return a function that expects one argument and returns the
// sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2)
// should return a function. Calling this returned function with a single
// argument will then return the sum: var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

const addTogether = (...arg) => {
  if(arg.length === 2) {
    if(typeof arg[0] === 'number' && typeof arg[1] === 'number') {
      return arg[0] + arg[1];
    }
  } else if (arg.length === 1 && typeof arg[0]  === 'number') {
    return (input) => {
      if(typeof input === 'number'){
        return arg[0] + input;
      } else {
        return undefined;
      }
    };
  } else {
    return undefined;
  }
  return undefined;
}

module.exports = addTogether;
