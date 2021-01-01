// CHECK IF A TREE IS BINARY SEARCH TREE
//
// In this challenge, you will create a utility for your tree. Write a
// JavaScript method isBinarySearchTree which takes a tree as an input and
// returns a boolean value for whether the tree is a binary search tree or not.
// Use recursion whenever possible.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/check-if-tree-is-binary-search-tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line

  // Only change code above this line
}

module.exports = {
  Node,
  BinarySearchTree,
  isBinarySearchTree
};
