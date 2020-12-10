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
// calculate the value of a conuterpart of a potential pair of each value and
// see if the array after the element includes the counterpart. if the
// counterpart is found, remove both from the array.
  let setIndex = [];
  const workingArr = [...arr];

  for (let index = 0; index < arr.length - 1; index++) {
    const checkValue = workingArr[index];
    if (Number.isNaN(checkValue)) {
      continue;
    };
    const counterpart = arg - checkValue;

    if (workingArr.includes(counterpart, index + 1) &&
        !setIndex.includes(workingArr.indexOf(counterpart, index + 1)) ) {
      setIndex.push(index, workingArr.indexOf(counterpart, index + 1));
      // remove the checked pair from workingArr without changing array length.
      workingArr[index] = NaN;
      workingArr[workingArr.indexOf(counterpart, index + 1)] = NaN;
    };
  };

  return setIndex.length === 0 ? 0 : setIndex.reduce((acc, currentVal) => {
    return acc += currentVal
  });

// // Check all the combinations of the first number and the second number, from
// // the smallest to the biggest.
// // Then stores the pairs of the values that meet all the 3 conditions:
// // 1) value1 + value2 = arg
// // 2) index of value1 < index of value2 (to remove the same pairs with different
// // order)
// // 3) value 2 is not included in the set (to ensure that the numbers in the
// // result are all unique)
//   const set = [];
//
//   for (let firstNumIndex = 0; firstNumIndex < arr.length; firstNumIndex++) {
//     for (let secondNumIndex = 0; secondNumIndex < arr.length; secondNumIndex++) {
//       if(arr[firstNumIndex] + arr[secondNumIndex] === arg &&
//         firstNumIndex > secondNumIndex &&
//         !set.includes(secondNumIndex)) {
//           set.push(secondNumIndex, firstNumIndex);
//           break;
//       };
//     };
//   };
  //
  // return set.length === 0 ? 0 : set.reduce((acc, currentVal) => {
  //   return acc += currentVal
  // });
};

module.exports = pairwise;
