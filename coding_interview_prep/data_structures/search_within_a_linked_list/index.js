// SEARCH WITHIN A LINKED LIST
//
// Write an isEmpty method that checks if the linked list is empty, an indexOf
// method that returns the index of a given element, and an elementAt that
// returns an element at a given index.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/search-within-a-linked-list

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  this.isEmpty = () => {
    if(length === 0) {
      return true;
    }
    return false;
  };

  const findIndex = (targetElement, index, linkedList) => {
    if (linkedList.element === targetElement) {
      return index;
    } else if (linkedList.next !== null) {
      index++;
      return findIndex(targetElement, index, linkedList.next);
    }
    return -1;
  };

  this.indexOf = (targetElement) => {
    let index = 0;
    let targetIndex;

    if (head === null) {
      return null;
    } else {
      targetIndex = findIndex(targetElement, index, head);
    };
    return targetIndex;
  };

  const findElement = (targetIndex, currentIndex, linkedList) => {
    if(currentIndex === targetIndex) {
      return linkedList.element;
    } else if (linkedList.next !== null) {
      currentIndex++;
      return findElement(targetIndex, currentIndex, linkedList.next);
    };
    return undefined;
  };

  this.elementAt = (targetIndex) => {
    let index = 0;
    const targetElement = findElement(targetIndex, index, head);
    return targetElement;
  };

};

module.exports = LinkedList;
