// CREATE A HASH TABLE
//
// Let's create the basic functionality of a hash table. We've created a naive
// hashing function for you to use. You can pass a string value to the function
// hash and it will return a hashed value you can use as a key for storage.
// Store items based on this hashed value in the this.collection object. Create
// these three methods: add, remove, and lookup. The first should accept a key
// value pair to add to the hash table. The second should remove a key-value
// pair when passed a key. The third should accept a key and return the
// associated value or null if the key is not present.
//
// Be sure to write your code to account for collisions!
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-hash-table

var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

var HashTable = function() {
  this.collection = {};

  this.findLastNode = (linkedList) => {
    if(linkedList.next === null) {
      return linkedList;
    } else {
      this.findLastNode(linkedList.next);
    }
  }; 

  this.add = (key, value) => {
    const hashedKey = hash(key);

    if(this.collection.hasOwnProperty(hashedKey)) { // collision
      let lastNode = this.findLastNode(this.collection[hashedKey]);
      lastNode.next = {
                        key: key,
                        value: value,
                        next: null
                      };
    } else {
      this.collection[hashedKey] = {
                                      key: key,
                                      value: value,
                                      next: null
                                   };
    };
  };

  const findAndDeleteNode = (key, linkedList) => {
    const hashedKey = hash(key);
    if(linkedList.key === key) {
      delete this.collection[hashedKey]
      return true;
    } else {
      findAndDeleteNode(key, linkedList.next);
    };
    return false;
  };

  this.remove = (key) => {
    const hashedKey = hash(key);
    if(this.collection.hasOwnProperty(hashedKey)) {
      return findAndDeleteNode(key, this.collection[hashedKey]);
    };
    return false;
  };

  const findNode = (key, linkedList) => {
    if(linkedList.key === key) {
      return linkedList;
    } else {
      findNode(linkedList.next);
    };
  };

  this.lookup = (key) => {
    const hashedKey = hash(key);
    if(this.collection.hasOwnProperty(hashedKey)) {
      return findNode(key, this.collection[hashedKey]).value;
    } else {
      return null;
    };
  };
};

module.exports = HashTable;
