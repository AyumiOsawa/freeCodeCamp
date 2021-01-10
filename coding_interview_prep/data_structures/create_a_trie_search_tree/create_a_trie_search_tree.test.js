const {
  displayTree,
  Node,
  Trie
} = require('./index.js');
const exampleTrie = new Trie();

describe(`The Trie class should be able to create a new Trie instance and be
          able to perfom adding a new node, to check if a given string is a
          word, and to print all the entires.`,
          () => {
            test(`The Trie should have an add method.`,
                  () => {
                    const spyAdd = jest
                                   .spyOn(exampleTrie, 'add')
                                   .mockImplementation(() => {
                                             return 'Added';
                                           });
                    const spyAddResult = exampleTrie.add();

                    expect(spyAdd)
                    .toHaveBeenCalled();
                    expect(spyAddResult)
                    .toEqual('Added');
                    spyAdd.mockRestore();
                  });

            test(`The Trie should have a print method.`,
                  () => {
                    const spyPrint = jest
                                     .spyOn(exampleTrie, 'print')
                                     .mockImplementation(() => {
                                             return 'Print';
                                           });
                    const spyPrintResult = exampleTrie.print();

                    expect(spyPrint)
                    .toHaveBeenCalled();
                    expect(spyPrintResult)
                    .toEqual('Print');
                    spyPrint.mockRestore();
                  });

            test(`The Trie should have an isWord method.`,
                  () => {
                    const spyIsWord = jest
                                      .spyOn(exampleTrie, 'isWord')
                                      .mockImplementation(() => {
                                             return 'Yes/No';
                                           });
                    const spyIsWordResult = exampleTrie.isWord();

                    expect(spyIsWord)
                    .toHaveBeenCalled();
                    expect(spyIsWordResult)
                    .toEqual('isWord');
                    spyIsWord.mockRestore();
                  });

            test(`The print method should return all items added to the trie as
                  strings in an array.`,
                  () => {
                    exampleTrie.add('bird');
                    exampleTrie.add('cat');
                    exampleTrie.add('dog');

                    expect(exampleTrie.print())
                    .toEqual(['bird', 'cat', 'dog']);
                  });

            test(`The isWord method should return true only for words added to
                  the trie and false for all other words.`,
                  () => {
                    expect(exampleTrie.isWord('cat'))
                    .toBeTruhty();
                    expect(exampleTrie.isWord('wolf'))
                    .toBeFalsy();
                  });
          });
