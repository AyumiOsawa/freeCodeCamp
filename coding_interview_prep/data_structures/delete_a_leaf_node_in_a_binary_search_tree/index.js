// DELETE A LEAF NODE IN A BINARAY SERACH TREE
//
// Create a method on our binary tree called remove. We'll build the logic for
// our deletion operation in here. First, you'll want to create a function
// within remove that finds the node we are trying to delete in the current
// tree. If the node is not present in the tree, remove should return null.
// Now, if the target node is a leaf node with no children, then the parent
// reference to it should be set to null. This effectively deletes the node
// from the tree. To do this, you will have to keep track of the parent of the
// node we are trying to delete as well. It will also be useful to create a way
// to track the number of children the target node has, as this will determine
// which case our deletion falls under. We will handle the second and third
// cases in the next challenges. Good luck!
//
// freecodecamp.org/learn/coding-interview-prep/data-structures/delete-a-leaf-node-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.remove = function(targetValue) {
    if (this.root === null) {
      console.log('root is emp')
      return null;
    };

    // function that finds the target node
    this.findAndDeleteLeaf = function(
                                        node,
                                        parentNode,
                                        targetValue
                                      ) {
      if (node === null) {
        return null;
      };

      if ( node.value === targetValue &&
           node.right === null &&
           node.left === null ) { // the target found

        if (parentNode === null) { // deleting the top node
          this.root = null;
        } else if (parentNode.left === node) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        };
        return true;
      } else {      // continute searching the target
        parentNode = node;
        node = node.value < targetValue ?
                node.right :
                node.left;
        return this.findAndDeleteLeaf(
                                        node,
                                        parentNode,
                                        targetValue
                                     );
      };
    };

    return this.findAndDeleteLeaf(
                                  /* node        =  */ this.root,
                                  /* parentNode  =  */ null,
                                  /* targetValue =  */ targetValue
                                 );

  };
}

module.exports = {
  displayTree,
  Node,
  BinarySearchTree
};
