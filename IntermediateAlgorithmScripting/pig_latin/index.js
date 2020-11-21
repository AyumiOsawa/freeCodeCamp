'use strict';

// PIG LATIN
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
//
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
//
// - If a word begins with a vowel, just add "way" at the end.

const translatePigLatin = (str) => {
  const start = str.search(/a|e|i|o|u/);
  let pigLatin = '';

  if(start === 0) {
    pigLatin = str + 'way';
  } else if (start === -1) {
    pigLatin = str + 'ay';
  } else {
    pigLatin = str.slice(start) + str.slice(0, start) + 'ay';
  }
  return pigLatin;
}

module.exports = translatePigLatin;
