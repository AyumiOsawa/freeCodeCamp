// PALINDROME CHECKER
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward
// and backward, ignoring punctuation, case, and spacing.
//
// Note:
// You'll need to remove all non-alphanumeric characters (punctuation, spaces
// and symbols) and turn everything into the same case (lower or upper case) in
// order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and
// "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2",
// and "2_A3*3#A2".
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  const lowerCase = str.toLowerCase().split('');
  const cleanedArr = lowerCase.filter(letter => {
    return /[a-z]|[0-9]/.test(letter);
  });

  const flip = (arr) => {
    let flippedArr = [];
    let index = arr.length - 1;
    while (index >= 0) {
      flippedArr.push(arr[index])
      index -= 1;
    }
    return flippedArr;
  }
  const cleaned = cleanedArr.join('');
  const flipped = flip(cleanedArr).join('');

  if (cleaned === flipped) {
    return true;
  }
  return false;
}

module.exports = palindrome;
