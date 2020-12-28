// CREATE A DOUBLY LINKED LIST
//
// We've provided a Node object and started our DoublyLinkedList. Let's add two
// methods to our doubly linked list called add and remove. The add method
// should add the given element to the list while the remove method should
// remove all occurrences of a given element in the list.
//
// Be careful to handle any possible edge cases when writing these methods,
// such as deletions for the first or last element. Also, removing any item on
// an empty list should return null.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-doubly-linked-list
module.exports = {
  Node: function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  },

  DoublyLinkedList: function() {
    this.head = null;
    this.tail = null;
    // Only change code below this line

    // Only change code above this line
  };
};
