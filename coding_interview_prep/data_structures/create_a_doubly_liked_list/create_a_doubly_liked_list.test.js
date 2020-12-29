const DoublyLinkedList = require('./index');
const doublyLinkedListExample = new DoublyLinkedList();

// check the length of the list
const size = (list) => {
  let length = 0;
  let linkedList = list.head;
  while(linkedList !== null) {
    length++;
    linkedList = linkedList.next;
  };
  return length;
};

describe(`The DoublyLinkedList Class should be able to add and remove elements`,
          () => {
            test(`The DoublyLinkedList data structure should exist.`,
                  () => {
                    expect(doublyLinkedListExample.head)
                    .toBeNull();
                    expect(doublyLinkedListExample.tail)
                    .toBeNull();
                  });

            test(`The DoublyLinkedList should have a method called add.`,
                  () => {
                    const mockAdd = jest
                                    .spyOn(doublyLinkedListExample, 'add')
                                    .mockImplementation(() => 'Added');
                    const mockAddResult = doublyLinkedListExample.add();

                    expect(mockAdd)
                    .toHaveBeenCalled();
                    expect(mockAddResult)
                    .toEqual('Added');
                    mockAdd.mockRestore();
                  });

            test(`The DoublyLinkedList should have a method called remove.`,
                  () => {
                    const mockRemove = jest
                                    .spyOn(doublyLinkedListExample, 'remove')
                                    .mockImplementation(() => 'Removed');
                    const mockRemoveResult = doublyLinkedListExample.remove();

                    expect(mockRemove)
                    .toHaveBeenCalled();
                    expect(mockRemoveResult)
                    .toEqual('Removed');
                    mockRemove.mockRestore();
                  });

            test(`Removing an item from an empty list should return null.`,
                  () => {
                    expect(doublyLinkedListExample.remove('item1'))
                    .toBeNull();
                  });

            test(`The add method should add items to the list.`,
                  () => {
                    doublyLinkedListExample.add('item1');
                    expect(doublyLinkedListExample.head)
                    .toEqual({
                      data: 'item1',
                      prev: null,
                      next: null
                    });
                  });

            test(`Each node should keep track of the previous node.`,
                  () => {
                    doublyLinkedListExample.add('item2');
                    doublyLinkedListExample.add('item3');
                    doublyLinkedListExample.add('item4');

                    let linkedList = doublyLinkedListExample.head;
                    let hasPropPrev = true;
                    let currentIndex = 0;

                    while(linkedList !== null) {
                      // if currentIndex === 0; head, should be no prev
                      // if !linkedList.hasOwnProperty('prev'); prev is missing
                      // else; check next item in the list
                      if (currentIndex === 0) {
                        currentIndex++;
                        continue;
                      };
                      if (!linkedList.hasOwnProperty('prev')) {
                        hasPropPrev = false;
                        break;
                      };
                      linkedList = linkedList.next;
                    };

                    expect(hasPropPrev)
                    .toBeTruthy();
                  });

            test(`The first item should be removable from the list.`,
                  () => {
                    expect(size(doublyLinkedListExample))
                    .toEqual(4);

                    doublyLinkedListExample.remove('item1');

                    expect(size(doublyLinkedListExample))
                    .toEqual(3);
                  });

            test(`The last item should be removable from the list.`,
                  () => {
                    expect(size(doublyLinkedListExample))
                    .toEqual(3);

                    doublyLinkedListExample.remove('item4');

                    expect(size(doublyLinkedListExample))
                    .toEqual(2);
                    expect(doublyLinkedListExample.remove('item4'))
                    .toBeNull();
                  });
          });
