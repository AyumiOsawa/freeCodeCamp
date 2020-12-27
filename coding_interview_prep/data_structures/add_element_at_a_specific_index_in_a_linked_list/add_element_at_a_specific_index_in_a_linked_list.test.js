const LinkedList = require('./index');
const linkedListExample = new LinkedList();

describe('The LinkedList should be able to insert element',
          () => {
            linkedListExample.add('iteme1');
            linkedListExample.add('iteme2');
            linkedListExample.add('iteme3');

            test(`Your addAt method should reassign head to the new node when
                  the given index is 0.`,
                () => {
                  linkedListExample.addAt(0, 'inserted');

                  expect(linkedListExample.head().element)
                  .toEqual('inserted');
                });

            test(`Your addAt method should increase the length of the linked
                  list by one for each new node added to the linked list.`,
                  () => {
                    expect(linkedListExample.size())
                    .toEqual(4);

                    linkedListExample.addAt(0, 'another inserted');

                    expect(linkedListExample.size())
                    .toEqual(5);
                  });

            test(`Your addAt method should return false if a node was unable to
                  be added.`,
                  () => {
                    expect(linkedListExample.addAt(100))
                    .toBeFalsy();
                    expect(linkedListExample.addAt(-1))
                    .toBeFalsy();
                  });
          });
