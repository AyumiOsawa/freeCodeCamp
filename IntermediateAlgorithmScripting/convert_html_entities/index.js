// CONVERT HTML ENTITIES
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const convertHTML = (str) => {
  const escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  let converted = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] in escape) {
      converted += escape[str[i]] ;
    } else {
      converted += str[i];
    }
  }
  return converted
}

module.exports = convertHTML;
