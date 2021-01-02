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
};

const flattenTree = function(tree, nodes) {
  if (tree === null) {
    return true;
  };
  if (typeof tree === 'undefined') {
    return;
  };

  nodes.push(tree);
  if (tree.left !== null) {
    flattenTree(tree.left, nodes);
  };
  if (tree.right !== null) {
    flattenTree(tree.right, nodes);
  };
  return false;
 };

function isBinarySearchTree(tree) {
  const isBST = tree instanceof BinarySearchTree;
  const nodes = [];
  const isImputEmpty = flattenTree(tree.root, nodes);
  const areAllNodeInstances = nodes.every(node => {
    return node instanceof Node;
  });

  return isImputEmpty ?
         isBST :
         isBST && areAllNodeInstances;
}

module.exports = {
  Node,
  BinarySearchTree,
  isBinarySearchTree,
  flattenTree
};
