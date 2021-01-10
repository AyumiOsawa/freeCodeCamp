const {
  displayTree,
  Node,
  BinarySearchTree
} = require('./index');
const exampleBST = new BinarySearchTree();
const emptyBST = new BinarySearchTree();


describe(`The BinarySearchTree class should be able to delete nodes with two
          children.`,
          () => {
            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(emptyBST)
                    .toBeInstanceOf(BinarySearchTree)
                    expect(emptyBST.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called invert.`,
                  () => {
                    const spyInvert = jest
                                      .spyOn(exampleBST,
                                            'invert')
                                      .mockImplementation(() => {
                                             return 'Invert';
                                           });
                    const spyInvertResult = exampleBST.invert();

                    expect(spyInvert)
                    .toHaveBeenCalled();
                    expect(spyInvertResult)
                    .toEqual('Invert');
                    spyInvert.mockRestore();
                  });

              test(`The invert method should correctly invert the tree
                    structure.`,
                    () => {
                      const node1 = new Node(1);
                      const node2 = new Node(2);
                      const node3 = new Node(3);
                      const node4 = new Node(4);
                      const node5 = new Node(5);
                      const node6 = new Node(6);

                      node3.right = node5;
                      node3.left = node1;
                      node1.right = node2;
                      node5.right = node6;
                      node5.left = node4;
                      exampleBST.root = node3;
                      exampleBST.invert();

                      expect(exampleBST.root.value)
                      .toEqual(node3.value);
                      expect(exampleBST.root.right.value)
                      .toEqual(node1.value);
                      expect(exampleBST.root.right.left.value)
                      .toEqual(node2.value);
                      expect(exampleBST.root.right.right)
                      .toBeNull();
                      expect(exampleBST.root.left.value)
                      .toEqual(node5.value);
                      expect(exampleBST.root.left.left.value)
                      .toEqual(node6.value);
                      expect(exampleBST.root.left.right.value)
                      .toEqual(node4.value);
                    });

              test(`Inverting an empty tree should return null.`,
                    () => {
                      expect(emptyBST.invert())
                      .toBeNull();
                    });
          });
