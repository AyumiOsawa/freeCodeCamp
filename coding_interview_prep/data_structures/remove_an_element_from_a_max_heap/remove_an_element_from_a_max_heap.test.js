const MaxHeap = require('./index');
const exampleMH1 = new MaxHeap();
const exampleMH2 = new MaxHeap();
const checkHeapProp = (tree) => {
  const nodes = tree.heap;
  let index = 1;    // skip the first value
  while(index * 2 + 1 < nodes.length) {
    const youngerChildIndex = index * 2 + 1;
    const elderChildIndex = index * 2 + 2 === nodes.length ?
                            index * 2 + 2 :
                            null;
    if (nodes[index] < nodes[youngerChildIndex]) {
      return false;
    };
    if (elderChildIndex &&
        nodes[index] < nodes[elderChildIndex]) {
      return false;
    };
    index++;
  };
  return true;
};

describe(`The MaxHeap class should be able to remove an element from the heap.`,
          () => {
            test(`The MaxHeap data structure should exist.`,
                  () => {
                    exampleMH1.heap = [null, 6, 5, 5, 4, 3, 2, 1];
                    exampleMH2.heap = [null, 2, 4, 1, 0, 6];

                    expect(exampleMH1.heap[0])
                    .toBeNull();

                    expect(checkHeapProp(exampleMH1))
                    .toBeTruthy();
                    expect(checkHeapProp(exampleMH2))
                    .toBeFalsy();
                  });

            test(`MaxHeap should have a method called print.`,
                  () => {
                    const spyPrint = jest
                                     .spyOn(exampleMH1, 'print')
                                     .mockImplementation(() => {
                                             return 'Printed';
                                           });
                    const spyPrintResult = exampleMH1.print();

                    expect(spyPrint)
                    .toHaveBeenCalled();
                    expect(spyPrintResult)
                    .toEqual('Printed');
                    spyPrint.mockRestore();
                  });

            test(`MaxHeap should have a method called insert.`,
                  () => {
                    const spyInsert = jest
                                      .spyOn(exampleMH1, 'insert')
                                      .mockImplementation(() => {
                                             return 'Inserted';
                                           });
                    const spyInsertResult = exampleMH1.insert();

                    expect(spyInsert)
                    .toHaveBeenCalled();
                    expect(spyInsertResult)
                    .toEqual('Inserted');
                    spyInsert.mockRestore();
                  });

            test(`MaxHeap should have a method called remove.`,
                  () => {
                    const spyRemove = jest
                                      .spyOn(exampleMH1, 'remove')
                                      .mockImplementation(() => {
                                             return 'Removed';
                                           });
                    const spyRemoveResult = exampleMH1.remove();

                    expect(spyRemove)
                    .toHaveBeenCalled();
                    expect(spyRemoveResult)
                    .toEqual('Removed');
                    spyRemove.mockRestore();
                  });

            test(`The remove method should remove the greatest element from the
                  max heap while maintaining the max heap property.`,
                  () => {
                    exampleMH1.heap = [null, 6, 5, 4, 5, 5, 2];

                    expect(exampleMH1.remove())
                    .toEqual(6);
                    expect(exampleMH1.heap)
                    .toEqual([null, 5, 5, 4, 2, 5]);

                    exampleMH2.heap = [null, 4, 2, 3];
                    exampleMH2.remove()

                    expect(exampleMH2.heap)
                    .toEqual([null, 3, 2]);
                  });
          })
