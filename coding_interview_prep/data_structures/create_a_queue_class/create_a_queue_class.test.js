const Queue = require('./index');
const exampleQueue = new Queue();

describe('The Queue class should have the following methods', () => {
  it('Your Queue class should have a enqueue method.', () => {
    const spyEnqueue = jest
                    .spyOn(exampleQueue, 'enqueue')
                    .mockImplementation(() => 'Enqueued');
    const spyEnqueueResult = exampleQueue.enqueue();
    expect(spyEnqueue).toHaveBeenCalled();
    expect(spyEnqueueResult).toBe('Enqueued');
    spyEnqueue.mockRestore();
  });

  it('Your Queue class should have a dequeue method.', () => {
    const spyDequeue = jest
                    .spyOn(exampleQueue, 'dequeue')
                    .mockImplementation(() => 'Dequeued');
    const spyDequeueResult = exampleQueue.dequeue();
    expect(spyDequeue).toHaveBeenCalled();
    expect(spyDequeueResult).toBe('Dequeued');
    spyDequeue.mockRestore();
  });

  it('Your Queue class should have a front method.', () => {
    const spyFront = jest
                    .spyOn(exampleQueue, 'front')
                    .mockImplementation(() => 'front item');
    const spyFrontResult = exampleQueue.front();
    expect(spyFront).toHaveBeenCalled();
    expect(spyFrontResult).toBe('front item');
    spyFront.mockRestore();
  });

  it('Your Queue class should have a size method.', () => {
    const spySize = jest
                    .spyOn(exampleQueue, 'size')
                    .mockImplementation(() => 'Size measured');
    const spySizeResult = exampleQueue.size();
    expect(spySize).toHaveBeenCalled();
    expect(spySizeResult).toBe('Size measured');
    spySize.mockRestore();
  });

  it('Your Queue class should have an isEmpty method.', () => {
    const spyIsEmpty = jest
                    .spyOn(exampleQueue, 'isEmpty')
                    .mockImplementation(() => 'Emptied');
    const spyIsEmptyResult = exampleQueue.isEmpty();
    expect(spyIsEmpty).toHaveBeenCalled();
    expect(spyIsEmptyResult).toBe('Emptied');
    spyIsEmpty.mockRestore();
  });
});

describe('the methods in the Stack class should function correctly', () => {
  beforeEach(() => {
    exampleQueue.collection = [1,2,3,4,5];
  });

  it(`The dequeue method should remove and return the front element of the
    queue`,
    () => {
    expect(exampleQueue.dequeue()).toBe(1);
    expect(exampleQueue.collection).toEqual([2,3,4,5]);
  });

  it('The front method should return value of the front element of the queue',
    () => {
    expect(exampleQueue.front()).toBe(1);
    expect(exampleQueue.collection).toEqual([1,2,3,4,5]);
  });

  it('The size method should return the length of the queue',
    () => {
    expect(exampleQueue.size()).toBe(5);
    exampleQueue.collection = [];
    expect(exampleQueue.size()).toBe(0);
  });

  it(`The isEmpty method should return false if there are elements in the
    queue`,
    () => {
    expect(exampleQueue.isEmpty()).toBeTruthy();
    exampleQueue.collection = [];
    expect(exampleQueue.isEmpty()).toBeFalsy();
  });
});
