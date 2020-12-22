// CREATE A MAP DATA STRUCTURE
//
// Let's get some practice creating our own map. Because JavaScript objects
// provide a much more efficient map structure than anything we could write
// here, this is intended primarily as a learning exercise. However, JavaScript
// objects only provide us with certain operations. What if we wanted to define
// custom operations? Use the Map object provided here as a wrapper around a
// JavaScript object. Create the following methods and operations on the Map
// object:
//
// - add accepts a key, value pair to add to the map.
// - remove accepts a key and removes the associated key, value pair
// - get accepts a key and returns the stored value
// - has accepts a key and returns true if the key exists or false if it
// doesn't.
// - values returns an array of all the values in the map
// - size returns the number of items in the map
// - clear empties the map
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-map-data-structure

var Map = function() {
  this.collection = {};

  this.add = (input) => {
    const key = Object.keys(input)[0];
    const value = input[key];
    this.collection[key] = value;
  };

  this.remove = function(key) {
    if (this.has(key)) {
      delete this.collection[key];
    };
  };

  this.get = function(key) {
    if (this.has(key)) {
      return this.collection[key];
    };
  };

  this.has = function(key) {
    return this.collection.hasOwnProperty(key);
  };

  this.values = function() {
    return Object.values(this.collection);
  };

  this.size = function() {
    return Object.keys(this.collection).length;
  };

  this.clear = function() {
    this.collection = {};
    return Object.keys(this.collection).length;
  };
};

module.exports = Map;
