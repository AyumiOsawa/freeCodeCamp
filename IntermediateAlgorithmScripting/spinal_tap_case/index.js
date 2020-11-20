const spinalCase = (str) => {
  const words = str.split(/\s|_/);
  let separated = [];

  words.forEach((word, i) => {
    const letters = word.split('');
    let wholeWords = [''];
    let wordNum = 0;

    letters.forEach( (letter, i) => {
      if(letter.match(/[A-Z]/) && i !== 0) {
        // console.log('capital: ', letter);
        wordNum += 1;
        wholeWords[wordNum] = letter;
      } else {
        wholeWords[wordNum] += letter;
      }
    })
    separated = separated.concat(wholeWords);
  })
  const spinal = separated.join('-');
  return spinal.toLowerCase();
}

module.exports = spinalCase;
