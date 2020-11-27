// SMALLST COMMON MULTIPLE Find the smallest common multiple of the provided
// parameters that can be evenly divided by both, as well as by all sequential
// numbers in the range between these parameters. // The range will be an array
// of two numbers that will not necessarily be in numerical order. // For
// example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here
// would be 6.

const smallestCommons = (arr) => {
  const biggest = Math.max(...arr);
  const smallest = Math.min(...arr);
  let currentMultiple = biggest;
  let found = false;

  const createArray = (smallest, biggest) => {
    let current = smallest;
    let arr = [];
    while(current <= biggest) {
      arr.push(current);
      current += 1;
    }
    return arr;
  }

  const array = createArray(smallest, biggest);

  while(!found) {
    for(let i = 0; i < array.length; i++) {
      console.log('currentMultiple: ', currentMultiple)
      console.log('check: ', array[i])
      if (currentMultiple % array[i] === 0) {
        console.log('devidable')
        found = true;
      } else {
        console.log('not devidable')
        found = false;
        break;
      }
    };

    if(!found) {
      currentMultiple += 1;
    }
  };
  return currentMultiple;
};

module.exports = smallestCommons;
