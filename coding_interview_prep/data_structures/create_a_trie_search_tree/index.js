// CREATE A TRIE SEARCH TREE
//
// Let's create a trie to store words. It will accept words through an add
// method and store these in a trie data structure. It will also allow us to
// query if a given string is a word with an isWord method, and retrieve all
// the words entered into the trie with a print method. isWord should return a
// boolean value and print should return an array of all these words as string
// values. In order for us to verify that this data structure is implemented
// correctly, we've provided a Node structure for each node in the tree. Each
// node will be an object with a keys property which is a JavaScript Map
// object. This will hold the individual letters that are valid keys of each
// node. We've also created an end property on the nodes that can be set to
// true if the node represents the termination of a word.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-trie-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line

  // Only change code above this line
};

module.exports = {
  displayTree,
  Node,
  Trie
};
