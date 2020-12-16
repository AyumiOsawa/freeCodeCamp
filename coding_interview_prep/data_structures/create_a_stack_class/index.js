// CREATE A STACK CLASS
//
// Write a push method that pushes an element to the top of the stack, a pop
// method that removes and returns the element on the top of the stack, a peek
// method that looks at the top element in the stack, an isEmpty method that
// checks if the stack is empty, and a clear method that removes all elements
// from the stack. Normally stacks don't have this, but we've added a print
// helper method that console logs the collection.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class

function Stack() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };

  this.push = function(newElement) {
    this.collection.push(newElement);
  };

  this.pop = function() {
    return this.collection.pop();
  };

  this.peek = function() {
    return this.collection[this.collection.length - 1];
  };

  this.isEmpty = function() {
    return this.collection.length === 0;
  };

  this.clear = function() {
    this.collection = [];
  };
};



module.exports = Stack;
