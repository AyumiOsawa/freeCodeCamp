// ADJACENCY LIST
//
// Create a social network as an undirected graph with 4 nodes/people named
// James, Jill, Jenny, and Jeff. There are edges/relationships between James
// and Jeff, Jill and Jenny, and Jeff and Jenny.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/adjacency-list
var undirectedAdjList = {
    James: ["Jeff"],
    Jill: ["Jenny"],
    Jenny: ["Jill", "Jeff"],
    Jeff: ["James", "Jenny"]
};

module.exports = undirectedAdjList;
