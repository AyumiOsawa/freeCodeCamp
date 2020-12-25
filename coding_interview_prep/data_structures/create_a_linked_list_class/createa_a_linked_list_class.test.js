const LinkedList = require('./index');
const linkedListExample = new LinkedList();

describe('The LinkedList class should have the following methods',
          () => {
            test(`Your LinkedList class should have a add method.`,
                  () => {
                    const spyAdd = jest
                                   .spyOn(linkedListExample, 'add')
                                   .mockImplementation(() => 'Added');
                    const spyAddResult = linkedListExample.add();

                    expect(spyAdd).toHaveBeenCalled();
                    expect(spyAddResult).toEqual('Added');
                    spyAdd.mockRestore();
                  });

            test(`Your LinkedList class should assign head to the first node
                  added.`,
                  () => {
                    linkedListExample.add('hooray');
                    expect(linkedListExample.hasOwnProperty('head'))
                    .toBeTruthy();
                  });

            test(`The previous node in your LinkedList class should have
                  reference to the newest node created.`,
                  () => {
                    linkedListExample.add('ahoi');

                    expect(linkedListExample)
                    .toBeInstanceOf(LinkedList);
                    const fisrtNode = linkedListExample.head();
                    expect(fisrtNode.next)
                    .toEqual({
                                element: 'ahoi',
                                next: null
                            });
                  });

            test(`The size of your LinkedList class should equal the amount of
                  nodes in the linked list.`,
                  () => {
                    expect(linkedListExample.size())
                    .toEqual(2);

                    linkedListExample.add('ho-ho-ho');
                    linkedListExample.add('Merry Christmas');

                    expect(linkedListExample.size())
                    .toEqual(4);
                  });
          });
