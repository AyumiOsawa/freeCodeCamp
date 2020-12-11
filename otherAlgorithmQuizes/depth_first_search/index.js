/**
 * Write a fucntion that takes:
 * - graph: A 2D array representing an graph adjancency matrix (https://www.javatpoint.com/graph-theory-graph-representations#:~:text=In%20graph%20theory%2C%20a%20graph,to%20it%20by%20an%20edge).)
 * - start: Int reference to an initial vertex
 * - end: Int reference to an end vertex
 * And returns true iff there is a path between start and end in the graph defined by graph
 **/

// MEMO:
// row (index of first level array) -> from
// column (index of second level arrays) -> to

function checkPath(graph, start, end) {
  let route = [];

  const lookForTheNextRoute = (currentNode) => {
    if (currentNode === end) {
      route.unshift(currentNode);
      return true;
    } else {
      for (let nextNode = 0; nextNode < graph[currentNode].length; nextNode++) {
        if (graph[currentNode][nextNode] === 1 &&
            lookForTheNextRoute(nextNode)) {
          route.unshift(currentNode);
          return true;
        };
      };
    };
    route = [];
    return false;
  };

  return [lookForTheNextRoute(start), route];
};

let graphA = [
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0]
]

let testCount = 0;

function test(output, result) {
  if (output[0] == result[0] &&
      result[1].every((elm, index) => {
        return output[1][index] === elm;
      })) {
    console.log(testCount++ + " Passed.")
  } else {
    console.log(testCount++ + " Failed. Returned " + output + " but expected " + result);
  }
}

test(checkPath(graphA, 0, 1), [true, [0,1]]); // True 0 -> 1
test(checkPath(graphA, 1, 0), [false, []]); // False
test(checkPath(graphA, 0, 3), [true, [0,1,3]]); // True 0 -> 1 -> 3
test(checkPath(graphA, 0, 4), [true, [0,2,4]]); // True 0 -> 2 -> 4
test(checkPath(graphA, 4, 2), [false, []]); // Flase
