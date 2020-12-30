import { BinarySearchTree, Node } from './index';
const binarySearchTreeInstance = new BinarySearchTree();

describe(`The BinarySearchTree class should be capable of adding a new node`,
          () => {
            test(`The BinarySearchTree data structure should exist.`,
                  () => {
                    expect(binarySearchTreeInstance)
                    .toBeInstanceOf(BinarySearchTree);
                    expect(binarySearchTreeInstance.root)
                    .toBeNull();
                  });

            test(`The binary search tree should have a method called add.`,
                  () => {
                    const spyAdd = jest
                                   .spyOn(binarySearchTreeInstance, 'add')
                                   .mockImplementation(() => 'Added');
                    const spyAddResult = binarySearchTreeInstance.add();

                    expect(spyAdd)
                    .toHaveBeenCalled();
                    expect(spyAddResult)
                    .toEqual('Added');
                  });

            test(`The add method should add elements according to the binary
                  search tree rules.`,
                  () => {
                    const node1 = new Node(8);
                    const node2 = new Node(3);
                    const node3 = new Node(10);

                    node1.left = node2;
                    node1.right = node3;
                    binarySearchTreeInstance.root = node1;

                    const newNode = new Node(6);
                    binarySearchTreeInstance.add(newNode);

                    expect(binarySearchTreeInstance.left.left)
                    .toBeNull();
                    expect(binarySearchTreeInstance.left.right)
                    .toEqual(newNode);
                    expect(binarySearchTreeInstance.right.left)
                    .toBeNull();
                    expect(binarySearchTreeInstance.right.right)
                    .toBeNull();
                  });

            test(`Adding an element that already exists should return null.`,
                  () => {
                    expect(binarySearchTreeInstance.add(node1))
                    .toBeNull();
                    expect(binarySearchTreeInstance.add(newNode))
                    .toBeNull();
                  });
          });
