const {
  displayTree,
  Node,
  BinarySearchTree
} = require('./index');
const binarySearchTreeInstance = new BinarySearchTree();
const emptySearchTreeInstance = new BinarySearchTree();


describe('The BinarySearchTree should be able to be able to tracerse the tree in
          three different ways.',
          () => {
            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(binarySearchTreeInstance)
                    .toBeInstanceOf(BinarySearchTree)
                    expect(binarySearchTreeInstance.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called inorder.`,
                  () => {
                    const spyInorder = jest
                                       .spyOn(binarySearchTreeInstance,
                                              'inorder')
                                       .mockImplementation(() => {
                                               return 'Inorder';
                                             });
                    const spyInorderResult = binarySearchTreeInstance.inorder();

                    expect(spyInorder)
                    .toHaveBeenCalled();
                    expect(spyInorderResult)
                    .toEqual('Inorder');
                    spyInorder.mockRestore();
                  });

            test(`The binary search tree should have a method called preorder.`,
                  () => {
                    const spyPreorder = jest
                                        .spyOn(binarySearchTreeInstance,
                                              'preorder')
                                        .mockImplementation(() => {
                                               return 'Preorder';
                                             });
                    const spyPreorderResult =
                                       binarySearchTreeInstance.preorder();

                    expect(spyPreorder)
                    .toHaveBeenCalled();
                    expect(spyPreorderResult)
                    .toEqual('Preorder');
                    spyPreorder.mockRestore();
                  });

            test(`The binary search tree should have a method called postorder.`,
                  () => {
                    const spyPostorder = jest
                                         .spyOn(binarySearchTreeInstance,
                                              'postorder')
                                         .mockImplementation(() => {
                                               return 'Postorder';
                                             });
                    const spyPostorderResult =
                                       binarySearchTreeInstance.postorder();

                    expect(spyPostorder)
                    .toHaveBeenCalled();
                    expect(spyPostorderResult)
                    .toEqual('Postorder');
                    spyPostorder.mockRestore();
                  });

            test(`The inorder method should return an array of the node values
                  that result from an inorder traversal.`,
                  () => {
                    const node1 = new Node(8);
                    const node2 = new Node(3);
                    const node3 = new Node(10);
                    const node4 = new Node(4);

                    node1.left = node2;
                    node1.right = node3;
                    node2.right = node4;
                    binarySearchTreeInstance.root = node1;

                    expect(binarySearchTreeInstance.inorder())
                    .toEqual([3, 4, 8, 10]);
                  });

            test(`The preorder method should return an array of the node values
                  that result from a preorder traversal.`,
                  () => {
                    expect(binarySearchTreeInstance.preorder())
                    .toEqual([8, 3, 4, 10]);
                  });

            test(`The postorder method should return an array of the node
                  values that result from a postorder traversal.`,
                  () => {
                    expect(binarySearchTreeInstance.postorder())
                    .toEqual([4, 3, 10, 8]);
                  });

            test(`The inorder method should return null for an empty tree.`,
                  () => {
                    expect(emptySearchTreeInstance.preorder())
                    .toBeNull();
                  });

            test(`The preorder method should return null for an empty tree.`,
                  () => {
                    expect(emptySearchTreeInstance.postorder())
                    .toBeNull();
                  });

            test(`The postorder method should return null for an empty tree.`,
                  () => {
                    expect(emptySearchTreeInstance.preorder())
                    .toBeNull();
                  });
          });
