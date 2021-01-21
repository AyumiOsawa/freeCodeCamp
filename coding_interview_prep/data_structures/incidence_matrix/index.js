// INCIDENCE MATRIX
//
// Create an incidence matrix of an undirected graph with five nodes and four
// edges. This matrix should be in a multi-dimensional array.
//
// These five nodes have the following relationships. The first edge is between
// the first and second node. The second edge is between the second and third
// node. The third edge is between the third and fifth node. The fourth edge is
// between the fourth and second node. All edge weights are one and the edge
// order matters.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/incidence-matrix

var incMatUndirected = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
];

module.exports = incMatUndirected;
