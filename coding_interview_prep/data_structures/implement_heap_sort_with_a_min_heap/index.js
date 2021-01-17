// IMPLEMENT HEAP SORT WITH A MIN HEAP
//
// Let's implement heap sort with a min heap. Feel free to adapt your max heap
// code here. Create an object MinHeap with insert, remove, and sort methods.
// The sort method should return an array of all the elements in the min heap
// sorted from smallest to largest.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/implement-heap-sort-with-a-min-heap
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line

  // Only change code above this line
}

module.exports = MinHeap;
