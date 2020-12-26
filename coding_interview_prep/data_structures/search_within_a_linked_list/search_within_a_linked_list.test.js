const LinkedList = require('./index');
const linkedListExample = new LinkedList();

describe(`The LinkedList class should have isEmpty, indexOf, and elementAt
          methods`,
          () => {
            beforeEach(() => {
              // emptying the contents of the linked list
              while(linkedListExample.size() > 0) {
                const headElm = linkedListExample.head().element;
                linkedListExample.remove(headElm);
              };
            });

            test(`Your LinkedList class should have an isEmpty method.`,
                  () => {
                    const spyIsEmtpy = jest
                                       .spyOn(linkedListExample, 'isEmpty')
                                       .mockImplementation(() => `Return Y/N`);
                    const spyIsEmtpyResult = linkedListExample.isEmpty();

                    expect(spyIsEmtpy).toHaveBeenCalled();
                    expect(spyIsEmtpyResult).toEqual(`Return Y/N`);
                    spyIsEmtpy.mockRestore();
                  });

            test(`Your isEmpty method should return false when there is at
                  least one element in linked list.`,
                  () => {
                    linkedListExample.add('elm1');

                    expect(linkedListExample.isEmpty())
                    .toBeFalsy();
                  });

            test(`Your isEmpty method should return true when there are no
                  elements in linked list.`,
                  () => {
                    expect(linkedListExample.isEmpty())
                    .toBeTruthy();
                  });

            test(`Your LinkedList class should have an indexOf method.`,
                  () => {
                    const spyIndexOf = jest
                                       .spyOn(linkedListExample, 'indexOf')
                                       .mockImplementation(() => 'Index');
                    const spyIndexOfResult = linkedListExample.indexOf();

                    expect(spyIndexOf)
                    .toHaveBeenCalled();
                    expect(spyIndexOfResult)
                    .toEqual('Index');
                    spyIndexOf.mockRestore();
                  });

            test(`Your indexOf method should return the index of a given
                  element found in linked list.`,
                  () => {
                    linkedListExample.add('elm1');
                    linkedListExample.add('elm2');
                    linkedListExample.add('elm3');
                    console.log('-------');
                    expect(linkedListExample.indexOf('elm3'))
                    .toEqual(2);
                    console.log('-------');
                    
                  });

            test(`Your indexOf method should return -1 if the given element is
                  not found in linked list`,
                  () => {
                    linkedListExample.add('elm2');
                    linkedListExample.add('elm3');

                    expect(linkedListExample.indexOf('elm1'))
                    .toEqual(-1);
                  });

            test(`Your LinkedList class should have an elementAt method.`,
                  () => {
                    const spyElementAt = jest
                                         .spyOn(linkedListExample, 'elementAt')
                                         .mockImplementation(() => 'Location');
                    const spyElementAtResult = linkedListExample.elementAt();

                    expect(spyElementAt)
                    .toHaveBeenCalled();
                    expect(spyElementAtResult)
                    .toEqual('Location');
                    spyElementAt.mockRestore();
                  });

            test(`Your elementAt method should return the element found at a
                  given index in linked list.`,
                  () => {
                    linkedListExample.add('elm1');
                    linkedListExample.add('elm2');
                    linkedListExample.add('elm3');

                    expect(linkedListExample.elementAt(1))
                    .toEqual('elm2');
                  });

            test(`Your elementAt method should return undefined if the given
                  element is not found at a given index in linked list.`,
                  () => {
                    linkedListExample.add('elm1');
                    linkedListExample.add('elm2');

                    expect(linkedListExample.elementAt(2))
                    .toBeUndefined();
                  });
          });
