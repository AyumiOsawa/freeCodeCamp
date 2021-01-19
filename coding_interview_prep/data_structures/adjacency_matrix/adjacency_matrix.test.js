const adjMatUndirected = require('./index');

describe(`A graph with 5 nodes should be represented as a adjacency matrix.`,
          () => {
            test(`undirectedAdjList should only contain five nodes.`,
                  () => {
                    expect(undirectedAdjList.length)
                    .toEqual(5)
                  });

            test(`There should be an edge between the first and fourth node.`,
                  () => {
                    expect(undirectedAdjList[0])
                    .toContain(3);
                    expect(undirectedAdjList[3])
                    .toContain(0);
                  });

            test(`There should be an edge between the first and third node.`,
                  () => {
                    expect(undirectedAdjList[0])
                    .toContain(2);
                    expect(undirectedAdjList[2])
                    .toContain(0);
                  });

            test(`There should be an edge between the third and fifth node.`,
                  () => {
                    expect(undirectedAdjList[2])
                    .toContain(4);
                    expect(undirectedAdjList[4])
                    .toContain(2);
                  });

            test(`There should be an edge between the fourth and fifth node.`,
                  () => {
                    expect(undirectedAdjList[3])
                    .toContain(5);
                    expect(undirectedAdjList[5])
                    .toContain(3);
                  });
          });
