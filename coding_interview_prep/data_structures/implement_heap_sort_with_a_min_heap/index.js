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
  this.heap = [null];

  this.insert = (ele) => {
    let index = this.heap.length;
    const arr = [...this.heap];
    arr.push(ele);
    while (index >= 2 && ele < arr[Math.floor(index / 2)]) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = Math.floor(index / 2);
    }
    this.heap = arr;
  }

  this.remove = function() {
    if (this.heap.length <= 1) {
      return null;
    }
    const arr = [...this.heap];
    const nodeToRemove = arr[1];

    //  move the last element to the top(first position) of the array
    const movingNode = arr.splice((this.heap.length-1), 1)[0];
    arr[1] = movingNode;
    let movingNodeIndex = 1;

    while ( movingNodeIndex < arr.length           &&
            (movingNode > arr[movingNodeIndex * 2] ||
            movingNode > arr[movingNodeIndex * 2 + 1]) ) {
      const children = {
                    firstChild:  {
                                    value: arr[movingNodeIndex * 2],
                                    index: movingNodeIndex * 2
                                  },
                    secondChild: {
                                    value: arr[movingNodeIndex * 2 + 1],
                                    index: movingNodeIndex * 2 + 1
                                  }
                  };
      // get the smaller child to replace to
      let childToReplace
      if (children.firstChild.index < arr.length &&
          children.secondChild.index < arr.length) {
        childToReplace =
          children.firstChild.value <= children.secondChild.value ?
          children.firstChild :
          children.secondChild;
      } else if (children.firstChild.index >= arr.length) {
        childToReplace = children.secondChild;
      } else if (children.secondChild.index >= arr.length) {
        childToReplace = children.firstChild;
      } else {
        childToReplace = null;
      }

      arr[movingNodeIndex] = childToReplace.value;
      arr[childToReplace.index] = movingNode;
      movingNodeIndex = childToReplace.index;
    }

    this.heap = arr;
    return nodeToRemove;
  }

  this.sort = function() {
    let sortedArray = [];
    this.heap.forEach((item, index) => {
      if(index <= 0) { // null
        sortedArray.push(null);
      } else {
        const currentSmallest = this.remove();
        sortedArray.push(currentSmallest);
      }
    });

    this.heap = sortedArray;
    const returnArr = sortedArray.splice(1);
    return returnArr;
  }
}

module.exports = MinHeap;
