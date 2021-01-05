const {
  displayTree,
  Node,
  BinarySearchTree
} = require('./index');
const exampleBST = new BinarySearchTree();
const oneNodeBST = new BinarySearchTree();


describe(`The BinarySearchTree class should be able to delet a leaf node from a
          tree.`,
          () => {
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
                    const node1 = new Node(8);
                    const node2 = new Node(3);
                    const node3 = new Node(10);
                    const node4 = new Node(4);

                    node1.left = node2;
                    node1.right = node3;
                    node2.right = node4;
                    exampleBST.root = node1;

                    expect(exampleBST.remove(2))
                    .toBeNull();
                  });

            test(`If the root node has no children, deleting it should set the
                  root to null.`,
                  () => {
                    const node5 = new Node(8);

                    oneNodeBST.root = node5;
                    oneNodeBST.remove(8);

                    expect(oneNodeBST.root)
                    .toBeNull();
                  });

            test(`The remove method should remove leaf nodes from the tree.`,
                  () => {
                    exampleBST.remove(10);

                    expect(exampleBST.root.right)
                    .toBeNull();

                    exampleBST.remove(4);

                    expect(exampleBST.root.left.right)
                    .toBeNull();
                  });
          });
