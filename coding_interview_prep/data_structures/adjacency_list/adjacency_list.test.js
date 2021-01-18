const undirectedAdjList = require('./index');

describe(`A social network of the 4 people should be represente in a adjacency
          list.`,
          () => {
            test(`undirectedAdjList should only contain four nodes.`,
                  () => {
                    expect(Object.keys(undirectedAdjList).length)
                    .toEqual(4);
                  });

            test(`There should be an edge between Jeff and James.`,
                  () => {
                    expect(undirectedAdjList.Jeff)
                    .toContain("James");
                    expect(undirectedAdjList.James)
                    .toContain("Jeff");
                  });

            test(`There should be an edge between Jill and Jenny.`,
                  () => {
                    expect(undirectedAdjList.Jill)
                    .toContain("Jenny");
                    expect(undirectedAdjList.Jenny)
                    .toContain("Jill");
                  });

            test(`There should be an edge between Jeff and Jenny.`,
                  () => {
                    expect(undirectedAdjList.Jeff)
                    .toContain("Jenny");
                    expect(undirectedAdjList.Jenny)
                    .toContain("Jeff");
                  })
          });
