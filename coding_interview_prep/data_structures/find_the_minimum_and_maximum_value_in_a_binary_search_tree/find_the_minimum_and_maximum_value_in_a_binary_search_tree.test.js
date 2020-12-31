const BinarySearchTree = require('./index');
const binarySearchTreeInstance = new BinarySearchTree();
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

describe(`The BinarySearchTree class should be able to find the minimum and the
          maximum values in the tree`,
          () => {
            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(binarySearchTreeInstance)
                    .toBeInstanceOf(BinarySearchTree);
                    expect(binarySearchTreeInstance.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called findMin.`,
                  () => {
                    const spyFindMin = jest
                                       .spyOn(binarySearchTreeInstance,
                                              'findMin')
                                       .mockImplementation(() => 'minVal');
                    const spyFindMinResult = binarySearchTreeInstance.findMin();

                    expect(spyFindMin)
                    .toHaveBeenCalled();
                    expect(spyFindMinResult)
                    .toEqual('minVal');
                    spyFindMin.mockRestore();
                  });

            test(`The binary search tree should have a method called findMax.`,
                  () => {
                    const spyFindMax = jest
                                       .spyOn(binarySearchTreeInstance,
                                              'findMax')
                                       .mockImplementation(() => 'maxVal');
                    const spyFindMaxResult = binarySearchTreeInstance.findMax();

                    expect(spyFindMax)
                    .toHaveBeenCalled();
                    expect(spyFindMaxResult)
                    .toEqual('maxVal');
                    spyFindMax.mockRestore();
                  });

            test(`The findMin method should return the minimum value in the
                  binary search tree.`,
                  () => {
                    const node1 = new Node(8);
                    const node2 = new Node(3);
                    const node3 = new Node(10);

                    node1.left = node2;
                    node1.right = node3;
                    binarySearchTreeInstance.root = node1;

                    expect(binarySearchTreeInstance.findMin())
                    .toEqual(3);
                  });

            test(`The findMax method should return the maximum value in the
                  binary search tree.`,
                  () => {
                    expect(binarySearchTreeInstance.findMax())
                    .toEqual(10);
                  });

            test(`The findMin and findMax methods should return null for an
                  empty tree.`,
                  () => {
                    const emptyTree = new BinarySearchTree();

                    expect(emptyTree.findMin())
                    .toBeNull();
                    expect(emptyTree.findMax())
                    .toBeNull();
                  });
          });
