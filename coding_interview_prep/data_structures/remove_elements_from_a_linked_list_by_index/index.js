// REMOVE ELEMENTS FROM A LINKED LIST BY INDEX
//
// Write a removeAt(index) method that removes and returns a node at a given
// index. The method should return null if the given index is either negative,
// or greater than or equal to the length of the linked list.
//
// Note: Remember to keep count of the currentIndex.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list-by-index

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

  // Only change code below this line
  const findAndRemoveByIndex = (targetIndex, currentIndex, linkedList) => {
    if (targetIndex === 0) { // target is head
      const removed = linkedList.element;
      head = linkedList.next;
      length--;
      return removed;
    } else if (targetIndex === currentIndex + 1 &&
               linkedList.next !== null) {
      const removed = linkedList.next.element;
      const followingNodes = linkedList.next.next;
      linkedList.next = followingNodes;
      length--;
      return removed;
    } else if (linkedList.next !== null) {
      currentIndex++;
      return findAndRemoveByIndex(targetIndex, currentIndex, linkedList.next);
    } else {
      // no item found at targetIndex
      return null;
    };
  };

  this.removeAt = (targetIndex) => {
    let index = 0;
    let removedElement = null

    if(head !== null && targetIndex < length) {
      removedElement = findAndRemoveByIndex(targetIndex, index, head);
    };
    return removedElement;
  };
  // Only change code above this line
};

module.exports = LinkedList;
