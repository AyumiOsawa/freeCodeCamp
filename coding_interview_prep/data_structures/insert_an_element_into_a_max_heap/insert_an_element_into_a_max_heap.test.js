const MaxHeap = require('./index');
const exampleMH1 = new MaxHeap();
const exampleMH2 = new MaxHeap();

const checkHeapProp = (tree) => {
  const nodes = tree.root;
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

describe(`The MaxHeap should be able to able to insert and print elements.`,
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

            test(`The insert method should add elements according to the max
                  heap property.`,
                  () => {
                    exampleMH1.insert(4);

                    expect(exampleMH1.root)
                    .toEqual([null, 6, 5, 5, 4, 3, 2, 1, 4]);
                  });
          });
