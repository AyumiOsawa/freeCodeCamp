// INVERT A BINRY TREE
//
// Here will we create a function to invert a binary tree. Given a binary tree,
// we want to produce a new tree that is equivalently the mirror image of this
// tree. Running an inorder traversal on an inverted tree will explore the
// nodes in reverse order when compared to the inorder traversal of the
// original tree. Write a method to do this called invert on our binary tree.
// Calling this method should invert the current tree structure. Ideally, we
// would like to do this in-place in linear time. That is, we only visit each
// node once and we modify the existing tree structure as we go, without using
// any additional memory. Good luck!
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/invert-a-binary-tree
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
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
  displayTree,
  Node,
  BinarySearchTree
};
