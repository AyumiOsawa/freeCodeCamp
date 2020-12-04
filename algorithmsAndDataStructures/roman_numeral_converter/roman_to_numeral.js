const letterNumberMapping = require('./letterNumberMapping');

const convertToNumeral = (str) => {

  // handle prefix (such as 'I' in 'IV', 'X' in 'XL')
  const handlePrefix = (strIndex, mappingIndex) => {
    if (skip) {
      skip = false;
      return 0;
    } else if (!skip &&
        str[strIndex + 1] &&
        letterNumberMapping[mappingIndex - 2] &&
        str[strIndex + 1] === letterNumberMapping[mappingIndex - 2].roman) {
      skip = true;
      return letterNumberMapping[mappingIndex - 2].num -
              letterNumberMapping[mappingIndex].num;
    } else if (!skip &&
                str[strIndex + 1] &&
                letterNumberMapping[mappingIndex - 1] &&
                str[strIndex + 1] === letterNumberMapping[mappingIndex - 1].roman) {
      skip = true;
      return letterNumberMapping[mappingIndex - 1].num -
              letterNumberMapping[mappingIndex].num;
    };
    return letterNumberMapping[mappingIndex].num;
  };

  //  check each roman numerals and add to numeral
  let numeral = 0;
  let skip = false;

  for (let index = 0; index < str.length; index++) {
    for (let mappingIndex = 0; mappingIndex < letterNumberMapping.length; mappingIndex++) {
      if (str[index] === letterNumberMapping[mappingIndex].roman) {
        numeral += handlePrefix(index, mappingIndex);
        break;
      }
    }
  };

  return numeral;
}

module.exports = convertToNumeral;
