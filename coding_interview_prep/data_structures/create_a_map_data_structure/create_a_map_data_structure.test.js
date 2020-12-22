const Map = require('./index');
// make Map a mock constructor
// jest.mock('./index');

describe('The Map class should have the methods as in the description',
    () => {
      // beforeEach(() => {
      //     // Clear all instances and calls to constructor and all methods:
      //     Map.mockClear();
      // });

      test('The Map data structure should exist.',
          () => {
            const mapExample = new Map();
            expect(mapExample).toBeInstanceOf(Map);
          });

      test(`The Map object should have the following methods: add, remove, get,
            has, values, clear, and size.`,
          () => {
            const mapExample2 = new Map();

            // create mock methods
            const spyAdd    = jest
                              .spyOn(mapExample2, 'add')
                              .mockImplementation((key, value) => {
                                 return `Added {${key}: ${value}}`;
                               });

            const spyRemove = jest
                              .spyOn(mapExample2, 'remove')
                              .mockImplementation((key) => {
                                return `Removed ${key}`
                              });

            const spyGet    = jest
                              .spyOn(mapExample2, 'get')
                              .mockImplementation((key) => {
                                return `Got ${key}`;
                              });

            const spyHas    = jest
                              .spyOn(mapExample2, 'has')
                              .mockImplementation((key) => {
                                return `Map has ${key}`;
                              });

            const spyValues = jest
                              .spyOn(mapExample2, 'values')
                              .mockImplementation(() => {
                                return 'Values returned';
                              });

            const spyClear  = jest
                              .spyOn(mapExample2, 'clear')
                              .mockImplementation(() => {
                                return `Cleared`;
                              });

            const spySize   = jest
                              .spyOn(mapExample2, 'size')
                              .mockImplementation(() => {
                                return 'Sized';
                              });

            const addResult     = mapExample2.add('newKey', 'newValue');
            const removeResult  = mapExample2.remove('anotherKey');
            const getResult     = mapExample2.get('yetAnotherKey');
            const hasResult     = mapExample2.has('andYetAnotherKey');
            const valuesResult  = mapExample2.values();
            const clearResult   = mapExample2.clear();
            const sizeResult    = mapExample2.size();

            // check the method calls
            expect(spyAdd)
            .toHaveBeenCalledWith('newKey', 'newValue');
            expect(spyRemove)
            .toHaveBeenCalledWith('anotherKey');
            expect(spyGet)
            .toHaveBeenCalledWith('yetAnotherKey');
            expect(spyHas)
            .toHaveBeenCalledWith('andYetAnotherKey');

            expect(spyValues)
            .toHaveBeenCalled();
            expect(spyClear)
            .toHaveBeenCalled();
            expect(spySize)
            .toHaveBeenCalled();

            // check the result of the method calls
            // expect(addResult)
            // .toEqual(`Added {newKey: 'newValue'}`);
            // expect(removeResult)
            // .toEqual(`Removed anotherKey`);
            // expect(getResult)
            // .toEqual(`Got yetAnotherKey`);
            // expect(hasResult)
            // .toEqual(`Map has andYetAnotherKey`);
            // expect(valuesResult)
            // .toEqual(`Values returned`);
            // expect(clearResult)
            // .toEqual(`Cleared`);
            // expect(sizeResult)
            // .toEqual(`Sized`);

            // restore mock
            spyAdd.mockRestore();
            spyRemove.mockRestore();
            spyGet.mockRestore();
            spyHas.mockRestore();
            spyValues.mockRestore();
            spyClear.mockRestore();
            spySize.mockRestore();
          });

      test('The add method should add items to the map.',
          () => {
            const map1 = new Map();
            map1.add({'key1': 'val1'});

            expect(map1.collection)
            .toEqual({key1: 'val1'});
          });

      test(`The has method should return true for added items and false for
            absent items.`,
          () => {
            const map2 = new Map();
            map2.add({key1: 'val1'});

            expect(map2.has('key1'))
            .toBeTruthy();
            expect(map2.has('key2'))
            .toBeFalsy();
          });

      test(`The get method should accept keys as input and should return the
            associated values.`,
          () => {
            const map3 = new Map();
            map3.add({key3: 'val3'});

            expect(map3.get('key3'))
            .toEqual('val3')
          });

      test(`The values method should return all the values stored in the map as
            strings in an array.`,
          () => {
            const map4 = new Map();
            map4.add({key4: 'val4'});
            map4.add({key5: 'val5'});

            expect(map4.values())
            .toEqual(['val4', 'val5']);
          });

      test(`The clear method should empty the map and the size method should
            return the number of items present in the map.`,
          () => {
            const map5 = new Map();
            map5.add({key6: 'value6'});
            map5.add({key7: 'value7'});
            const clearResult = map5.clear();

            expect(clearResult)
            .toEqual(0)
            expect(map5.collection)
            .toEqual({});
          });
});
