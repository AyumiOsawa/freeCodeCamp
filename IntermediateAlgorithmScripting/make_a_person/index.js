// MAKE A PERSON
// Fill in the object constructor with the following methods below:
//
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that
// take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the
// object.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

function Person (firstAndLast) {
  newFullNameArr = firstAndLast.split(' ');
  let firstName = newFullNameArr[0];
  let lastName = newFullNameArr[1];
  let fullName = firstName + ' ' + lastName;
   
  this.getFirstName = () => {
    console.log(firstName)
    return firstName;
  };

  this.getLastName = () => {
    console.log(lastName)

    return lastName;
  };

  this.getFullName = () => {
    console.log(fullName)

    return fullName;
  };

  this.setFirstName = (first) => {
    firstName = first;
    fullName = firstName + ' ' + lastName;
    return firstName;
  };

  this.setLastName = (last) => {
    lastName = last;
    fullName = firstName + ' ' + lastName;
    return lastName;
  };

  this.setFullName = (firstAndLast) => {
    newFullNameArr = firstAndLast.split(' ');
    firstName = newFullNameArr[0];
    lastName = newFullNameArr[1];
    fullName = firstName + ' ' + lastName;
    return fullName;
  };

  // return firstAndLast;
};

module.exports = Person;
