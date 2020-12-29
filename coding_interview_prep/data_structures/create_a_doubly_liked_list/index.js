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



const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;

  const Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }

  this.add = function(element) {
    let newNode;
    if (this.head === null) {
      newNode = new Node(element, null);
      this.head = newNode;
      this.tail = element;
    } else {
      newNode = new Node(element, this.tail);
      let list = this.head;

      while(list.next !== null) {
        list = list.next;
      };
      newNode.prev = list;
      list.next = newNode;
      this.tail = newNode;
    };
  };

  this.remove = function(element) {
    // Find the list item that matches the element
    // if(this.head === null); list is empty
    // if(this.head.data === element); remove the first element
    // else; remove the second element or later
    if(this.head === null) {
      return null;
    } else if(this.head.data === element) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      let list = this.head;
      while(list.next !== null && list.next.data !== element) {
      list = list.next;
    };
      // Remove the element and adjust the prev/next properties if necessary.
      // if (list.next === null); element not found
      // if (followingNodes !== null); prev in the followingNodes need an update
      // if (list.next === null); this.tail needs update
      if (list.next === null) {
        return null;
      } else {
        const followingNodes = list.next.next;
        if (followingNodes !== null) {
          followingNodes.prev = list;
        };
        list.next = followingNodes;
        if (list.next === null) {
          this.tail = list;
        };
      };
    };
  };
};

module.exports = DoublyLinkedList;
