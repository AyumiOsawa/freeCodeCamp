// FIND THE MINIMUM AND MAXIMUM VALUE IN A BINARY SEARCH TREE
//
// In this challenge you will define two methods, findMin and findMax. These
// methods should return the minimum and maximum value held in the binary
// search tree (don't worry about adding values to the tree for now, we have
// added some in the background). If you get stuck, reflect on the invariant
// that must be true for binary search trees: each left subtree is less than or
// equal to its parent and each right subtree is greater than or equal to its
// parent. Let's also say that our tree can only store integer values. If the
// tree is empty, either method should return null.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/find-the-minimum-and-maximum-value-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function BinarySearchTree() {
  this.root = null;

  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  this.findMin = function() {
    if(this.root === null) {
      return null;
    };

    let node = this.root;
    let min;

    while(node !== null) {
      min = node.value;
      node = node.left;
    };
    return min;
  };

  this.findMax = function() {
    if(this.root === null) {
      return null;
    };

    let node = this.root;
    let max;

    while(node !== null) {
      max = node.value;
      node = node.right;
    };
    return max;
  };
};

module.exports = BinarySearchTree;
