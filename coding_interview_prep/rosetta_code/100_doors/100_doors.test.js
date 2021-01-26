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
                    .tobeTruthy();
                  });

            test(`getFinalOpenedDoors should produce the correct result.`,
                  () => {
                    expect(getFinalOpenedDoors(100))
                    .toEqual([
                      4, 6, 9, 10, 14, 15, 16, 21, 22, 25, 33, 34, 35, 36, 38,
                      39, 40, 46, 49, 51, 54, 55, 56, 57, 58, 60, 62, 64, 65,
                      69, 74, 77, 81, 82, 84, 85, 86, 87, 88, 90, 91, 93, 94,
                      95, 96, 100
                    ]);
                  });
          })
