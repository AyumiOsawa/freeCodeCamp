const Set = require('./index');
const setExample = new Set();

describe('The Set class should be able to union two sets',
  () => {
    beforeEach(() => {
      setExample.dictionary = { a: true, b:true, c:true};
    })


    test('Your Set class should have a union method.',
      () => {
          const spyUnion = jest
                           .spyOn(setExample,'union')
                           .mockImplementation(() => 'Union')
          const spyUnionResult = setExample.union(['b', 'c']);
          expect(spyUnion).toHaveBeenCalled();
          expect(setExample.union()).toEqual('Union');
          spyUnion.mockRestore();
      });

      test(`The union of ["a", "b", "c"] and ["c", "d"] should return ["a",
        "b", "c", "d"].`,
        () => {
          expect(setExample.union(["c", "d"]))
          .toEqual(["a", "b", "c", "d"]);
        });
});
