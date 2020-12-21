const Set = require('./index');
const setExample = new Set();

describe('The Set class should be able to diff two Sets.',
  () => {
    test('Your Set class should have a difference method.',
      () => {
        const spyDifference = jest
                              .spyOn(setExample, 'difference')
                              .mockImplementation(() => 'Diff');
        const spyDifferenceResult = setExample.difference();

        expect(spyDifference).toHaveBeenCalled();
        expect(spyDifferenceResult).toEqual('Diff');
        spyDifference.mockRestore();
    });

    test('Your difference method should return the proper collection.',
      () => {
        const setA = new Set();
        setA.add('a');
        setA.add('b');
        setA.add('c');
        const setB = new Set();
        setB.add('a');
        setB.add('b');
        setB.add('d');
        setB.add('e');

        expect(setA.difference(setB)).toEqual(['c']);
    });
});
