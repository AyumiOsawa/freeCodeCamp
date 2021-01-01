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
  const recursiveSearch = function(node, targetValue) {
    // 2 stop conditions
    //  1: if (node === null)
    //      value not found
    //  2: if(node.value === targetValue)
    //      value found
    if (node === null) {
      return false;
    } else if(targetValue === node.value) {
      return true;
    } else if (targetValue < node.value){
      node = node.left;
      return recursiveSearch(node, targetValue);
    } else {
      node = node.right;
      return recursiveSearch(node, targetValue);
    };
  };

  this.isPresent = function(targetValue) {
    if(this.root === null) {
      return false;
    };
    const result  = recursiveSearch(this.root, targetValue);
    return result;
  };
  // Only change code above this line
}

module.exports = BinarySearchTree;
