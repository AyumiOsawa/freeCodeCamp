// DELETE A NODE WITH TWO CHILDREN IN A BINRAY SEARCH TREE
//
// Let's finish our remove method by handling the third case. We've provided
// some code again for the first two cases. Add some code now to handle target
// nodes with two children. Any edge cases to be aware of? What if the tree has
// only three nodes? Once you are finished this will complete our deletion
// operation for binary search trees. Nice job, this is a pretty hard problem!
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/delete-a-node-with-two-children-in-a-binary-search-tree

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
    if (target === null) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    // Only change code below this line
    else {
     // find the smallest value in the right subtree
     const subtree = target.right;
     let currentSmallest = new Node(+Infinity);
     let parentOfTheCurrentSmallest;
     const [
       smallestNode,
       parentOfTheSmallest
      ] = findTheMin(subtree, parentOfTheCurrentSmallest, currentSmallest);

     // replace the target node with the smallest value
     // 1) set the 2 subtrees of the target aside
     const targetRightSubtree = target.right;
     const targetLeftSubtree = target.left;

     // 2) set the 2 children of the smallest to the original children
     smallestNode.right = smallestNode !== targetRightSubtree ?
                          targetRightSubtree :
                          targetRightSubtree.right;
     smallestNode.left = targetLeftSubtree;

     // 3) replace the target with the smallest
     if (target === this.root) {
       this.root = smallestNode;
     } else if (parent.right.value === target.value) {
       parent.right = smallestNode;
     } else if (parent.left.value === target.value) {
       parent.left = smallestNode;
     };

     // 4) set the original position of the smallest value to null
     if (parentOfTheSmallest === null) {
       // the root of the subtree is the smallest
       smallestNode.right = null;
     } else {
       parentOfTheSmallest.left = null;
     };
   };
  };

  const findTheMin = function(tree, parent, currentSmallestNode) {
   if (tree === null) {
     return [currentSmallestNode, parent];
   } else if (tree.value < currentSmallestNode.value) {
     // the smallest node found at the root of the subtree
     parent = null;
     currentSmallestNode = tree;
     return findTheMin(tree.left, parent, currentSmallestNode);
   } else if (tree.left.value > currentSmallestNode.value) {
     return findTheMin(tree.left, parent, currentSmallestNode);
   } else if (tree.left.value < currentSmallestNode.value) {
     parent = tree;
     currentSmallestNode = tree.left;
     return findTheMin(tree.left, parent, currentSmallestNode);
   };
  };

};

module.exports = {
  displayTree,
  Node,
  BinarySearchTree
};
