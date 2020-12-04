// ROMAN NUMERAL CONVERTER
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

const letterNumberMapping = require('./letterNumberMapping'); 

const convertToRoman = (num) => {
  const base = letterNumberMapping.map(object => {
    return {
      ...object,
      repeat: 0,
      prefix: 0
    };
  });

  // Check how many times each letters should be repeated by dividing the input
  // number until the modulus becomes 0.
  //
  // repeat: the number of repetitions of roman letters
  // prefix: the number of roman letters in front of other letters
  //         (e.g. 'I' in 'IX' or 'IV')
  let baseIndex, currentNum;

  for (baseIndex = 0, currentNum = num;
      baseIndex < base.length && currentNum >= 0;
      baseIndex++) {
    const repeat = Math.floor(currentNum / base[baseIndex].num) || 0;
    if (repeat === 4) {
      base[baseIndex].prefix = 1;
      base[baseIndex - 1].repeat += 1;
    } else {
      base[baseIndex].repeat += repeat;
    }
    currentNum = currentNum - repeat * base[baseIndex].num;
  };

  // Carry 1 to the next digit when the repetition of 5, 50, 500 is 2, and reset
  // the repetition of 5, 50, 500 to 0.
  for (let baseIndex = 0; baseIndex < base.length; baseIndex++) {
    if (base[baseIndex].num.toString().includes('5') &&
        base[baseIndex].repeat === 2) {
        base[baseIndex].repeat = 0;
        base[baseIndex - 1].repeat += 1;
    };
  };

  // Put the roman letters together.
  // Prefix should be inserted at the second position from the last in the
  // current romanNumeral.
  let romanNumeral = '';

  for (let i = 0; i < base.length; i++) {
    if (base[i].prefix > 0) {
      romanNumeral = romanNumeral.slice(0, romanNumeral.length - 1) +
        base[i].roman +
        romanNumeral.slice(romanNumeral.length - 1,
          romanNumeral.length);
    };
    romanNumeral += base[i].roman.repeat(base[i].repeat);
  };
  return romanNumeral;
}

module.exports = convertToRoman;
