const testFunc = require('../index');

test('multiply 3 to 4 equals to 12', () => {
  expect(testFunc(3, 4)).toBe(12);
});
