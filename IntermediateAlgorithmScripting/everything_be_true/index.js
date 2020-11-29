// EVERTHING BE TRUE
// Check if the predicate (second argument) is truthy on all elements of a
// collection (first argument).  In other words, you are given an array
// collection of objects. The predicate pre will be an object property and you
// need to return true if its value is truthy. Otherwise, return false.  In
// JavaScript, truthy values are values that translate to true when evaluated in
// a Boolean context.  Remember, you can access object properties through either
// dot notation or [] notation.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

const truthCheck = (collection, pre) => {
  const isTruthy = (object, pre) => {
    if(object[pre]) {
      return true;
    } else {
      return false;
    }
  };

  const result = collection.every(object => isTruthy(object, pre))
  return result;
}

module.exports = truthCheck;
