const {
  displayTree,
  Node,
  BinarySearchTree
} = require('./index');
const exampleBST = new BinarySearchTree();
const emptyBST = new BinarySearchTree();


describe(`The BinarySearchTree class shouls be able to perform bredth first
          search`,
          () => {
            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(exampleBST)
                    .toBeInstanceOf(BinarySearchTree)
                    expect(exampleBST.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called levelOrder.`,
                  () => {
                    const spyLevelOrder = jest
                                       .spyOn(exampleBST,
                                              'levelOrder')
                                       .mockImplementation(() => {
                                               return 'LevelOrder';
                                             });
                    const spyLevelOrderResult = exampleBST.levelOrder();

                    expect(spyLevelOrder)
                    .toHaveBeenCalled();
                    expect(spyLevelOrderResult)
                    .toEqual('LevelOrder');
                    spyLevelOrder.mockRestore();
                  });


            test(`The binary search tree should have a method called reverseLevelOrder.`,
                  () => {
                    const spyRevLevelOrder = jest
                                       .spyOn(exampleBST,
                                              'reverseLevelOrder')
                                       .mockImplementation(() => {
                                               return 'RevLevelOrder';
                                             });
                    const spyRevLevelOrderResult = exampleBST.reverseLevelOrder();

                    expect(spyRevLevelOrder)
                    .toHaveBeenCalled();
                    expect(spyRevLevelOrderResult)
                    .toEqual('RevLevelOrder');
                    spyRevLevelOrder.mockRestore();
                  });

            test(`The levelOrder method should return an array of the tree node
                  values explored in level order.`,
                  () => {
                    const node1 = new Node(8);
                    const node2 = new Node(3);
                    const node3 = new Node(10);
                    const node4 = new Node(4);

                    node1.left = node2;
                    node1.right = node3;
                    node2.right = node4;
                    exampleBST.root = node1;

                    expect(exampleBST.levelOrder())
                    .toEqual([8, 3, 10, 4]);
                  });

            test(`The reverseLevelOrder method should return an array of the
                  tree node values explored in reverse level order.`,
                  () => {
                    expect(exampleBST.reverseLevelOrder())
                    .toEqual([8, 10, 3, 4]);
                  });

            test(`The levelOrder method should return null for an empty tree.`,
                  () => {
                    expect(emptyBST.levelOrder())
                    .toBeNull();
                  });

            test(`The reverseLevelOrder method should return null for an empty
                  tree.`,
                  () => {
                    expect(emptyBST.reverseLevelOrder())
                    .toBeNull();
                  });
          })
