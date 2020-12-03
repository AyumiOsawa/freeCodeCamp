// CAESAR'S CIPHER
// One of the simplest and most widely known ciphers is a Caesar cipher, also
// known as a shift cipher. In a shift cipher the meanings of the letters are
// shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are
// shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a
// decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character
// (i.e. spaces, punctuation), but do pass them on.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
const rot13 = (str) => {
  const arr = str.split('');

  const decoded = arr.map(letter => {
    if(/[A-Z]/.test(letter)) {
      const code = letter.charCodeAt(0) - 13 >= 65
                    ? letter.charCodeAt(0) - 13
                    : letter.charCodeAt(0) - 13 + 90 - 64;
      return String.fromCharCode(code)
    } else {
      return letter;
    }});

  return decoded.join('');
}

module.exports = rot13;
