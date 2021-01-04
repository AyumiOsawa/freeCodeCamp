// USE BREDTH FIRST SEARCH IN A BINARY SEARCH TREE
//
// Let's create a breadth-first search method in our tree called levelOrder.
// This method should return an array containing the values of all the tree
// nodes, explored in a breadth-first manner. Be sure to return the values in
// the array, not the nodes themselves. A level should be traversed from left
// to right. Next, let's write a similar method called reverseLevelOrder which
// performs the same search but in the reverse direction (right to left) at
// each level.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/use-breadth-first-search-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
};

module.exports = {
  displayTree,
  Node,
  BinarySearchTree
};
