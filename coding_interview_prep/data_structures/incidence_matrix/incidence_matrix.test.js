const incMatUndirected = require('./index');

describe(`An undirected graph of 5 nodes iwth 4 edges should be represented
          cocrrectly in an incident matrix`,
          () => {
            test(`incMatUndirected should only contain five nodes.`,
                  () => {
                    expect(incMatUndirected)
                    .toHaveLength(5);
                  });

            test(`There should be a first edge between the first and second
                  node.`,
                  () => {
                    expect(incMatUndirected[0][0])
                    .toEqual(1);
                    expect(incMatUndirected[1][0])
                    .toEqual(1);
                  });

            test(`There should be a second edge between the second and third
                  node.`,
                  () => {
                    expect(incMatUndirected[1][1])
                    .toEqual(1);
                    expect(incMatUndirected[2][1])
                    .toEqual(1);
                  });

            test(`There should be a third edge between the third and fifth
                  node.`,
                  () => {
                    expect(incMatUndirected[2][2])
                    .toEqual(1);
                    expect(incMatUndirected[4][2])
                    .toEqual(1);
                  });

            test(`There should be a fourth edge between the second and fourth
                  node.`,
                  () => {
                    expect(incMatUndirected[1][3])
                    .toEqual(1);
                    expect(incMatUndirected[3][3])
                    .toEqual(1);
                  });
          });
