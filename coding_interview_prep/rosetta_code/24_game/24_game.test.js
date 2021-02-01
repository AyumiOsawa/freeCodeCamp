const solve24 = require('./index');

describe(`The solve24 should find out the arithmetic expression that consists
          of imput numbers and is equals to 24 `,
          () => {
            test(`solve24 should be a function.`,
                  () => {
                    expect(typeof solve24)
                    .toEqual('function');
                  });

            test(`solve24("4878") should return (7-8/8)*4 or 4*(7-8/8)`,
                  () => {
                    const regex1 = new RegExp('(7-8/8)*4');
                    const regex2 = new RegExp('4*(7-8/8)');
                    const combinedRegex12 = new RegExp(regex1.source +
                                                     '|' +
                                                     regex2.source);
                    expect(solve24("4878"))
                    .toMatch(combinedRegex12);
                  });

            test(`solve24("1234") should return any arrangement of 1*2*3*4`,
                  () => {
                    const regex3 = new RegExp('1*2*3*4');
                    expect(solve24("1234"))
                    .toMatch(regex3);
                  });

            test(`solve24("6789") should return (6*8)/(9-7) or (8*6)/(9-7)`,
                  () => {
                    const regex4 = new RegExp('(6*8)/(9-7)');
                    const regex5 = new RegExp('(8*6)/(9-7)');
                    const combinedRegex45 = new RegExp(regex4.source +
                                                       '|' +
                                                       regex5.source);
                    expect(solve24("6789"))
                    .toMatch(combinedRegex45);
                  });

            test(`solve24("1127") should return a permutation of (1+7)*(1+2)`,
                  () => {
                    const regex6 = new RegExp('(1+7)*(1+2)');
                    expect(solve24("1127"))
                    .toMatch(regex6);
                  });
          });
