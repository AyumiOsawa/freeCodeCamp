const MinHeap = require('./index');
const exampleMH1 = new MinHeap();
const exampleMH2 = new MinHeap();

describe(`The MinHeap class should be able to insert, remove, and sort the
          nodes.`,
        () => {
          test(`The MinHeap data structure should exist.`,
                () => {
                  exampleMH1.heap = [null, 1, 2, 3, 4, 5, 6, 7];

                  expect(exampleMH1.heap[0])
                  .toBeNull();
                  expect(checkHeapProp(exampleMH1))
                  .toBeTruthy();
                });

          test(`MinHeap should have a method called insert.`,
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

          test(`MinHeap should have a method called remove.`,
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

          test(`MinHeap should have a method called sort.`,
                () => {
                  const spySort = jest
                                    .spyOn(exampleMH1, 'sort')
                                    .mockImplementation(() => {
                                           return 'Sorted';
                                         });
                  const spySortResult = exampleMH1.sort();

                  expect(spySort)
                  .toHaveBeenCalled();
                  expect(spySortResult)
                  .toEqual('Sorted');
                  spySort.mockRestore();
                });

          test(`The sort method should return an array containing all items
                added to the min heap in sorted order.`,
                () => {
                  exampleMH2.insert(8);
                  exampleMH2.insert(1);
                  exampleMH2.insert(3);
                  exampleMH2.insert(6);
                  exampleMH2.insert(1);

                  expect(exampleMH2.heap)
                  .toEqual([null, 1, 3, 6, 1, 8]);

                  exampleMH2.sort();
                  
                  expect(exampleMH2.heap)
                  .toEqual([null, 1, 1, 3, 6, 8]);
                });

        });
