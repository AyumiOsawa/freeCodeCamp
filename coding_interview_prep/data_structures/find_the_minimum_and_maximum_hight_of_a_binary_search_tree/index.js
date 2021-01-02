// FIND THE MINIMUM AND MAXIMUM HEIGHT OF A BINARY SEARCH TREE
//
// Write two methods for our binary tree: findMinHeight and findMaxHeight.
// These methods should return an integer value for the minimum and maximum
// height within a given binary tree, respectively. If the node is empty let's
// assign it a height of -1 (that's the base case). Finally, add a third method
// isBalanced which returns true or false depending on whether the tree is
// balanced or not. You can use the first two methods you just wrote to
// determine this.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/find-the-minimum-and-maximum-height-of-a-binary-search-tree
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  // Only change code above this line
}

module.exports = {
  BinarySearchTree,
  Node,
  displayTree
};
