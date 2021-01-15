// INSERT AN ELEMENT INTO A MAX HEAP
//
// Instructions: Here we will create a max heap. Start by just creating an
// insert method which adds elements to our heap. During insertion, it is
// important to always maintain the heap property. For a max heap this means
// the root element should always have the greatest value in the tree and all
// parent nodes should be greater than their children. For an array
// implementation of a heap, this is typically accomplished in three steps:
//
// Add the new element to the end of the array.
// If the element is larger than its parent, switch them.
// Continue switching until the new element is either smaller than its parent
// or you reach the root of the tree.
// Finally, add a print method which returns an array of all the items that
// have been added to the heap.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/insert-an-element-into-a-max-heap

function MaxHeap() {
  this.root = [null];

  this.insert = function(newItem) {
    this.root.push(newItem);
    const newItemId = this.root.length - 1;
    if (newItemId <= 1) {
      return;
    }

    const moveToTheRightNode = function(tree, currentLocation = newItemId) {
      const motherId = Math.ceil((currentLocation - 1) / 2);
      const mother = tree[motherId];

      // 2 stop conditions:
      //     1) the mother node is 0 or less
      //     2) the mother node is bigger than newItem
      if (motherId <= 0 || mother >= newItem ) {
        return;
      }

      tree[motherId] = newItem;
      tree[currentLocation] = mother;
      moveToTheRightNode(tree, motherId);
    };

    moveToTheRightNode(this.root);
  }



  this.print = function() {
    return this.root;
  }
}

module.exports = MaxHeap;
