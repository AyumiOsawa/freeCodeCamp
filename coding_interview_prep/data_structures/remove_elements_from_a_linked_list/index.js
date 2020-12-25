// REMOVE ELEMENTS FROM A LINKED LIST
//
// Write a remove method that takes an element and removes it from the linked
// list.
//
// Note: The length of the list should decrease by one every time an element is
// removed from the linked list.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
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
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    const findAndRemoveElement = (element, linkedList) => {
      if(head.element === element) { //first node
        const followingNodes = linkedList.next;
        head = followingNodes;
        length--;
        return true;
      } else if(linkedList.next &&
                linkedList.next.element === element) { // second node or after
        const followingNodes = linkedList.next.next;
        linkedList.next = followingNodes;
        length--;
        return true;
      } else if (linkedList.next){
        findAndRemoveElement(element, linkedList.next);
      };
      return false;
    };

    findAndRemoveElement(element, head);
  };
};

module.exports = LinkedList;
