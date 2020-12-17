// CREATE A PRIORITY QUEUE CLASSS
//
//
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };

  this.enqueue = (item) => {
    const itemPriority = item[1];
    for(let index = 0;
        index < this.collection.length;
        index++) {
      if (itemPriority < this.collection[index][1]) {
        this.collection.splice(index, 0, item);
        break;
      }
    };
  };

  this.dequeue = () => {
    return this.collection.shift();
  };

  this.size = () => {
    return this.collection.length;
  };

  this.front = () => {
    return this.collection[0][0];
  };

  this.isEmpty = () => {
    return this.collection.length === 0;
  };
};

module.exports = PriorityQueue;
