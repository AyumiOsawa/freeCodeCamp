// IMPLEMENT MERGE SORT
//
// Another common intermediate sorting algorithm is merge sort. Like quick
// sort, merge sort also uses a divide-and-conquer, recursive methodology to
// sort an array. It takes advantage of the fact that it is relatively easy to
// sort two arrays as long as each is sorted in the first place. But we'll
// start with only one array as input, so how do we get to two sorted arrays
// from that? Well, we can recursively divide the original input in two until
// we reach the base case of an array with one item. A single-item array is
// naturally sorted, so then we can start combining. This combination will
// unwind the recursive calls that split the original array, eventually
// producing a final sorted array of all the elements. The steps of merge sort,
// then, are:
//
// 1) Recursively split the input array in half until a sub-array with only one
// element is produced.
//
// 2) Merge each sorted sub-array together to produce the final sorted array.
//
// Merge sort is an efficient sorting method, with time complexity of
// O(nlog(n)). This algorithm is popular because it is performant and
// relatively easy to implement.
//
// As an aside, this will be the last sorting algorithm we cover here. However,
// later in the section on tree data structures we will describe heap sort,
// another efficient sorting method that requires a binary heap in its
// implementation.
//
// Instructions: Write a function mergeSort which takes an array of integers as
// input and returns an array of these integers in sorted order from least to
// greatest. A good way to implement this is to write one function, for
// instance merge, which is responsible for merging two sorted arrays, and
// another function, for instance mergeSort, which is responsible for the
// recursion that produces single-item arrays to feed into merge. Good luck!
//
// Note:
// We are calling this function from behind the scenes; the test array we are
// using is commented out in the editor. Try logging array to see your sorting
// algorithm in action!
//
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-merge-sort

const mergeSort = (array) => {
  // divide input array into two until each becomes length 1/0
  // merge the two array into one and return it
  const divideAndMerge = (array) => {
    const middle = Math.floor(array.length / 2);
    const subArr1 = array.slice(0, middle);
    const subArr2 = array.slice(middle);

    if (subArr1.length <= 1 && subArr2.length <= 1) {
      return _merge(subArr1, subArr2);
    } else {
      const sub1Sorted = divideAndMerge(subArr1);
      const sub2Sorted = divideAndMerge(subArr2);
      return _merge(sub1Sorted, sub2Sorted);
    };
  };

  // merge two input arrays in the order from least to greatest
  const _merge = (array1, array2) => {
    if (array1.length === 0 || array2.length === 0) {
      return [...array1, ...array2];
    } else if (array1[0] <= array2[0]) {
      return [array1[0], ..._merge(array1.slice(1), array2)];
    } else {
      return [array2[0], ..._merge(array1, array2.slice(1))];
    }
  };

  return divideAndMerge(array);
};

module.exports = mergeSort;
