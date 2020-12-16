const Stack = require('./index');

const stackExample = new Stack();

describe('the Stack class should have the following functions', () => {
  it('Your Stack class should have a push method.', () => {
    const spyPush = jest
                    .spyOn(stackExample, 'push')
                    .mockImplementation(() => 'Pushed');
    const spyPushResult = stackExample.push();

    expect(spyPush).toHaveBeenCalled();
    expect(spyPushResult).toBe('Pushed');
    spyPush.mockRestore();
  });

  it('Your Stack class should have a pop method.', () => {
    const spyPop = jest
                   .spyOn(stackExample, 'pop')
                   .mockImplementation(() => 'Popped');
    const spyPopResult = stackExample.pop();

    expect(spyPop).toHaveBeenCalled()
    expect(spyPopResult).toBe('Popped');
    spyPop.mockRestore();
  });

  it('Your Stack class should have a peek method.', () => {
    const spyPeek = jest
                    .spyOn(stackExample, 'peek')
                    .mockImplementation(() => 'Peeked');
    const spyPeekResult = stackExample.peek();

    expect(spyPeek).toHaveBeenCalled()
    expect(spyPeekResult).toBe('Peeked');
    spyPeek.mockRestore();
  });

  it('Your Stack class should have a isEmpty method.', () => {
    const spyIsEmpty = jest
                       .spyOn(stackExample, 'isEmpty')
                       .mockImplementation(() => 'Checked');
    const spyIsEmptyResult = stackExample.isEmpty();

    expect(spyIsEmpty).toHaveBeenCalled()
    expect(spyIsEmptyResult).toBe('Checked');
    spyIsEmpty.mockRestore();
  });

  it('Your Stack class should have a clear method.', () => {
    const spyClear = jest
                     .spyOn(stackExample, 'clear')
                     .mockImplementation(() => 'Cleared');
    const spyClearResult = stackExample.clear();

    expect(spyClear).toHaveBeenCalled()
    expect(spyClearResult).toBe('Cleared');
    spyClear.mockRestore();
  });
});

describe('the methods in the Stack class should function correctly',
  () => {
  beforeEach(() => {
    stackExample.collection = [1,2,3,4,5];
  });

  it('The peek method should return the top element of the stack',
    () => {
    expect(stackExample.peek()).toBe(5);
    expect(stackExample.collection).toEqual([1,2,3,4,5]);
  });

  it('The pop method should remove and return the top element of the stack',
    () => {
    expect(stackExample.pop()).toBe(5);
    expect(stackExample.collection).toEqual([1,2,3,4]);
  });

  it(`The isEmpty method should return true if a stack does not contain any
    elements`,
    () => {
    expect(stackExample.isEmpty()).toBeFalsy();
    stackExample.collection = [];
    expect(stackExample.isEmpty()).toBeTruthy();
  });

  it('The clear method should remove all element from the stack',
    () => {
    stackExample.clear();
    expect(stackExample.collection).toEqual([]);
  });
});
