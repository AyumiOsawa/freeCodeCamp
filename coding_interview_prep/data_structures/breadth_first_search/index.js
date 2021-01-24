// BREADTH FIRST SEARCH
//
// Write a function bfs() that takes an adjacency matrix graph
// (a two-dimensional array) and a node label root as parameters. The node
// label will just be the integer value of the node between 0 and n - 1, where
// n is the total number of nodes in the graph.
//
// Your function will output a JavaScript object key-value pairs with the node
// and its distance from the root. If the node could not be reached, it should
// have a distance of Infinity.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/breadth-first-search

function bfs(graph, root) {
  var nodesLen = {};
  // set the default values of nodesLen
  for (let i = 0; i < graph.length; i++) {
    if (i !== root) {
      nodesLen[i] = +Infinity;
    } else {
      nodesLen[i] = 0;
    }
  }


  let visited = [root];
  const getNextNodes = (edgeArray, edgeNum) => {
    if (edgeArray.length === 0) {
      return [];
    }
    // check the next nodes
    console.log('check:',edgeArray)
    let nextNodes = [];
    edgeArray.forEach((nextNode, index) => {
      if(nextNode === 1 && !visited.includes(index)) {
        nextNodes.push(index);
        visited.push(index);
      }
    });
    console.log('next nodes are',nextNodes)
    // keep track of the edges
    nextNodes.forEach(nextNode => {
      if(nodesLen[nextNode] === +Infinity) {
        nodesLen[nextNode] = edgeNum;
      } else {
        nodesLen[nextNode] += edgeNum;
      }
    });
    return nextNodes;
  };

  let heap = [];
  let edgeNum = 1;
  let nextNodes = getNextNodes(graph[root], edgeNum);
  edgeNum++;
  while (nextNodes.length !== 0) {
    heap = [];
    nextNodes.forEach(nextNode => {
      heap = heap.concat(getNextNodes(graph[nextNode], edgeNum));
    })
    edgeNum++;
    nextNodes = [...heap];
  }
  return nodesLen;
};

module.exports = bfs;
