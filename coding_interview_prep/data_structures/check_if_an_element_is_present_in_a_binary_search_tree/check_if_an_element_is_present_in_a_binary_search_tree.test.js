const BinarySearchTree = require('./index');
const exampleBST = new BinarySearchTree();
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

describe(`The BinarySearchTree class should be able to check if an element is
          present in a tree.`,
          () => {
            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(exampleBST)
                    .toBeInstanceOf(BinarySearchTree);
                    expect(exampleBST.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called
                  isPresent.`,
                  () => {
                    const spyIsPresent = jest
                                         .spyOn(exampleBST, 'isPresent')
                                         .mockImplementation(() => 'Yes');
                    const spyIsPresentResult = exampleBST.isPresent();

                    expect(spyIsPresent)
                    .toHaveBeenCalled();
                    expect(spyIsPresentResult)
                    .toEqual('Yes');
                    spyIsPresent.mockRestore();
                  });

            test(`The isPresent method should correctly check for the presence
                  or absence of elements added to the tree.`,
                  () => {
                    const node1 = new Node(8);
                    const node2 = new Node(10);
                    const node3 = new Node(3);

                    node1.left = node3;
                    node1.right =  node2;
                    exampleBST.root = node1;

                    expect(exampleBST.isPresent(3))
                    .toBeTruthy();
                    expect(exampleBST.isPresent(4))
                    .toBeFalsy();
                  });

            test(`isPresent should handle cases where the tree is empty.`,
                  () => {
                    const emptyBST = new BinarySearchTree();

                    expect(emptyBST.isPresent(2))
                    .toBeFalsy();
                  });
          });
