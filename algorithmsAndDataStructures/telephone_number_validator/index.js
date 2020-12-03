// TELEPHONE NUMBER VALIDATOR
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has
// the format of a valid US number. The following are examples of valid formats
// for US numbers (refer to the tests below for other variants):
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

const telephoneCheck = (str) => {
  const regex = /^(1\s?)?((\d{3})|(\s\d{3}\s)|(\(\d{3}\)))-?\s?\d{3}-?\s?\d{4}$/;
  return regex.test(str);
}

module.exports = telephoneCheck;
