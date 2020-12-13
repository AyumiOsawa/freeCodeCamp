// IMPLEEMENT INSERTION SORT
//
// The next sorting method we'll look at is insertion sort. This method works
// by building up a sorted array at the beginning of the list. It begins the
// sorted array with the first element. Then it inspects the next element and
// swaps it backwards into the sorted array until it is in sorted position. It
// continues iterating through the list and swapping new items backwards into
// the sorted portion until it reaches the end. This algorithm has quadratic
// time complexity in the average and worst cases.
//
// Instructions: Write a function insertionSort which takes an array of
// integers as input and returns an array of these integers in sorted order
// from least to greatest.
//
// Note:
// We are calling this function from behind the scenes; the test array we are
// using is commented out in the editor. Try logging array to see your sorting
// algorithm in action!
//
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

const insertionSort = (array) => {
  const workingArr = [...array];

  for (let itemToCompareIndex = 1;
       itemToCompareIndex < workingArr.length;
       itemToCompareIndex++ ) {
    for (let compareAgainstIndex = 0;
         compareAgainstIndex < itemToCompareIndex;
         compareAgainstIndex++) {
      if (workingArr[itemToCompareIndex] <
          workingArr[compareAgainstIndex]) {
          workingArr.splice(compareAgainstIndex, 0,workingArr[itemToCompareIndex]);
          workingArr.splice(itemToCompareIndex + 1, 1);
          break;
      };
    };
  };
  console.log(workingArr)
  return workingArr;
}

module.exports = insertionSort;
