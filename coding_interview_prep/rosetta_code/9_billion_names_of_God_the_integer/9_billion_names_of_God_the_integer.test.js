const numberOfNames = require('./index');

describe(`The function numberOfNames should returns the sum of the  n -th row.`,
          () => {
            test(`numberOfNames should be function.`,
                  () => {
                    expect(typeof numberOfNames)
                    .toEqual('function');
                  });

            test(`numberOfNames(5) should equal 7.`,
                  () => {
                    expect(numberOfNames(5))
                    .toEqual(7);
                  });

            test(`numberOfNames(12) should equal 77.`,
                  () => {
                    expect(numberOfNames(12))
                    .toEqual(77);
                  });

            test(`numberOfNames(18) should equal 385.`,
                  () => {
                    expect(numberOfNames(18))
                    .toEqual(385);
                  });

            test(`numberOfNames(23) should equal 1255.`,
                  () => {
                    expect(numberOfNames(23))
                    .toEqual(1255);
                  });

            test(`numberOfNames(42) should equal 53174.`,
                  () => {
                    expect(numberOfNames(42))
                    .toEqual(53174);
                  });

            test(`numberOfNames(123) should equal 2552338241.`,
                  () => {
                    expect(numberOfNames(123))
                    .toEqual(2552338241);
                  });
          });
