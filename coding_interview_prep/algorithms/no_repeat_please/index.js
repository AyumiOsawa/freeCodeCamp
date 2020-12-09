// NO REPEAT PLEASE
// Return the number of total permutations of the provided string that don't
// have repeated consecutive letters. Assume that all characters in the
// provided string are each unique.
//
// For example, aab should return 2 because it has 6 total permutations (aab,
// aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the
// same letter (in this case a) repeating.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please
'use strict';

const permAlone = (str) => {
  // create all the possible combination of letters
  const letters = str.split('');
  let combinations = [];

  const reorder = (fixed, remainingArr) => {
    const numOfRemainings = remainingArr.length;

    if (remainingArr.length === 1) {
      const newCombinations = fixed += remainingArr[0];
      combinations.push(newCombinations);
    } else if (remainingArr.length > 1) {
      for (let remainings = 0; remainings < numOfRemainings; remainings++) {
        const newFixed = fixed + remainingArr[remainings]
        const updatedRemainingArr = remainingArr.filter((item, index) => {
          return index !== remainings;
        });

        reorder(newFixed, updatedRemainingArr);
      };
    } else {
      combinations.push(fixed);
    };
  };

  for (let letter = 0;
        letter < letters.length;
        letter++) {
      const fixed = letters[letter];
      const remainings = letters.filter((item, index) => {
      return index !== letter;
    });
    reorder(fixed, remainings);
  };

  // count the number of a word without consecuitve repeat
  const checkRepetition = (word) => {
    for (let index = 0; index < word.length - 1; index++) {
      if (word[index] === word[index + 1]) {
        return false;
      }
    }
    return true;
  };

  const count = combinations.reduce((accumulator, currentVal) => {
    return checkRepetition(currentVal) ? accumulator + 1 : accumulator;
  }, 0);

  return count;
};

module.exports = permAlone;
