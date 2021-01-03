// USE DEPTH FIRST SEARCH IN A BINARY SEARCH TREE
//
// Here we will create these three search methods on our binary search tree.
// Depth-first search is an inherently recursive operation which continues to
// explore further subtrees so long as child nodes are present. Once you
// understand this basic concept, you can simply rearrange the order in which
// you explore the nodes and subtrees to produce any of the three searches
// above. For example, in post-order search we would want to recurse all the
// way to a leaf node before we begin to return any of the nodes themselves,
// whereas in pre-order search we would want to return the nodes first, and
// then continue recursing down the tree. Define inorder, preorder, and
// postorder methods on our tree. Each of these methods should return an array
// of items which represent the tree traversal. Be sure to return the integer
// values at each node in the array, not the nodes themselves. Finally, return
// null if the tree is empty.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/use-depth-first-search-in-a-binary-search-tree

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
  displayTree,
  Node,
  BinarySearchTree
}
