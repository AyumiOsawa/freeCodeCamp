// REMOVE AN ELEMENT FROM A MAX HEAP
//
// Instructions: Add a method to our max heap called remove. This method should
// return the greatest value that has been added to our max heap and remove it
// from the heap. It should also reorder the heap so the heap property is
// maintained. After removing an element, the next greatest element remaining
// in the heap should become the root.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-an-element-from-a-max-heap

var MaxHeap = function() {
  this.heap = [null];
  this.insert = (ele) => {
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(ele);
    while (ele > arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = arr[Math.floor(index / 2)];
    }
    this.heap = arr;
  }
  this.print = () => {
    return this.heap.slice(1);
  }
  // Only change code below this line

  // Only change code above this line
}

module.exports = MaxHeap;
