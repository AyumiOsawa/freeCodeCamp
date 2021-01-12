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
      // console.log('letter',letter);
      const lastLetter = letters[letters.length - 1];
      const isLastLetter = index + 1 === letters.length;
      console.log('is last?', isLastLetter);
      // console.log('currentNode',currentNode);
      // const newNode = new Node();
      // currentNode.keys.set(letter, newNode);

      if(isLastLetter &&                            // the last letter
         currentNode.keys.has(letter)) {            // the letter exists
        // console.log(letter, 'is the last letter');
        const lastNode = currentNode.keys.get(letter);
        lastNode.setEnd();
      } else if (isLastLetter &&                    // the last letter
                 !currentNode.keys.has(letter)) {   // the letter does NOT exist
        currentNode.keys.set(letter, null);
        currentNode.setEnd();
      } else if (!isLastLetter &&                   // NOT the last letter
                 !currentNode.keys.has(letter)) {   // the letter does NOT exist
        const newNode = new Node();
        currentNode.keys.set(letter, newNode);
      };
    };
    addLetter.bind(this);
    const letters = newWord.split('');
    let currentNode = this.root;

    letters.forEach((letter, index, letters) => {
      addLetter(letter, currentNode, letters, index);
      currentNode = currentNode.keys.get(letter) ;
    });
  };

  this.print = function() {
    const allWords = [];

    const retrieveWord = (tree = this.root, currentWord = '') => {
      tree.keys.forEach((node, letter) => {
        currentWord += letter;
        if(node === null) {
          return;
        };
        if(node.isEnd()) {
          allWords.push(currentWord);
        };
        if(node.keys.size === 0) {
          return;
        };
        retrieveWord(node, currentWord);
      });
    };

    retrieveWord();
    console.log('result:',allWords);
    return;
  };
};

const t = new Trie();
t.add('ops')
t.add('oops')
t.add('weehee')
// console.log(t.root.keys.get('o').keys.get('o'));
t.print();

// module.exports = {
//   displayTree,
//   Node,
//   Trie
// };
