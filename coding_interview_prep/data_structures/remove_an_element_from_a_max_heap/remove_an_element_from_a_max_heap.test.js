const MaxHeap = require('./index');
const exampleMH1 = new MaxHeap();
const exampleMH2 = new MaxHeap();

describe(`The MaxHeap class should be able to remove an element from the heap.`,
          () => {
            test(`The MaxHeap data structure should exist.`,
                  () => {
                    exampleMH1.root = [null, 6, 5, 5, 4, 3, 2, 1];
                    exampleMH2.root = [null, 2, 4, 1, 0, 6];

                    expect(exampleMH1.root[0])
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
                    exampleMH1.insert(6);
                    exampleMH1.insert(5);
                    exampleMH1.insert(4);
                    exampleMH1.insert(2);
                    exampleMH1.insert(5);
                    exampleMH1.insert(5);

                    exampleMH1.remove(6);

                    expect(exampleMH1.root)
                    .toEqual([null, 5, 4, 2, 5, 5]);

                    exampleMH2.add(4)
                    exampleMH2.add(2)
                    exampleMH2.add(3)

                    exampleMH2.remove(4)
                    expect(exampleMH2.root)
                    .toEqual([null, 3, 2]);
                  });
          })
