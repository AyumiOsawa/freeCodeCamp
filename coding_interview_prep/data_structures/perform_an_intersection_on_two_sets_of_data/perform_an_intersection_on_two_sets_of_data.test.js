const Set = require('./index');
const setExample = new Set();

describe('The Set class should be able to perform intersection on two sets',
  () => {
    test('Your Set class should have a intersection method.',
      () => {
        const spyIntersection = jest
                                .spyOn(setExample, 'intersection')
                                .mockImplementation(() => 'Intersection');
        const spyIntersectionResult = setExample.intersection();

        expect(spyIntersection).toHaveBeenCalled();
        expect(spyIntersectionResult).toEqual('Intersection');
        spyIntersection.mockRestore();
      });

    test('The proper collection should be returned.',
      () => {
        setExample.add('a');
        setExample.add('b');
        setExample.add('c');

        const setExample2 = new Set();
        setExample2.add('a');
        setExample2.add('d');
        setExample2.add('b');
        setExample2.add('e');
        expect(setExample.intersection(setExample2))
        .toEqual(['a', 'b']);
      })
  }
);
