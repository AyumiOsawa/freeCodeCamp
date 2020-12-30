const DoublyLinkedList = require('./index');
const dLLInstance = new DoublyLinkedList();
let one_two_three = new DoublyLinkedList();
let three_two_one = new DoublyLinkedList();
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

describe(`The DoublyLinkedList class should be able to reverse the list in
          place.`,
          () => {
            beforeEach(() => {
              one_two_three.head = new Node('item1', null);
              one_two_three.tail = new Node('item3', null);
              one_two_three.head.next = new Node('item2', null);
              one_two_three.head.next.next = one_two_three.tail;
              one_two_three.head.next.prev = one_two_three.head;
              one_two_three.head.next.next.prev = one_two_three.head.next;

              three_two_one.head = new Node('item3', null);
              three_two_one.tail = new Node('item1', null);
              three_two_one.head.next = new Node('item2', null);
              three_two_one.head.next.next = three_two_one.tail;
              three_two_one.head.next.prev = three_two_one.head;
              three_two_one.head.next.next.prev = three_two_one.head.next;
            });

            test(`The DoublyLinkedList data structure should exist.`,
                  () => {
                    expect(dLLInstance.head)
                    .toBeNull();
                    expect(dLLInstance.tail)
                    .toBeNull();
                  });

            test(`The DoublyLinkedList should have a method called reverse.`,
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
                    const emptyDLLInstance = new DoublyLinkedList();
                    expect(emptyDLLInstance.reverse())
                    .toBeNull();
                  });

            test(`The reverse method should reverse the list.`,
                  () => {

                    let checkList = one_two_three.reverse().head;
                    let checkListAgainst = three_two_one.head;
                    while(checkList !== null) {
                      expect(checkList.data)
                      .toEqual(checkListAgainst.data);
                      checkList = checkList.next;
                      checkListAgainst = checkListAgainst.next;
                    };
                  });

            test(`The next and previous references should be correctly
                  maintained when a list is reversed.`,
                  () => {
                    const reversed = one_two_three.reverse();
                    expect(reversed.head.prev)
                    .toBeNull();

                    expect(   reversed.head.next                )
                    .toEqual( three_two_one.head.next           );
                    expect(   reversed.head.next.prev           )
                    .toEqual( three_two_one.head.next.prev      );
                    expect(   reversed.head.next.prev           )
                    .toEqual( three_two_one.head.next.prev      );
                    expect(   reversed.head.next.next           )
                    .toEqual( three_two_one.head.next.next      );
                    expect(   reversed.head.next.next.prev      )
                    .toEqual( three_two_one.head.next.next.prev );

                    expect(   reversed.head.next.next.next      )
                    .toBeNull();
                  });
          });
