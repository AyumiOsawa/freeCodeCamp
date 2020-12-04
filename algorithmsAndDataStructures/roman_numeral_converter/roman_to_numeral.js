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

  for(let index = 0; index < str.length; index++) {
    switch (str[index]) {
      case letterNumberMapping[0].roman:
        numeral += handlePrefix(index, 0);
        break;
      case letterNumberMapping[1].roman:
        numeral += handlePrefix(index, 1);

        break;
      case letterNumberMapping[2].roman:
        numeral += handlePrefix(index, 2);

        break;
      case letterNumberMapping[3].roman:
        numeral += handlePrefix(index, 3);

        break;
      case letterNumberMapping[4].roman:
        numeral += handlePrefix(index, 4);

        break;
      case letterNumberMapping[5].roman:
        numeral += handlePrefix(index, 5);

        break;
      case letterNumberMapping[6].roman:
        numeral += handlePrefix(index, 6);

        break;
      case letterNumberMapping[7].roman:
        numeral += handlePrefix(index, 7);

        break;
      default:
        NaN;
    };
  };

  return numeral;
}

module.exports = convertToNumeral;
