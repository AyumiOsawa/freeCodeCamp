const LinkedList = require('./index');
const linkedListExample = new LinkedList();

describe(`The LinkedList class should be able to remove an elemenent by its
          id.`,
          () => {
            // beforeEach(() => {
            //   // empty the linked list and add three items
            //   while (linkedListExample.size() > 0) {
            //     linkedListExample.remove(linkedListExample.head());
            //   };
            //
            //   linkedListExample.add('item1');
            //   linkedListExample.add('item2');
            //   linkedListExample.add('item3');
            //  });

            test(`Your LinkedList class should have a removeAt method.`,
                  () => {
                    const spyRemoveAt = jest
                                        .spyOn(linkedListExample, 'removeAt')
                                        .mockImplementation(() => 'Removed');
                    const spyRemoveAtResult = linkedListExample.removeAt();

                    expect(spyRemoveAt)
                    .toHaveBeenCalled();
                    expect(spyRemoveAtResult)
                    .toEqual('Removed');
                    spyRemoveAt.mockRestore();
                  });

            test(`Your removeAt method should reduce the length of the linked
                  list by one.`,
                  () => {
                    linkedListExample.add('item1');
                    linkedListExample.add('item2');
                    linkedListExample.add('item3');

                    expect(linkedListExample.size())
                    .toEqual(3);

                    linkedListExample.removeAt(0);

                    expect(linkedListExample.size())
                    .toEqual(2);
                  });

            test(`Your removeAt method should remove the element at the
                  specified index from the linked list.`,
                  () => {
                    linkedListExample.removeAt(1); // remove item3
                    expect(linkedListExample.head().element)
                    .toEqual('item2');
                  });

            test(`When only one element is present in the linked list, your
                  removeAt method should remove and return the element at
                  specified index, and reduce the length of the linked list.`,
                  () => {
                    // remove item2
                    console.log('--------')
                    console.log('head before',linkedListExample.head())
                    const lastElement = linkedListExample.removeAt(0);
                    console.log('head aftre',linkedListExample.head())
                    console.log('removed',lastElement)


                    console.log('--------')

                    expect(linkedListExample.size())
                    .toEqual(0);
                    expect(lastElement)
                    .toEqual('item2');
                    expect(linkedListExample.size())
                    .toEqual(0);
                  });

            test(`Your removeAt method should return the element of the removed
                  node.`,
                  () => {
                    linkedListExample.add('item4');

                    const removed = linkedListExample.removeAt(0);

                    expect(removed)
                    .toEqual('item4');
                  });

            test(`Your removeAt method should return null and the linked list
                  should not change if the given index is less than 0.`,
                  () => {
                    expect(linkedListExample.size())
                    .toEqual(0);

                    const nonExistingNode = linkedListExample.removeAt(0);
                    expect(nonExistingNode)
                    .toBeNull();
                    expect(linkedListExample.size())
                    .toEqual(0);
                  });

            test(`Your removeAt method should return null and the linked list
                  should not change if the given index is greater than or equal
                  to the length of the list.`,
                  () => {
                    const nonExistingNode = linkedListExample.removeAt(5);

                    expect(nonExistingNode)
                    .toBeNull();
                    expect(linkedListExample.size())
                    .toEqual(0);
                  });
          });
