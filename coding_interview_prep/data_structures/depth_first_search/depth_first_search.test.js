const dfs = require('./index');

describe(`The function dfs should be able to perform depth first search.`,
          () => {
            test(`The input graph [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1],
                  [0, 0, 1, 0]] with a start node of 1 should return an array
                  with 0, 1, 2, and 3.`,
                  () => {
                    expect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 1, 0],
                      [0, 1, 0, 1],
                      [0, 0, 1, 0]], 1))
                    .toEqual([0, 1, 2, 3]);
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1],
                  [0, 0, 1, 0]] with a start node of 1 should return an array
                  with four elements.`,
                  () => {
                    expect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 1, 0],
                      [0, 1, 0, 1],
                      [0, 0, 1, 0]], 1))
                    .toHaveLength(4);
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0],
                  [0, 0, 0, 0]] with a start node of 3 should return an array
                  with 3.`,
                  () => {
                    exoect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 1, 0],
                      [0, 1, 0, 0],
                      [0, 0, 0, 0]], 3))
                    .toEqual([3]);
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0],
                  [0, 0, 0, 0]] with a start node of 3 should return an array
                  with one element.`,
                  () => {
                    exoect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 1, 0],
                      [0, 1, 0, 0],
                      [0, 0, 0, 0]], 3))
                    .toHaveLength([1]);
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1],
                  [0, 0, 1, 0]] with a start node of 3 should return an array
                  with 2 and 3.`,
                  () => {
                    expect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 0, 0],
                      [0, 0, 0, 1],
                      [0, 0, 1, 0]], 3))
                    .toEqual([2, 3]);
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1],
                  [0, 0, 1, 0]] with a start node of 3 should return an array
                  with two elements.`,
                  () => {
                    expect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 0, 0],
                      [0, 0, 0, 1],
                      [0, 0, 1, 0]], 3))
                    .toHaveLength(1);
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1],
                  [0, 0, 1, 0]] with a start node of 0 should return an array
                  with 0 and 1.`,
                  () => {
                    expect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 0, 0],
                      [0, 0, 0, 1],
                      [0, 0, 1, 0]], 0))
                    .toEqual([0, 1]);
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1],
                  [0, 0, 1, 0]] with a start node of 0 should return an array
                  with two elements.`,
                  () => {
                    expect(dfs([
                      [0, 1, 0, 0],
                      [1, 0, 0, 0],
                      [0, 0, 0, 1],
                      [0, 0, 1, 0]], 0))
                    .toHaveLength(2);
                  });
          });
