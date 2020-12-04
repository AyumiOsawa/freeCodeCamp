const convertToNumeral = require('./roman_to_numeral');

describe('Following roman numerals should be correctly converted to numerals',
          () => {
            it('convertToNumeral("II") should return 2.', () => {
              expect(convertToNumeral('II'))
              .toBe(2);
            });

            it('convertToNumeral("III") should return 3.', () => {
              expect(convertToNumeral('III'))
              .toBe(3);
            });

            it('convertToNumeral("IV") should return 4.', () => {
              expect(convertToNumeral('IV'))
              .toBe(4);
            });

            it('convertToNumeral("V") should return 5.', () => {
              expect(convertToNumeral('V'))
              .toBe(5);
            });

            it('convertToNumeral("IX") should return 9.', () => {
              expect(convertToNumeral('IX'))
              .toBe(9);
            });

            it('convertToNumeral("XII") should return 12.', () => {
              expect(convertToNumeral('XII'))
              .toBe(12);
            });

            it('convertToNumeral("XVI") should return 16.', () => {
              expect(convertToNumeral('XVI'))
              .toBe(16);
            });

            it('convertToNumeral("XXIX") should return 29.', () => {
              expect(convertToNumeral('XXIX'))
              .toBe(29);
            });

            it('convertToNumeral("XLIV") should return 44.', () => {
              expect(convertToNumeral('XLIV'))
              .toBe(44);
            });

            it('convertToNumeral("XLV") should return 45', () => {
              expect(convertToNumeral('XLV'))
              .toBe(45);
            });

            it('convertToNumeral("LXVIII") should return 68', () => {
              expect(convertToNumeral('LXVIII'))
              .toBe(68);
            });

            it('convertToNumeral("LXXXIII") should return 83', () => {
              expect(convertToNumeral('LXXXIII'))
              .toBe(83);
            });

            it('convertToNumeral("XCVII") should return 97', () => {
              expect(convertToNumeral('XCVII'))
              .toBe(97);
            });

            it('convertToNumeral("XCIX") should return 99', () => {
              expect(convertToNumeral('XCIX'))
              .toBe(99);
            });

            it('convertToNumeral("CD") should return 400', () => {
              expect(convertToNumeral('CD'))
              .toBe(400);
            });

            it('convertToNumeral("D") should return 500', () => {
              expect(convertToNumeral('D'))
              .toBe(500);
            });

            it('convertToNumeral("DI") should return 501', () => {
              expect(convertToNumeral('DI'))
              .toBe(501);
            });

            it('convertToNumeral("DCXLIX") should return 649', () => {
              expect(convertToNumeral('DCXLIX'))
              .toBe(649);
            });

            it('convertToNumeral("DCCXCVIII") should return 798', () => {
              expect(convertToNumeral('DCCXCVIII'))
              .toBe(798);
            });

            it('convertToNumeral("DCCCXCI") should return 891', () => {
              expect(convertToNumeral('DCCCXCI'))
              .toBe(891);
            });

            it('convertToNumeral("M") should return 1000', () => {
              expect(convertToNumeral('M'))
              .toBe(1000);
            });

            it('convertToNumeral("MIV") should return 1004', () => {
              expect(convertToNumeral('MIV'))
              .toBe(1004);
            });

            it('convertToNumeral("MVI") should return 1006', () => {
              expect(convertToNumeral('MVI'))
              .toBe(1006);
            });

            it('convertToNumeral("MXXIII") should return 1023', () => {
              expect(convertToNumeral('MXXIII'))
              .toBe(1023);
            });

            it('convertToNumeral("MMXIV") should return 2014', () => {
              expect(convertToNumeral('MMXIV'))
              .toBe(2014);
            });

            it('convertToNumeral("MMMCMXCIX") should return 3999', () => {
              expect(convertToNumeral('MMMCMXCIX'))
              .toBe(3999);
            });


          })
