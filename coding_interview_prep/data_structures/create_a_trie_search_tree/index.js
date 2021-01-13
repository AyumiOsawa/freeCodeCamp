// CREATE A TRIE SEARCH TREE
//
// Let's create a trie to store words. It will accept words through an add
// method and store these in a trie data structure. It will also allow us to
// query if a given string is a word with an isWord method, and retrieve all
// the words entered into the trie with a print method. isWord should return a
// boolean value and print should return an array of all these words as string
// values. In order for us to verify that this data structure is implemented
// correctly, we've provided a Node structure for each node in the tree. Each
// node will be an object with a keys property which is a JavaScript Map
// object. This will hold the individual letters that are valid keys of each
// node. We've also created an end property on the nodes that can be set to
// true if the node represents the termination of a word.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-trie-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  this.root = new Node();

  this.add = function(newWord) {
    const addLetter = (letter, currentNode, letters, index) => {
      const lastLetter = letters[letters.length - 1];
      const isLastLetter = index + 1 === letters.length;
      if(isLastLetter &&                            // the last letter
         currentNode.keys.has(letter)) {            // the letter exists
        const lastNode = currentNode.keys.get(letter);
        lastNode.setEnd();
      } else if (isLastLetter &&                    // the last letter
                 !currentNode.keys.has(letter)) {   // the letter does NOT exist
        currentNode.keys.set(letter, new Node());
        const lastNode = currentNode.keys.get(letter);
        lastNode.setEnd();
      } else if (!isLastLetter &&                   // NOT the last letter
                 !currentNode.keys.has(letter)) {   // the letter does NOT exist
        currentNode.keys.set(letter, new Node());
      };
    };

    const letters = newWord.split('');
    let currentNode = this.root;

    letters.forEach((letter, index, letters) => {
      addLetter(letter, currentNode, letters, index);
      currentNode = currentNode.keys.get(letter) ;
    });
  };

  this.print = function() {
    const allWords = [];
    const retrieveWord = (node, currentWord) => {
      node.keys.forEach((childNode, letter) => {
        if (node === this.root) {  // comes back to the root node
          currentWord = '';
        };
        if(childNode.isEnd()) {   // the last letter
          allWords.push(currentWord + letter);
        };
        if(childNode.keys.size > 0) {
          retrieveWord(childNode, currentWord + letter);
        };
      });
    };
    const node = this.root;
    let currentWord = '';
    retrieveWord(node, currentWord);
    console.log('result:',allWords);
    return allWords;
  };

  this.isWord = function(testWord) {
    const letters = testWord.split('');
    console.log('letters',letters);

    const checkIfLetterExist = (node, index = 0) => {
      const letter = letters[index];
      console.log('letter',letter);
      console.log('index', index);
      if (node.keys.has(letter) &&
          node.keys.get(letter).isEnd() &&     // leaf node in the tree
          index === letters.length ) {         // index === the length of the word + end node
        console.log('the word exist!');
        return true;
      } else if (node.keys.has(letter)) {
        index++;
        return checkIfLetterExist(node.keys.get(letter), index);
      } else {
        return false;
      }
    };

    return checkIfLetterExist(this.root);
  };



};

const t = new Trie();
t.add('ops')
t.add('opaque')
t.add('option')
t.add('operation')
t.add('weehee')
console.log(t.isWord('ops'));
// const last = t.root.keys.get('o').keys.get('p');
// console.log(t.root.keys.get('o').keys.get('p'));
// console.log(t.root.keys.get('o').keys.get('p').isEnd());
// console.log('==== print ====');
// t.print();

// module.exports = {
//   displayTree,
//   Node,
//   Trie
// };
