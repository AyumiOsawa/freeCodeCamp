// CREATE A CIRCULAR QUEUE
//
// In this challenge we will implement a circular queue. The circular queue
// should provide enqueue and dequeue methods which allow you to read from and
// write to the queue. The class itself should also accept an integer argument
// which you can use to specify the size of the queue when created. We've
// written the starting version of this class for you in the code editor. When
// you enqueue items to the queue, the write pointer should advance forward and
// loop back to the beginning once it reaches the end of the queue. Likewise,
// the read pointer should advance forward as you dequeue items. The write
// pointer should not be allowed to move past the read pointer (our class won't
// let you overwrite data you haven't read yet) and the read pointer should not
// be able to advance past data you have written. In addition, the enqueue
// method should return the item you enqueued if it is successful; otherwise it
// will return null. Similarly, when you dequeue an item, that item should be
// returned and if you cannot dequeue an item you should return null.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue

class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.write - this.read < (this.max + 1)) {
      this.queue[this.write % (this.max + 1)] = item;
      this.write++;
      return item;
    };
    return null;
  }

  dequeue() {
    if (this.write - this.read > 0) {
      const dequeued = this.queue[this.read % (this.max + 1)];
      this.queue[this.read % (this.max + 1)] = null;
      this.read++;
      return dequeued;
    }
    return null;
  }
};

module.exports = CircularQueue;
