const bfs = require('./index');

describe(`The function bfs should be able to perform breadth first search.`,
          () => {
            test(`The input graph [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1],
                  [0, 0, 1, 0]] with a start node of 1 should return {0: 1,
                  1: 0, 2: 1, 3: 2}`,
                  () => {
                    expect(bfs([
                        [0, 1, 0, 0],
                        [1, 0, 1, 0],
                        [0, 1, 0, 1],
                        [0, 0, 1, 0]], 1))
                    .toEqual({0: 1, 1: 0, 2: 1, 3: 2});
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0],
                  [0, 0, 0, 0]] with a start node of 1 should return {0: 1,
                  1: 0, 2: 1, 3: Infinity}`,
                  () => {
                    expect(bfs([
                      [0, 1, 0, 0],
                      [1, 0, 1, 0],
                      [0, 1, 0, 0],
                      [0, 0, 0, 0]], 1))
                    .toEqual({0: 1, 1: 0, 2: 1, 3: Infinity});
                  });

            test(`The input graph [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1],
                  [0, 0, 1, 0]] with a start node of 0 should return {0: 0,
                  1: 1, 2: 2, 3: 3}`,
                  () => {
                    expect(bfs([
                      [0, 1, 0, 0],
                      [1, 0, 1, 0],
                      [0, 1, 0, 1],
                      [0, 0, 1, 0]], 0))
                    .toEqual({0: 0, 1: 1, 2: 2, 3: 3});
                  });

            test(`The input graph [[0, 1], [1, 0]] with a start node of 0
                  should return {0: 0, 1: 1}`,
                  () => {
                    expect(bfs([
                      [0, 1],
                      [1, 0]], 0))
                    .toEqual({0: 0, 1: 1});
                  });
          });
