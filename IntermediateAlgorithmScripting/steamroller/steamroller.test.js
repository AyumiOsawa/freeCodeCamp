const steamrollArray = require('./index');

describe(`the following arrays should be correctly flattened`, () => {
  test(`steamrollArray([[["a"]], [["b"]]])
        should return ["a", "b"].`,
        () => {
          expect( steamrollArray([[["a"]], [["b"]]]) )
          .toEqual(["a", "b"]);
        }
      );

  test(`steamrollArray([1, [2], [3, [[4]]]])
        should return [1, 2, 3, 4].`,
        () => {
          expect( steamrollArray([1, [2], [3, [[4]]]]) )
          .toEqual([1, 2, 3, 4]);
        }
      );

  test(`steamrollArray([1, [], [3, [[4]]]])
        should return [1, 3, 4].`,
        () => {
          expect( steamrollArray([1, [], [3, [[4]]]]) )
          .toEqual([1, 3, 4]);
        }
      );

  test(`steamrollArray([1, {}, [3, [[4]]]])
        should return [1, {}, 3, 4].`,
        () => {
          expect( steamrollArray([1, {}, [3, [[4]]]]) )
          .toEqual([1, {}, 3, 4]);
        }
      );
})
