const fearNotLetter = require('./index');

test(
  'passing the following inputs should return the correct outputs.',
  () => {
    expect(fearNotLetter('abce')).toBe('d');
    expect(fearNotLetter('abcdefghjklmno')).toBe('i');
    expect(fearNotLetter('stvwx')).toBe('u');
    expect(fearNotLetter('bcdf')).toBe('e');
    expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
  }
)
