const HashTable = require('./index');
const hashTableExample = new HashTable();

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
                      expect(typeof hashTableExample.add)
                      .toEqual('function');
                    }
                  );

              test('The HashTable should have a remove method.',
                    () => {
                      expect(typeof hashTableExample.remove)
                      .toEqual('function');
                    }
                  );

              test('The HashTable should have a lookup method..',
                    () => {
                      expect(typeof hashTableExample.lookup)
                      .toEqual('function');
                    }
                  );

              test(`The add method should add key value pairs and the lookup
                    method should return the values associated with a given
                    key.`,
                    () => {
                      hashTableExample.add('key1', 'value1');
                      const hashKey1 = hashTableExample.hash('key1');

                      expect(hashTableExample.collection)
                      .toEqual( {hashKey1: [{key1: value1}]} );

                      expect(hashTableExample.lookup('key1'))
                      .toEqual('value1');
                      expect(hashTableExample.lookup('key2'))
                      .toBeNull();
                    }
                  );
          })
