// BINARY AGENTS
// Return an English translated sentence of the passed binary
// string. The binary string will be space separated.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

const binaryAgent = (str) => {
  let arr = [];
  str.split(' ').forEach(code => {
    arr.push(parseInt(code, 2));
  })
  return String.fromCharCode(...arr);
}

module.exports = binaryAgent;
