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
  let arrived = false;

  const lookForTheNextRoute = (currentRow) => {
    const activeNodes = [];
    // if current node is an ending node, return true.
    if (currentRow === end) {
      arrived = true;
      return;
    } else {
      // if there are route(s) to anothre node(s), recursively use this function.
      for (let node = 0; node < graph[currentRow].length; node++) {
        if (arrived) {
          break;
        } else if (graph[currentRow][node] === 1) {
          lookForTheNextRoute(node);
        };
      };
    };

  };

  lookForTheNextRoute(start);

  return arrived;
}; // end of function

let graphA = [
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0]
]

let testCount = 0;

function test(output, result) {
  if (output == result) {
    console.log(testCount++ + " Passed.")
  } else {
    console.log(testCount++ + " Failed. Returned " + output + " but expected " + result);
  }
}

test(checkPath(graphA, 0, 1), true); // True 0 -> 1
test(checkPath(graphA, 1, 0), false); // False
test(checkPath(graphA, 0, 3), true); // True 0 -> 1 -> 3
test(checkPath(graphA, 0, 4), true); // True 0 -> 2 -> 4
test(checkPath(graphA, 4, 2), false); // Flase
