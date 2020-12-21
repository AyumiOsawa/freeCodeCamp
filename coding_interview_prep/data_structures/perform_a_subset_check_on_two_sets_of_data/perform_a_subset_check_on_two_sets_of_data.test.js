const Set = require('./index');
const setExample = new Set();

describe('The Set class should be able to perform subset check on two Sets.',
  () => {
    test('Your Set class should have a isSubsetOf method.',
      () => {
        const spyIsSubsetOf = jest
                              .spyOn(setExample, 'isSubsetOf')
                              .mockImplementation(() => 'SubsetCheck');
        const spyIsSubsetOfResult = setExample.isSubsetOf();

        expect(spyIsSubsetOf).toHaveBeenCalled();
        expect(spyIsSubsetOfResult).toEqual('SubsetCheck');
        spyIsSubsetOf.mockRestore();
    });

    test(`['a', 'b'].isSubsetOf(['a', 'b', 'c', 'd']) should return true`,
      () => {
        const set1 = new Set();
        set1.add('a');
        set1.add('b');
        const set2 = new Set();
        set2.add('a');
        set2.add('b');
        set2.add('c');
        set2.add('d');

        expect(set1.isSubsetOf(set2)).toBeTruthy();
    });

    test(`['a', 'b', 'c'].isSubsetOf(['a', 'b']) should return false`,
      () => {
        const set3 = new Set();
        set3.add('a');
        set3.add('b');
        set3.add('c');
        const set4 = new Set();
        set4.add('a');
        set4.add('b');

        expect(set3.isSubsetOf(set4)).toBeFalsy();
    });

    test(`[].isSubsetOf([]) should return true`,
      () => {
        const set5 = new Set();
        const set6 = new Set();

        expect(set5.isSubsetOf(set6)).toBeTruthy();
    });

    test(`['a', 'b'].isSubsetOf(['c', 'd']) should return false`,
      () => {
        const set7 = new Set();
        set7.add('a');
        set7.add('b');
        const set8 = new Set();
        set8.add('c');
        set8.add('d');

        expect(set7.isSubsetOf(set8)).toBeFalsy();
    });
});
