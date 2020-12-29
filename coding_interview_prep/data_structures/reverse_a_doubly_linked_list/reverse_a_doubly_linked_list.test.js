const DoublyLinkedList = require('./index');
const dLLInstance = new DoublyLinkedList();
const item1 = {
    data: 'item1',
    prev: null,
    next: null
};
const item2 = {
    data: 'item2',
    prev: null,
    next: null
};
const item3 = {
    data: 'item3',
    prev: null,
    next: null
};

const one_two_three = new DoublyLinkedList();
one_two_three.head = item1
one_two_three.tail = item3
one_two_three.head.next = item2;
one_two_three.head.next.next = item3;
one_two_three.head.next.prev = item1;

const three_two_one = new DoublyLinkedList();
three_two_one.head = item3;
three_two_one.tail = item1;
three_two_one.head.next = item2;
three_two_one.head.next.next = item1;
three_two_one.head.next.prev = item3;

describe(`The DoublyLinkedList class should be able to reverse the list in
          place.`,
          () => {
            test(`The DoublyLinkedList data structure should exist.`,
                  () => {
                    expect(dLLInstance.head)
                    .toBeNull();
                    expect(dLLInstance.tail)
                    .toBeNull();
                  });

            test(`The DoublyLinkedList should have a method called reverse.`
                  () => {
                    const spyReverse = jest
                                       .spyOn(dLLInstance, 'reverse')
                                       .mockImplementation(() => 'Reversed');
                    const spyReverseResult = dLLInstance.reverse();

                    expect(spyReverse)
                    .toHaveBeenCalled();
                    expect(spyReverseResult)
                    .toEqual('Reversed');
                    spyReverse.mockRestore();
                  });

            test(`Reversing an empty list should return null.`,
                  () => {
                    expect(dLLInstance.reverse())
                    .toBeNull();
                  });

            test(`The reverse method should reverse the list.`,
                  () => {
                    expect(one_two_three.reverse())
                    .toEqual(three_two_one);
                  });

            test(`The next and previous references should be correctly
                  maintained when a list is reversed.`,
                  () => {
                    expect(one_two_three.head.prev)
                    .toBeNull();

                    expect(   one_two_three.head.next           )
                    .toEqual( three_two_one.head.next           );
                    expect(   one_two_three.head.next.prev      )
                    .toEqual( three_two_one.head.next.prev      );
                    expect(   one_two_three.head.next.prev      )
                    .toEqual( three_two_one.head.next.prev      );
                    expect(   one_two_three.head.next.next      )
                    .toEqual( three_two_one.head.next.next      );
                    expect(   one_two_three.head.next.next.prev )
                    .toEqual( three_two_one.head.next.next.prev );

                    expect(   one_two_three.head.next.next.next )
                    .toBeNull();
                  });
          });
