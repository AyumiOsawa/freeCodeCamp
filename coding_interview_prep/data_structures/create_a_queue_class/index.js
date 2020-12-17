// CREATE A QUEUE STACK
//
// Write an enqueue method that pushes an element to the tail of the queue, a
// dequeue method that removes and returns the front element, a front method
// that lets us see the front element, a size method that shows the length,
// and an isEmpty method to check if the queue is empty.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class

function Queue() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };

  this.enqueue = (element) => {
    this.collection.push(element);
  };

  this.dequeue = () => {
    return this.collection.shift();
  };

  this.front = () => {
    return this.collection[0];
  };

  this.size = () => {
    return this.collection.length;
  };

  this.isEmpty = () => {
    return this.collection.length !== 0;
  };
};

module.exports = Queue;
