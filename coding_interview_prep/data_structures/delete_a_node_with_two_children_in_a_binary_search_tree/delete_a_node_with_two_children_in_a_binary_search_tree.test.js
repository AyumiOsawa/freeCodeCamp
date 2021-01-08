const {
  displayTree,
  Node,
  BinarySearchTree
} = require('./index');
const exampleBST = new BinarySearchTree();
const oneNodeBST = new BinarySearchTree();
const threeNodesBST = new BinarySearchTree();

describe(`The BinarySearchTree class should be able to delete nodes with one
          child.`,
          () => {
            beforeEach(() => {
              const node1 = new Node(8);
              const node2 = new Node(3);
              const node3 = new Node(10);
              const node4 = new Node(4);
              const node5 = new Node(2);
              const node6 = new Node(5);
              const node7 = new Node(9);

              node1.left = node2;
              node1.right = node3;
              node2.right = node4;
              node2.left = node5;
              node4.right = node6;
              node3.left = node7;
              exampleBST.root = node1;

              const node8 = new Node(8);

              oneNodeBST.root = node8;
            });

            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(exampleBST)
                    .toBeInstanceOf(BinarySearchTree)
                    expect(exampleBST.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called remove.`,
                  () => {
                    const spyRemove = jest
                                      .spyOn(exampleBST,
                                            'remove')
                                      .mockImplementation(() => {
                                             return 'Remove';
                                           });
                    const spyRemoveResult = exampleBST.remove();

                    expect(spyRemove)
                    .toHaveBeenCalled();
                    expect(spyRemoveResult)
                    .toEqual('Remove');
                    spyRemove.mockRestore();
                  });

            test(`Trying to remove an element that does not exist should return
                  null.`,
                  () => {
                    expect(exampleBST.remove(2))
                    .toBeNull();
                  });

            test(`If the root node has no children, deleting it should set the
                  root to null.`,
                  () => {
                    oneNodeBST.remove(8);

                    expect(oneNodeBST.root)
                    .toBeNull();
                  });

            test(`The remove method should remove leaf nodes from the tree.`,
                  () => {
                    exampleBST.remove(9);

                    expect(exampleBST.root.right.left)
                    .toBeNull();
                  });

            test(`The remove method should remove nodes with one child.`,
                  () => {
                    exampleBST.remove(4);
                    expect(exampleBST.root.value)
                    .toEqual(8);
                    expect(exampleBST.root.left.value)
                    .toEqual(3);
                    expect(exampleBST.root.left.right.value)
                    .toEqual(5);
                    expect(exampleBST.root.right.value)
                    .toEqual(10);
                  });

            test(`Removing the root in a tree with two nodes should set the
                  second to be the root.`,
                  () => {
                    exampleBST.remove(8);

                    expect(exampleBST.root.value)
                    .toEqual(10);
                  });

            test(`The remove method should remove nodes with two children while
                  maintaining the binary search tree structure.`,
                  () => {
                    exampleBST.remove(3);

                    expect(exampleBST.root.left)
                    .toEqual(4)
                  });

            test(`The root should be removable on a tree of three nodes.`,
                  () => {
                    const node8 = new Node(8);
                    const node9 = new Node(9);
                    const node10 = new Node(10);

                    node9.left = node8;
                    node9.right = node10;
                    threeNodesBST.root = node9;
                    threeNodesBST.remove(9);

                    expect(threeNodesBST.root.value)
                    .toEqual(10);
                    expect(threeNodesBST.root.right)
                    .toBeNull();
                    expect(threeNodesBST.root.left.value)
                    .toEqual(8);
                  });
          });
