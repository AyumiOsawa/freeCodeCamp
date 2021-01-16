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
  this.print = function() {
    return this.heap.slice(1);
  }

  this.remove = function() {
    if (this.heap.length === 1) {
      return;
    }

    const rearrangeNode = function(index, tree) {
      // 2 stop conditions:
      //     1) the index location's first child is out of range
      //     2) the target value is bigger than both child
      if (index * 2     >= tree.length ||
          index * 2 + 1 >= tree.length) {
        return tree;
      }
      const children = {
                          firstChild:  {
                                         value: tree[index * 2],
                                         index: index * 2
                                       },
                          secondChild: {
                                         value: tree[index * 2 + 1],
                                         index: index * 2 + 1
                                       }
                        };

      if ( last >=  children.firstChild.value &&
           last >= children.secondChild.value ) {
        return tree;
      }

      // swap the node to the bigger child
      const childToReplace =
          children.firstChild.value >= children.secondChild.value ?
          children.firstChild :
          children.secondChild;

      tree[index] = childToReplace.value;
      tree[childToReplace.index] = last;
      return rearrangeNode(childToReplace.index, tree);
    }

    const arr = [...this.heap];
    const nodeToRemove = arr[1];

    //  move the last element to the top(first position) of the array
    const last = arr.splice((this.heap.length-1), 1)[0];
    arr[1] = last;

    let startIndex = 1;
    const updatedHeap = rearrangeNode(startIndex, arr);
    this.heap = updatedHeap;

    return nodeToRemove;
  }
}

module.exports = MaxHeap;
