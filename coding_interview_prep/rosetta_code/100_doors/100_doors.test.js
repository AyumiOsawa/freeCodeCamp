const getFinalOpenedDoors = require('./index');

describe(`The getFinalOpenedDoors funmction should return the array of the open
          doors.`, () => {
            test(`getFinalOpenedDoors should be a function.`,
                  () => {
                    expect(typeof getFinalOpenedDoors)
                    .toEqual('function');
                  });

            test(`getFinalOpenedDoors should return an array.`,
                  () => {
                    expect( Array.isArray(getFinalOpenedDoors(100)) )
                    .toBeTruthy();
                  });

            test(`getFinalOpenedDoors should produce the correct result.`,
                  () => {
                    expect(getFinalOpenedDoors(100))
                    .toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
                  });
          })
