const adjMatUndirected = require('./index');

describe(`A graph with 5 nodes should be represented as a adjacency matrix.`,
          () => {
            test(`undirectedAdjList should only contain five nodes.`,
                  () => {
                    expect(adjMatUndirected)
                    .toHaveLength(5);
                  });

            test(`There should be an edge between the first and fourth node.`,
                  () => {
                    expect(adjMatUndirected[0][3])
                    .toEqual(1);
                    expect(adjMatUndirected[3][0])
                    .toEqual(1);
                  });

            test(`There should be an edge between the first and third node.`,
                  () => {
                    expect(adjMatUndirected[0][2])
                    .toEqual(1);
                    expect(adjMatUndirected[2][0])
                    .toEqual(1);
                  });

            test(`There should be an edge between the third and fifth node.`,
                  () => {
                    expect(adjMatUndirected[2][4])
                    .toEqual(1);
                    expect(adjMatUndirected[4][2])
                    .toEqual(1);
                  });

            test(`There should be an edge between the fourth and fifth node.`,
                  () => {
                    expect(adjMatUndirected[3][4])
                    .toEqual(1);
                    expect(adjMatUndirected[4][3])
                    .toEqual(1);
                  });
          });
