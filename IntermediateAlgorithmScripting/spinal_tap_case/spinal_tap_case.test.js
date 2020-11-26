const spinalCase = require('./index');

test(
  "'This Is Spinal Tap' should return 'this-is-spinal-tap'",
  () => {
    const str1 = 'This Is Spinal Tap';
    expect(spinalCase(str1)).toBe('this-is-spinal-tap');
  }
);

test(
  "'thisIsSpinalTap' should return 'this-is-spinal-tap'",
  () => {
    const str2 = 'thisIsSpinalTap';
    expect(spinalCase(str2)).toBe('this-is-spinal-tap');
  }
);

test(
  "'TheAndyGriffith_Show' should return 'the-andy-griffith-show'",
  () => {
    const str3 = 'TheAndyGriffith_Show';
    expect(spinalCase(str3)).toBe('the-andy-griffith-show');
  }
);

test(
  "'Teletubbies say Eh-oh' should return 'teletubbies-say-eh-oh'",
  () => {
    const str4 = 'Teletubbies say Eh-oh';
    expect(spinalCase(str4)).toBe('teletubbies-say-eh-oh');
  }
);

test(
  "'AllThe-small Things' should return 'all-the-small-things'",
  () => {
    const str5 = 'AllThe-small Things';
    expect(spinalCase(str5)).toBe('all-the-small-things');
  }
);
