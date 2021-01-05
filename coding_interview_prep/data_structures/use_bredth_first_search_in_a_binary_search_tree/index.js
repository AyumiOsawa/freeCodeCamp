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

  this.levelOrder = function() {
    if (this.root === null) {
      return null;
    };
    const maxHeight = this.findMaxHeight();
    const shouldCheckLeftFirst = true; // Check child nodes from left to right
    let currentHeight = 0;
    let returnNodesArray = [];

    while(currentHeight <= maxHeight) {
      const nodesAtGivenDepth = findNodesAtGivenDepth(
                                                        this.root,
                                                        currentHeight,
                                                        shouldCheckLeftFirst
                                                      );
      returnNodesArray.push(...nodesAtGivenDepth);
      currentHeight++;
    }
    return returnNodesArray;
  };

  this.reverseLevelOrder = function() {
    if (this.root === null) {
      return null;
    };
    const maxHeight = this.findMaxHeight();
    const shouldCheckLeftFirst = false; // Check child nodes from right to left
    let currentHeight = 0;
    let returnNodesArray = []

    while(currentHeight <= maxHeight) {
      const nodesAtGivenDepth = findNodesAtGivenDepth(
                                                        this.root,
                                                        currentHeight,
                                                        shouldCheckLeftFirst
                                                      );
      returnNodesArray.push(...nodesAtGivenDepth);
      currentHeight++;
    }
    return returnNodesArray;
  };

  // Return tha array of nodes only on the targetDepth
  const findNodesAtGivenDepth = function(
                                          tree,
                                          targetDepth,
                                          shouldCheckLeftFirst
                                        ) {
    const nodesAtGivenDepth = [];
    let currentDepth = 1;

    const checkDepthAndAdd = function(
                                      tree,
                                      nodesAtGivenDepth,
                                      currentDepth,
                                      targetDepth
                                     ) {
      if (tree === null) {
        return;
      };
      if (currentDepth === targetDepth) {
        nodesAtGivenDepth.push(tree.value);
        return;
      };

      currentDepth++;
      const branchToCheckFirst = shouldCheckLeftFirst ?
                                    tree.left  :
                                    tree.right;
      const branchToCheckLast = shouldCheckLeftFirst ?
                                    tree.right :
                                    tree.left;

      checkDepthAndAdd( branchToCheckFirst,
                        nodesAtGivenDepth,
                        currentDepth,
                        targetDepth );

      checkDepthAndAdd( branchToCheckLast,
                        nodesAtGivenDepth,
                        currentDepth,
                        targetDepth );
      return;
    };

    checkDepthAndAdd(tree, nodesAtGivenDepth, currentDepth, targetDepth);
    return nodesAtGivenDepth;
  };

  // find out the maximum height of the tree
  const getAllHeights = function(tree) {
    let heights = [];
    let currentHeight = 0;
    const trackMinHeight = function(tree, currentHeight) {
      if(tree === null) {
        heights.push(currentHeight);
        return;
      };
      currentHeight += 1;
      trackMinHeight(tree.right, currentHeight);
      trackMinHeight(tree.left, currentHeight);
    };
    trackMinHeight(tree, currentHeight);
    return heights;
  };

  this.findMaxHeight = function() {
    if (this.root === null) {
      return -1;
    };
    const allHeights = getAllHeights(this.root);
    return Math.max(...allHeights);
  };
};

module.exports = {
  displayTree,
  Node,
  BinarySearchTree
};
