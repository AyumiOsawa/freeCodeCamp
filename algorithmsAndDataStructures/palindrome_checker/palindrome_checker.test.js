const palindrome = require('./index');

describe('the following input returns correct true/false', () => {
  it('palindrome("eye") should return a boolean.', () => {
    expect(typeof palindrome('eye') === 'boolean')
    .toBeTruthy();
  });

  it('palindrome("eye") should return true.', () => {
    expect(palindrome("eye"))
    .toBeTruthy();
  });

  it('palindrome("_eye") should return true.', () => {
    expect(palindrome("_eye"))
    .toBeTruthy();
  });

  it('palindrome("race car") should return true.', () => {
    expect(palindrome("race car"))
    .toBeTruthy();
  });

  it('palindrome("not a palindrome") should return false.', () => {
    expect(palindrome("not a palindrome"))
    .toBeFalsy();
  });

  it('palindrome("A man, a plan, a canal. Panama") should return true.', () => {
    expect(palindrome("A man, a plan, a canal. Panama"))
    .toBeTruthy();
  });

  it('palindrome("never odd or even") should return true.', () => {
    expect(palindrome("never odd or even"))
    .toBeTruthy();
  });

  it('palindrome("nope") should return false.', () => {
    expect(palindrome("nope"))
    .toBeFalsy();
  });

  it('palindrome("almostomla") should return false.', () => {
    expect(palindrome("almostomla"))
    .toBeFalsy();
  });

  it('palindrome("My age is 0, 0 si ega ym.") should return true.', () => {
    expect(palindrome("My age is 0, 0 si ega ym."))
    .toBeTruthy();
  });

  it('palindrome("1 eye for of 1 eye.") should return false.', () => {
    expect(palindrome("1 eye for of 1 eye."))
    .toBeFalsy();
  });

  it('palindrome("0_0 (: /-\ :) 0-0") should return true.', () => {
    expect(palindrome("0_0 (: /-\ :) 0-0"))
    .toBeTruthy();
  });

  it('palindrome("five|_/|four") should return false.', () => {
    expect(palindrome("five|_/|four"))
    .toBeFalsy();
  });
});
