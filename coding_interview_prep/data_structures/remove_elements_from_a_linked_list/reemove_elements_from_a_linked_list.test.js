const LinkedList = require('./index');
const linkedListExample = new LinkedList();

describe('The LinkedList class should have a remove method' ,
          () => {
            test(`Your LinkedList class should have a remove method.`,
                  () => {
                    const spyRemove = jest
                                      .spyOn(linkedListExample, 'remove')
                                      .mockImplementation(() => 'Removed');
                    const spyRemoveResult = linkedListExample.remove();

                    expect(spyRemove)
                    .toHaveBeenCalled();
                    expect(spyRemoveResult)
                    .toEqual('Removed');
                    spyRemove.mockRestore();
                  });

            test(`Your remove method should reassign head to the second node
                  when the first node is removed.`,
                  () => {
                    linkedListExample.add('ho-ho-ho');
                    linkedListExample.add('Merry Christmas');
                    linkedListExample.remove('ho-ho-ho');
                    console.log('linkedListExample',linkedListExample);
                    const headNode = linkedListExample.head();

                    expect(headNode.element)
                    .toEqual('Merry Christmas')
                  });

            test(`Your remove method should decrease the length of the linked
                  list by one for every node removed.`,
                  () => {
                    expect(linkedListExample.size())
                    .toEqual(1);

                    linkedListExample.remove('Merry Christmas');

                    expect(linkedListExample.size())
                    .toEqual(0);
                  });

            test(`Your remove method should reassign the reference of the
                  previous node of the removed node to the removed node's next
                  reference.`,
                  () => {
                    linkedListExample.add('ho-ho-ho');
                    linkedListExample.add('Merry Christmas');
                    linkedListExample.add('And Happy New Year');

                    linkedListExample.remove('ho-ho-ho');
                    const headNode = linkedListExample.head();
                    const nextNode = headNode.next;

                    expect(headNode.element)
                    .toEqual('Merry Christmas');
                    expect(nextNode.element)
                    .toEqual('And Happy New Year');
                  });

            test(`Your remove method should not change the linked list if the
                  element does not exist in the linked list.`,
                  () => {
                    expect(linkedListExample.size())
                    .toEqual(2);

                    linkedListExample.remove('I am Rudolph');

                    expect(linkedListExample.size())
                    .toEqual(2);
                  });
          });
