// ADD A NEW ELEMENT TO A BINARY SEARCH TREE
//
// We'll start simple. We've defined the skeleton of a binary search tree
// structure here in addition to a function to create nodes for our tree.
// Observe that each node may have a left and right value. These will be
// assigned child subtrees if they exist. In our binary search tree, you will
// create a method to add new values to our binary search tree. The method
// should be called add and it should accept an integer value to add to the
// tree. Take care to maintain the invariant of a binary search tree: the value
// in each left child should be less than or equal to the parent value, and the
// value in each right child should be greater than or equal to the parent
// value. Here, let's make it so our tree cannot hold duplicate values. If we
// try to add a value that already exists, the method should return null.
// Otherwise, if the addition is successful, undefined should be returned.
//
// Hint: trees are naturally recursive data structures!
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/add-a-new-element-to-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

export function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

export function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
};
