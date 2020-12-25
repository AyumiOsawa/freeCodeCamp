// CREATE A LINKED LIST CLASS
//
// Write an add method that assigns the first node you push to the linked list
// to the head; after that, whenever adding a node, every node should be
// referenced by the previous node's next property.
//
// Note
// Your list's length should increase by one every time an element is added to
// the linked list.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-linked-list-class

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    const newNode = new Node(element);
    length++;

    // recursively look for the last node and add new Node object
    const AppendToTheLastNode = (linkedList) => {
      if(linkedList.next === null) {
        linkedList.next = newNode;
        return true;
      } else {
        AppendToTheLastNode(linkedList.next);
      };
    };

    // check if the new Node is the first node (head) or not
    if(head !== null) {
      AppendToTheLastNode(head);
    } else { // first node
      head = newNode;
    };
  };

};

module.exports = LinkedList;
