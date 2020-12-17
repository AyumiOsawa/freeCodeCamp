const PriorityQueue = require('./index');
const examplePriorityQueue = new PriorityQueue();

describe('The Queue class should have the following methods',
  () => {
    it('Your PriorityQueue class should have a enqueue method.',
    () => {
      const spyEnqueue = jest
                         .spyOn(examplePriorityQueue, 'enqueue')
                         .mockImplementation(() => 'Enqueued');
      const spyEnqueueResult = examplePriorityQueue.enqueue();

      expect(spyEnqueue).toHaveBeenCalled();
      expect(spyEnqueueResult).toBe('Enqueued');
      spyEnqueue.mockRestore();
    });

    it('Your PriorityQueue class should have a dequeue method.',
    () => {
      const spyDequeue = jest
                         .spyOn(examplePriorityQueue, 'dequeue')
                         .mockImplementation(() => 'Dequeue');
      const spyDequeueResult = examplePriorityQueue.dequeue();

      expect(spyDequeue).toHaveBeenCalled();
      expect(spyDequeueResult).toBe('Dequeue');
      spyDequeue.mockRestore();
    });

    it('Your PriorityQueue class should have a size method.',
    () => {
      const spySize = jest
                      .spyOn(examplePriorityQueue, 'size')
                      .mockImplementation(() => 'Sizing');
      const spySizeResult = examplePriorityQueue.size();
      expect(spySize).toHaveBeenCalled();
      expect(spySizeResult).toBe('Sizing');
      spySize.mockRestore();
    });

    it('Your PriorityQueue class should have a front method.',
    () => {
      const spyFront = jest
                       .spyOn(examplePriorityQueue, 'front')
                       .mockImplementation(() => 'First item');
      const spyFrontResult = examplePriorityQueue.front();

      expect(spyFront).toHaveBeenCalled();
      expect(spyFrontResult).toBe('First item');
      spyFront.mockRestore();
    });

    it('Your PriorityQueue class should have an isEmpty method.',
    () => {
      const spyIsEmpty = jest
                          .spyOn(examplePriorityQueue, 'isEmpty')
                          .mockImplementation(() => 'Check if empty');
      const spyIsEmptyResult = examplePriorityQueue.isEmpty();
      expect(spyIsEmpty).toHaveBeenCalled();
      expect(spyIsEmptyResult).toBe('Check if empty');
    });
});

describe('the methods in the Stack class should function correctly',
  () => {
    beforeEach(() => {
      examplePriorityQueue.collection = [
                                          ['bird', 1],
                                          ['bee', 3],
                                          ['fish', 4],
                                          ['cat', 5],
                                          ['human', 6]
                                        ];
    });

    it(`Your PriorityQueue class should correctly keep track of the current
        number of items using the size method as items are enqueued and
        dequeued.`,
        () => {
          expect(examplePriorityQueue.size()).toBe(5);
          examplePriorityQueue.enqueue(['banana', 2]);
          expect(examplePriorityQueue.size()).toBe(6);
          examplePriorityQueue.dequeue();
          examplePriorityQueue.dequeue();
          expect(examplePriorityQueue.size()).toBe(4);
    });

    it(`The front method should return the correct item at the front of the
        queue as items are enqueued and dequeued.`,
        () => {
          expect(examplePriorityQueue.front()).toBe('bird');
          examplePriorityQueue.dequeue();
          expect(examplePriorityQueue.front()).toBe('bee');
          examplePriorityQueue.enqueue(['banana', 2]);
          expect(examplePriorityQueue.front()).toBe('banana');
    });

    it(`The isEmpty method should return true when the queue is empty.`,
        () => {
          examplePriorityQueue.collection = [];
          expect(examplePriorityQueue.isEmpty()).toBeTruthy
    });

    it(`The priority queue should return items with a higher priority before
        items with a lower priority and return items in first-in-first-out
        order otherwise.`,
        () => {
            expect(examplePriorityQueue.collection[0]).toEqual(['bird', 1]);
            examplePriorityQueue.dequeue();
            examplePriorityQueue.enqueue(['robin', 1]);
            examplePriorityQueue.enqueue(['black bird', 1]);
            examplePriorityQueue.enqueue(['penguin', 1]);
            expect(examplePriorityQueue.collection[0]).toEqual(['robin', 1]);
            expect(examplePriorityQueue.collection[1]).toEqual(['black bird', 1]);
            expect(examplePriorityQueue.collection[2]).toEqual(['penguin', 1]);

    });
});
