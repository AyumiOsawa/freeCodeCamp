const pairElement = (str) => {
  const firstElms = str.split('');
  let pairedUp = [];
  const partners = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  };

  firstElms.forEach(firstElm => {
    pairedUp.push([firstElm, partners[firstElm]]);
  });
  return pairedUp;
}

module.exports = pairElement;
