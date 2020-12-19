// CREATE A SET CLASS
//
// Create an add method that adds a unique value to the set collection and
// returns true if the value was successfully added and false otherwise.
//
// Create a remove method that accepts a value and checks if it exists in the
// set. If it does, then this method should remove it from the set collection,
// and return true. Otherwise, it should return false. Create a size method
// that returns the size of the set collection.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }

  add(newItem) {
    if (!this.has(newItem)) {
      this.dictionary = {
                          ...this.dictionary,
                          [newItem]: newItem
                        };
      return true;
    };
    return false;
  };

  remove(removeCandidate) {
    if (this.has(removeCandidate)) {
      delete this.dictionary.[removeCandidate];
      return true;
    };
    return false;
  };

  size() {
    return this.values().length;
  };

};

module.exports = Set;
