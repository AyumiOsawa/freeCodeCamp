const {
        BinarySearchTree,
        Node,
        displayTree
      } = require('index.js');
const binarySearchTreeInstance = new BinarySearchTree();

desctibe(`The BinarySearchTree should be able to return the maximum height and
          minimum height of a tree.`,
          () => {
            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(binarySearchTreeInstance)
                    .toBeInstanceOf(BinarySearchTree)
                    expect(binarySearchTreeInstance.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called
                  findMinHeight.`,
                  () => {
                    const spyFindMinHeight = jest
                                             .spyOn(binarySearchTreeInstance,
                                                    'findMinHeight')
                                             .mockImplementation(() => {
                                               return 'min height';
                                             });
                    const spyFindMinHeightResult =
                                      binarySearchTreeInstance.findMinHeight();

                    expect(spyFindMinHeight)
                    .toHaveBeenCalled();
                    expect(spyFindMinHeightResult)
                    .toEqual('min height');
                  });

            test(`The binary search tree should have a method called
                  findMaxHeight.`,
                  () => {
                    const spyFindMaxHeight = jest
                                             .spyOn(binarySearchTreeInstance,
                                                    'findMaxHeight')
                                             .mockImplementation(() => {
                                               return 'max height';
                                             });
                    const spyFindMaxHeightResult =
                                      binarySearchTreeInstance.findMaxHeight();

                    expect(spyFindMaxHeight)
                    .toHaveBeenCalled();
                    expect(spyFindMaxHeightResult)
                    .toEqual('max height');
                  });

            test(`The binary search tree should have a method called
                  isBalanced.`,
                  () => {
                    const spyIsBalanced = jest
                                             .spyOn(binarySearchTreeInstance,
                                                    'isBalanced')
                                             .mockImplementation(() => {
                                               return 'check balance';
                                             });
                    const spyIsBalancedResult =
                                      binarySearchTreeInstance.IsBalanced();

                    expect(spyIsBalanced)
                    .toHaveBeenCalled();
                    expect(spyIsBalancedResult)
                    .toEqual('check balance');
                  });

            test(`The findMinHeight method should return the minimum height of
                  the tree.`,
                  () => {
                    const node1 = new Node(8);
                    const node2 = new Node(3);
                    const node3 = new Node(10);
                    const node4 = new Node(4);

                    node1.left = node2;
                    node1.right = node3;
                    node2.right = node4;
                    binarySearchTreeInstance.root = node1;

                    expect(binarySearchTreeInstance.findMinHeight())
                    .toEqual(2);
                  });

            test(`The findMaxHeight method should return the maximum height of
                  the tree.`,
                  () => {
                    expect(binarySearchTreeInstance.findMaxHeight())
                    .toEqual(3);
                  });

            test(`An empty tree should return a height of -1.`,
                  () => {
                    const emptyBinarySearchTree = new BinarySearchTree();

                    expect(emptyBinarySearchTree.findMaxHeight())
                    .toEqual(-1);
                    expect(emptyBinarySearchTree.findMinHeight())
                    .toEqual(-1);
                  });

            test(`The isBalanced method should return false if the tree is an
                  unbalanced binary search tree.`,
                  () => {
                    const unbalancedBST = new BinarySearchTree();
                    const node5 = new Node(1);
                    const node6 = new Node(2);
                    const node7 = new Node(3);

                    node5.right = node6;
                    node6.right = node7;
                    unbalancedBST.root = node5;

                    expect(unbalancedBST.isBalanced())
                    .toBeFalsy();
                  });

            test(`The isBalanced method should return true if the tree is a
                  balanced binary search tree.`,
                  () => {
                    expect(binarySearchTreeInstance.isBalanced())
                    .toBeTruthy();
                  });
          });
