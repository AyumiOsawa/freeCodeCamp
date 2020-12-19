const Set = require('./index');
const setExample = new Set();

describe('Set class should have the following methods',
  () => {
  test('Your Set class should have an add method.',
    () => {
      const spyAdd = jest
                     .spyOn(setExample, 'add')
                     .mockImplementation(() => 'Added');
      const spyAddResult = setExample.add();

      expect(spyAdd).toHaveBeenCalled();
      expect(spyAddResult).toBe('Added');
      spyAdd.mockRestore();
    });

  test('Your Set class should have a remove method.',
    () => {
      const spyRemove = jest
                     .spyOn(setExample, 'remove')
                     .mockImplementation(() => 'Removed');
      const spyRemoveResult = setExample.remove();

      expect(spyRemove).toHaveBeenCalled();
      expect(spyRemoveResult).toBe('Removed');
      spyRemove.mockRestore();
    });

  test('Your Set class should have a size method.',
    () => {
      const spySize = jest
                     .spyOn(setExample, 'size')
                     .mockImplementation(() => 'Sized');
      const spySizeResult = setExample.size();

      expect(spySize).toHaveBeenCalled();
      expect(spySizeResult).toBe('Sized');
      spySize.mockRestore();
    });
});


describe('Methods in the Set class should function as in the description',
  () => {
    beforeEach(() => {
      setExample.dictionary = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        e: 'e'
      };
    });

    test('Your add method should not add duplicate values.',
      () => {
        setExample.add('b');
        expect(setExample.dictionary).toEqual({
                                                a: 'a',
                                                b: 'b',
                                                c: 'c',
                                                d: 'd',
                                                e: 'e'
                                              });
      }
    );

    test(`Your add method should return true when a value has been successfully
          added.`,
        () => {
          expect(setExample.add('k')).toBeTruthy();
        }
    );

    test(`Your add method should return false when a duplicate value is added.`,
        () => {
          expect(setExample.add('b')).toBeFalsy();
        }
    );

    test(`Your remove method should only remove items that are present in the
          set.`,
          () => {
            expect(setExample.remove('a')).toBeTruthy();
            expect(setExample.remove('a')).toBeFalsy();
          }
    );

    test(`Your remove method should remove the given item from the set.`,
          () => {
            setExample.remove('a');
            expect(setExample.dictionary).toEqual({
                                                    b: 'b',
                                                    c: 'c',
                                                    d: 'd',
                                                    e: 'e'
                                                  });
          }
    );

    test(`The size method should return the number of elements in the
          collection.`,
        () => {
          expect(setExample.size()).toBe(5);
        }
    );
  }
);
