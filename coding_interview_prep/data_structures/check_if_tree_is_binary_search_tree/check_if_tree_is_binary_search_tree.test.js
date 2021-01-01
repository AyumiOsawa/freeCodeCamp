const { Node, BinarySearchTree, isBinarySearchTree } = require('./index');
const exampleBinarySearchTree = new BinarySearchTree();

describe(`isBinarySearchTree should be able to check if its imput is an
          instance of the BinarySearchTree class.`,
          () => {
            test(`Your Binary Search Tree should return true when checked with
                  isBinarySearchTree().`,
                  () => {
                    // Create a regular BinarySearchTree with Node objects.
                    const node1 = new Node(8);
                    const node2 = new Node(3);
                    const node3 = new Node(10);

                    node1.left = node2;
                    node1.right = node3;
                    exampleBinarySearchTree.root = node1;

                    expect(exampleBinarySearchTree)
                    .toBeInstanceOf(BinarySearchTree);
                    expect(isBinarySearchTree(exampleBinarySearchTree))
                    .toBeTruthy();

                    // Create ad instance of BinarySearchTree that does NOT
                    // have any node objects.
                    const emptyBinarySearchTree = new BinarySearchTree();

                    expect(emptyBinarySearchTree)
                    .toBeInstanceOf(BinarySearchTree);
                    expect(isBinarySearchTree(emptyBinarySearchTree))
                    .toBeTruthy();

                    // Create the object that is NOT an instance of
                    // BinarySearchTree but HAS the Node objects.
                    const node4 = new Node(8);
                    const node5 = new Node(3);
                    const node6 = new Node(10);

                    node4.left = node5;
                    node4.right = node6;
                    const fakeBinarySearchTree = {root: node4};

                    expect(fakeBinarySearchTree)
                    .not
                    .toBeInstanceOf(BinarySearchTree);
                    expect(isBinarySearchTree(fakeBinarySearchTree))
                    .toBeFalsy();

                    // Create the object that is NOT an instance of
                    // BinarySearchTree and does NOT have Node objects.
                    const fakeBinarySearchTree2 = {root: null};
                    const fakeNode1 = {value: 8, left: null, right: null};
                    const fakeNode2 = {value: 3, left: null, right: null};
                    const fakeNode3 = {value: 10, left: null, right: null};

                    fakeNode1.left = fakeNode2;
                    fakeNode1.right = fakeNode3;
                    fakeBinarySearchTree2.root = fakeNode1;

                    expect(fakeBinarySearchTree2)
                    .not
                    .toBeInstanceOf(BinarySearchTree);
                    expect(isBinarySearchTree(fakeBinarySearchTree2))
                    .toBeFalsy();
                  });
          });
