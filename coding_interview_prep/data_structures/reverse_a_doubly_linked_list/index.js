// REVERSE A DOUBLY LINKED LIST
//
// Let's create one more method for our doubly linked list called reverse which
// reverses the list in place. Once the method is executed the head should
// point to the previous tail and the tail should point to the previous head.
// Now, if we traverse the list from head to tail we should meet the nodes in a
// reverse order compared to the original list. Trying to reverse an empty list
// should return null.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/reverse-a-doubly-linked-list


var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;

  var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };

  this.reverse = function(){
    if (this.head === null) {
      return null;
    };

    let reversedList = new Node(this.tail.data, null);
    let refToTheCurrentHeadOfReversedList = reversedList;
    let workingList = this.tail.prev;

    while(workingList !== null) {
      const newNode = new Node(workingList.data, refToTheCurrentHeadOfReversedList);
      refToTheCurrentHeadOfReversedList.next = newNode;
      refToTheCurrentHeadOfReversedList = refToTheCurrentHeadOfReversedList.next;
      this.tail = refToTheCurrentHeadOfReversedList === null ?
                  refToTheCurrentHeadOfReversedList.prev :
                  refToTheCurrentHeadOfReversedList;
      workingList = workingList.prev;
    };
    this.head = reversedList;
    return this;
  };

};

module.exports = DoublyLinkedList;
