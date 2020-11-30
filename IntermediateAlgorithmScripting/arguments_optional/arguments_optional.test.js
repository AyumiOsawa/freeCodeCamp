const addTogether = require('./index');

describe('The following inputs should return the correct outputs',
          () => {
            it('addTogether(2, 3) should return 5.', () => {
              expect(addTogether(2, 3)).toBe(5);
            });

            it('addTogether(23, 30) should return 53.', () => {
              expect(addTogether(23, 30)).toBe(53);
            });

            it('addTogether(5)(7) should return 12.', () => {
              expect(addTogether(5)(7)).toBe(12);
            });

            it('addTogether("http://bit.ly/IqT6zt") should return undefined.', () => {
              expect(addTogether("http://bit.ly/IqT6zt")).toBeUndefined();
            });

            it('addTogether(2, "3") should return undefined.', () => {
              expect(addTogether(2, "3")).toBeUndefined();
            });

            it('addTogether(2)([3]) should return undefined.', () => {
              expect(addTogether(2)([3])).toBeUndefined();
            });
          }
)
