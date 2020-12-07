// FIND THE SYMMETRIC DIFFERENCE
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of
// elements which are in either of the two sets but not in both. For example,
// for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
//
// Symmetric difference is a binary operation, which means it operates on only
// two elements. So to evaluate an expression involving symmetric differences
// among three elements (A △ B △ C), you must complete one operation at a time.
// Thus, for sets A and B above, and C = {2, 3},
// A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
//
// Create a function that takes two or more arrays and returns an array of their
// symmetric difference. The returned array must contain only unique values
// (no duplicates).
//
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

const sym = (...args) => {
  // Look for unique values in the second arguemnt
  const _findUniqueInOneDirection = (arr1, arr2) => {
    let workingArr2 = [...arr2];

    arr1.forEach(itemInArr1 => {
      workingArr2 = workingArr2.filter(itemInArr2 => {
        return itemInArr2 !== itemInArr1;
      })
    })
    return workingArr2;
  };

  // Look for the unique values in both arrays
  const _compareTwoArrays = (arr1, arr2) => {
    let currentSymmetricDifference = [];
    currentSymmetricDifference = _findUniqueInOneDirection(arr1, arr2).concat(_findUniqueInOneDirection(arr2, arr1));
    return currentSymmetricDifference;
  };

  // Sort an array
  const sortArray = (arr) => {
    let workingArr = [...arr]; // create a clone
    const sortedArr = [];

    for (let arrIndex = 0;
         arrIndex < arr.length;
         arrIndex++) {
      let smallest = +Infinity;
      let smallestIndex = 0;

      for (let comparisonIndex = 0;
            comparisonIndex < workingArr.length;
            comparisonIndex++) {
            if(smallest > workingArr[comparisonIndex]) {
                smallest = workingArr[comparisonIndex];
                smallestIndex = comparisonIndex;
            };
      };
        sortedArr.push(smallest);
        workingArr.splice(smallestIndex, 1);
    };
    return sortedArr;
  };

  const _getUniqueValues = (arr) => {
    const result = arr.reduce((accumulator, currentValue) => {
      if (accumulator && !accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
      };
      return accumulator;
    }, []);

    return result;
  };

  const getArraysWithUniqueValues = (arrs) => {
    const uniqueArrs = [];
    for(let index = 0; index < arrs.length; index++) {
      uniqueArrs.push(_getUniqueValues(arrs[index]));
    };
    return uniqueArrs;
  };

  const applyComparisonToAllArrays = (arrs) => {
    let currentSymDiff = arrs[0];
    for (let index = 1; index < arrs.length; index++) {
      currentSymDiff = _compareTwoArrays(currentSymDiff, arrs[index])
    };
    return currentSymDiff;
  }
  const uniqueArgs = getArraysWithUniqueValues(args);
  const result = sortArray(applyComparisonToAllArrays(uniqueArgs));
  console.log('symmetricDiff', result);
  return result;
};

module.exports = sym;
