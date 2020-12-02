// ROMAN NUMERAL CONVERTER
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

const convertToRoman = (num) => {
  let romanNumeral = '';
  const base = [
      { num: 1000, roman: 'M', repeat: 0, prefix: 0},
      { num: 500, roman: 'D', repeat: 0, prefix: 0},
      { num: 100, roman: 'C', repeat: 0, prefix: 0},
      { num: 50, roman: 'L', repeat: 0, prefix: 0},
      { num: 10, roman: 'X', repeat: 0, prefix: 0},
      { num: 5, roman: 'V', repeat: 0, prefix: 0},
      { num: 1, roman: 'I', repeat: 0, prefix: 0},
      { num: 0, roman: '', repeat: 0, prefix: 0}
  ];

 let currentNum = num;
 let baseIndex = 0;

  while(currentNum >= 0 && baseIndex < base.length) {
     const repeat = Math.floor(currentNum / base[baseIndex].num) || 0;
     if (repeat === 4) {
         base[baseIndex].prefix = 1;
         base[baseIndex-1].repeat += 1;
     } else {
         base[baseIndex].repeat += repeat;
     }

     currentNum = currentNum - repeat * base[baseIndex].num;
     baseIndex += 1;
  };

  baseIndex = 0;
  while(baseIndex < base.length) {
     if (base[baseIndex].num.toString().includes('5')) {
         if (base[baseIndex].repeat === 2) {
             base[baseIndex].repeat = 0;
             base[baseIndex - 1].repeat += 1;
         }
     }
     baseIndex += 1;
  }

  for (let i = 0; i < base.length; i++) {
      if (base[i].prefix > 0) {
         romanNumeral = romanNumeral.slice(0, romanNumeral.length - 1) + base[i].roman + romanNumeral.slice(romanNumeral.length - 1, romanNumeral.length);
      };
      romanNumeral += base[i].roman.repeat(base[i].repeat);
  };
  return romanNumeral;
 }

module.exports = convertToRoman;
