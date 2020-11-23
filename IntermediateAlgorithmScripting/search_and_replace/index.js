// SEARCH AND REPLACE
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

const myReplace = (str, before, after) => {
  const reg = new RegExp(before);
  const capReg = /^[A-Z]/;

  if (str.match(reg)) {
    const result = str.replace(
      reg,
      _changeCase(after, capReg.test(before))
    );
    return result;
  }
  return "no matching word found";
}

const _changeCase = (after, direction) => {
  const letters = after.split('');
  let cappedWord = '';

  if (direction) {
    letters.forEach((letter, index) => {
      index === 0
      ? cappedWord += letter.toUpperCase()
      : cappedWord += letter
    })
  } else {
    letters.forEach((letter, index) => {
      index === 0
      ? cappedWord += letter.toLowerCase()
      : cappedWord += letter
    })
  }
  return cappedWord;
}

module.exports = myReplace;
