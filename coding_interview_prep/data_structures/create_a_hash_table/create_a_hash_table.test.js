const HashTable = require('./index');
const hashTableExample = new HashTable();
let called = 0;
const hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

describe(`The HashTable class should have the following methods implemented and
          they should perform each method correctly`,
          () => {
              beforeEach(() => {
                // reset the collection
                hashTableExample.collection = {};
              });

              test('The HashTable data structure should exist.',
                    () => {
                      expect(hashTableExample)
                      .toBeInstanceOf(HashTable);
                    }
                  );

              test('The HashTable should have an add method.',
                    () => {
                      expect(hashTableExample.add)
                      .toBeTruthy();
                      expect(typeof hashTableExample.add)
                      .toEqual('function');
                    }
                  );

              test('The HashTable should have a remove method.',
                    () => {
                      expect(hashTableExample.remove)
                      .toBeTruthy();
                      expect(typeof hashTableExample.remove)
                      .toEqual('function');
                    }
                  );

              test('The HashTable should have a lookup method..',
                    () => {
                      expect(hashTableExample.lookup)
                      .toBeTruthy();
                      expect(typeof hashTableExample.lookup)
                      .toEqual('function');
                    }
                  );

              test(`The add method should add key value pairs and the lookup
                    method should return the values associated with a given
                    key.`,
                    () => {
                      hashTableExample.add('key1', 'value1');
                      const hashKey1 = hash('key1');

                      expect(hashTableExample.collection)
                      .toEqual( {[hashKey1]: {
                                              key: 'key1',
                                              value: 'value1',
                                              next: null
                                            }} );

                      expect(hashTableExample.lookup('key1'))
                      .toEqual('value1');
                      expect(hashTableExample.lookup('key2'))
                      .toBeNull();
                    }
                  );

              test(`The remove method should accept a key as input and should
                    remove the associated key value pair.`,
                    () => {
                      hashTableExample.add('key2', 'value2');
                      const hashKey2 = hash('key2');

                      expect(hashTableExample.collection)
                      .toEqual( { [hashKey2]: {
                                              key: 'key2',
                                              value: 'value2',
                                              next: null
                                            }} );

                      hashTableExample.remove('key2');
                      expect(hashTableExample.collection)
                      .toEqual({});
                    }
                  );

              test(`The hash table should handle collisions.`,
                    () => {
                      hashTableExample.add('key4', 'value4');
                      hashTableExample.add('key4', 'value5');
                      const hashKey4 = hash('key4');

                      expect(hashTableExample.collection)
                      .toEqual( {[hashKey4]: {
                                          key: 'key4',
                                          value: 'value4',
                                          next: {
                                                  key: 'key4',
                                                  value: 'value5',
                                                  next: null
                                                }
                                        }} );
                    }
                  );
          })
