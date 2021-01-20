// ADJACENCY MATRIX
//
// Create an adjacency matrix of an undirected graph with five nodes. This
// matrix should be in a multi-dimensional array. These five nodes have
// relationships between the first and fourth node, the first and third node,
// the third and fifth node, and the fourth and fifth node. All edge weights
// are one.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/adjacency-matrix

const adjMatUndirected = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 1, 0]
];

module.exports = adjMatUndirected;
