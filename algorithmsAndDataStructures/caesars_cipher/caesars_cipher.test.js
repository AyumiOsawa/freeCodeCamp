const rot13 = require('./index');

describe('The folllowing code should be correctly deciphered', () => {
  it('rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP', () => {
    expect(rot13("SERR PBQR PNZC"))
    .toBe('FREE CODE CAMP');
  });

  it('rot13("SERR CVMMN!") should decode to FREE PIZZA!', () => {
    expect(rot13("SERR CVMMN!"))
    .toBe('FREE PIZZA!');
  });

  it('rot13("SERR YBIR?") should decode to FREE LOVE?', () => {
    expect(rot13("SERR YBIR?"))
    .toBe('FREE LOVE?');
  });

  it(`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE
      QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`, () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
    .toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
