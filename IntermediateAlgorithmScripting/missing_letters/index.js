// MISSING LETTERS
//
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

const fearNotLetter = (str) => {
  const startCharCode = 97 //charaCode for 'a'
  let alphabets = '' ;
  for(let i = 0; i < 26; i++) {
    alphabets += String.fromCharCode(startCharCode + i);
  }
  // console.log(alphabets);
  const imputLetters = str.split('');
  const length = str.length;
  const start = alphabets.indexOf(str[0]);
  let missisng = undefined;
  for(let j = start; j < start + length; j++) {
    if (imputLetters[j-start] !== alphabets[j]) {
      missisng = alphabets[j]
      break;
    }
  }
  return missisng;
}

module.exports = fearNotLetter;
