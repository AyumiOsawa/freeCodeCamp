// DELETE A NODE WITH ONE CHILD IN A BINARY SEARCH TREE
//
// We've provided some code in our remove method that accomplishes the tasks
// from the last challenge. We find the target to delete and its parent and
// define the number of children the target node has. Let's add the next case
// here for target nodes with only one child. Here, we'll have to determine if
// the single child is a left or right branch in the tree and then set the
// correct reference in the parent to point to this node. In addition, let's
// account for the case where the target is the root node (this means the
// parent node will be null). Feel free to replace all the starter code with
// your own as long as it passes the tests.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/delete-a-node-with-one-child-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        target = null;
        return;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        target = null;
        return;
      }
    }.bind(this)());
    console.log('found tg',target + ' for input ' + value)
    if (target === null) {
      return null;
    };
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);

    if (children === 0) {  // Case 1: Target has no children
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    } else {  // Case 2: Target has one child
      const childLeft = target.left;
      const childRight = target.right;
      console.log('tg l', childLeft);
      console.log('tg r', childRight);

      if (target === this.root) {
        console.log('tg in root');
        this.root = childRight === null ?
                    childLeft :
                    childRight;
      } else {
        if (parent.left == target) {
          parent.left = childLeft === null ?
                        childRight :
                        childLeft;
        } else {
          parent.right = childLeft === null ?
                        childRight :
                        childLeft;
        };
      };
    };
  };
};

module.exports = {
  displayTree,
  Node,
  BinarySearchTree
};
