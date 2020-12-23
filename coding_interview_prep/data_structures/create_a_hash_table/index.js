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

  this.add = (key, value) => {
    const hashedKey = hash(key);
    if (Array.isArray(this.collection[hashedKey])) {
      this.collection[hashedKey] = {
                                      ...this.collection[hashedKey],
                                      key: value
                                    };
    };
  };

  this.remove = (key) => {
    const hashedKey = hash(key);
    if(this.collection.hasOwnProperty(hashedKey) &&
       this.collection[hashedKey][key]) {
      delete this.collection[hashedKey][key];
    };
  };

  this.lookup = (key) => {
    const hashedKey = hash(key);
    if(this.collection.hasOwnProperty(hashedKey) &&
       this.collection[hashedKey][key]) {
      return this.collection[hashedKey][key];
    } else {
      return Null;
    };
  };
};

module.exports = HashTable;






The remove method should accept a key as input and should remove the associated key value pair.

Passed
Items should be added using the hash function.

The hash table should handle collisions.
