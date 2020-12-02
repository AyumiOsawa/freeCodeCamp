const convertToRoman = require('./index');

describe('Following numbers should be correctly converted to Roman numerals',
          () => {
            it('convertToRoman(2) should return "II".', () => {
              expect(convertToRoman(2))
              .toBe('II');
            });

            it('convertToRoman(3) should return "III".', () => {
              expect(convertToRoman(3))
              .toBe('III');
            });

            it('convertToRoman(4) should return "IV".', () => {
              expect(convertToRoman(4))
              .toBe('IV');
            });

            it('convertToRoman(5) should return "V".', () => {
              expect(convertToRoman(5))
              .toBe('V');
            });

            it('convertToRoman(9) should return "IX".', () => {
              expect(convertToRoman(9))
              .toBe('IX');
            });

            it('convertToRoman(12) should return "XII".', () => {
              expect(convertToRoman(12))
              .toBe('XII');
            });

            it('convertToRoman(16) should return "XVI".', () => {
              expect(convertToRoman(16))
              .toBe('XVI');
            });

            it('convertToRoman(29) should return "XXIX".', () => {
              expect(convertToRoman(29))
              .toBe('XXIX');
            });

            it('convertToRoman(44) should return "XLIV".', () => {
              expect(convertToRoman(44))
              .toBe('XLIV');
            });

            it('convertToRoman(45) should return "XLV"', () => {
              expect(convertToRoman(45))
              .toBe('XLV');
            });

            it('convertToRoman(68) should return "LXVIII"', () => {
              expect(convertToRoman(68))
              .toBe('LXVIII');
            });

            it('convertToRoman(83) should return "LXXXIII"', () => {
              expect(convertToRoman(83))
              .toBe('LXXXIII');
            });

            it('convertToRoman(97) should return "XCVII"', () => {
              expect(convertToRoman(97))
              .toBe('XCVII');
            });

            it('convertToRoman(99) should return "XCIX"', () => {
              expect(convertToRoman(99))
              .toBe('XCIX');
            });

            it('convertToRoman(400) should return "CD"', () => {
              expect(convertToRoman(400))
              .toBe('CD');
            });

            it('convertToRoman(500) should return "D"', () => {
              expect(convertToRoman(500))
              .toBe('D');
            });

            it('convertToRoman(501) should return "DI"', () => {
              expect(convertToRoman(501))
              .toBe('DI');
            });

            it('convertToRoman(649) should return "DCXLIX"', () => {
              expect(convertToRoman(649))
              .toBe('DCXLIX');
            });

            it('convertToRoman(798) should return "DCCXCVIII"', () => {
              expect(convertToRoman(798))
              .toBe('DCCXCVIII');
            });

            it('convertToRoman(891) should return "DCCCXCI"', () => {
              expect(convertToRoman(891))
              .toBe('DCCCXCI');
            });

            it('convertToRoman(1000) should return "M"', () => {
              expect(convertToRoman(1000))
              .toBe('M');
            });

            it('convertToRoman(1004) should return "MIV"', () => {
              expect(convertToRoman(1004))
              .toBe('MIV');
            });

            it('convertToRoman(1006) should return "MVI"', () => {
              expect(convertToRoman(1006))
              .toBe('MVI');
            });

            it('convertToRoman(1023) should return "MXXIII"', () => {
              expect(convertToRoman(1023))
              .toBe('MXXIII');
            });

            it('convertToRoman(2014) should return "MMXIV"', () => {
              expect(convertToRoman(2014))
              .toBe('MMXIV');
            });

            it('convertToRoman(3999) should return "MMMCMXCIX"', () => {
              expect(convertToRoman(3999))
              .toBe('MMMCMXCIX');
            });


          })
