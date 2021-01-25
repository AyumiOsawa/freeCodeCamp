// DEPTH FIRST SEARCH
//
// Write a function dfs() that takes an undirected, adjacency matrix graph and
// a node label root as parameters. The node label will just be the numeric
// value of the node between 0 and n - 1, where n is the total number of nodes
// in the graph.
//
// Your function should output an array of all nodes reachable from root.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/depth-first-search
function dfs(graph, root) {
  let visited = [];

  const visitNodes = (startPoint, visited) => {
    visited.push(startPoint);
    let stack = [];
    graph[startPoint].forEach((node, index) => {
      if (node === 1) {
        stack.unshift(index);
      }
    });
    stack.forEach(nextNodeIndex => {
      if (!visited.includes(nextNodeIndex)) {
        return visitNodes(nextNodeIndex, visited);
      }
    })
  };

  visitNodes(root, visited);
  return visited;
}

module.exports = dfs;
