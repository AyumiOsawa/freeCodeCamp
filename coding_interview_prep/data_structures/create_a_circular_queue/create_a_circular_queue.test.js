const CircularQueue = require('./index');
const exampleCircularQueue = new CircularQueue(3);

describe('The CircularQueue class should meet the following criteria',
  () => {
    beforeEach(() => {
      exampleCircularQueue.queue = [null, null, null];
      exampleCircularQueue.read = 0;
      exampleCircularQueue.write = 0;
    });

    test('The enqueue method should add items to the circular queue.',
      () => {
        exampleCircularQueue.enqueue(3);
        expect(exampleCircularQueue.queue).toEqual([3, null, null]);
    });

    test('You should not enqueue items past the read pointer.',
      () => {
        exampleCircularQueue.queue = [1, 2, 3];
        exampleCircularQueue.write = 3;
        expect(exampleCircularQueue.enqueue()).toBeNull();
    });

    test('The dequeue method should dequeue items from the queue.',
      () => {
        exampleCircularQueue.queue = [1, 2, 3];
        exampleCircularQueue.write = 2;
        expect(exampleCircularQueue.dequeue()).toBe(1);
    });

    test('After an item is dequeued, its position in the queue should be reset to null.',
      () => {
        exampleCircularQueue.queue = [1, 2, 3];
        exampleCircularQueue.write = 2;
        exampleCircularQueue.dequeue();
        expect(exampleCircularQueue.queue[0]).toBeNull();
    });

    test('Trying to dequeue past the write pointer should return null and does not advance the write pointer.',
      () => {
        const currentWrite = exampleCircularQueue.write;
        expect(exampleCircularQueue.dequeue()).toBeNull();
        expect(exampleCircularQueue.write).toBe(currentWrite);

    });
  });
