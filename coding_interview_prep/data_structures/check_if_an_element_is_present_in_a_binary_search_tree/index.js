// CHECK IF AN ELEMENT IS PRESENT IN A BINARY SEARCH TREE
//
// In this challenge, we will create a utility for our tree. Write a method
// isPresent which takes an integer value as input and returns a boolean value
// for the presence or absence of that value in the binary search tree.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/check-if-an-element-is-present-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function BinarySearchTree() {
  this.root = null;
  
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Only change code below this line

  // Only change code above this line
}

module.exports = BinarySearchTree;
