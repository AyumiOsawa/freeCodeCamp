const telephoneCheck = require('./index');

describe('the function should correctly accept or reject the following inputs:',
          () => {
            it('telephoneCheck("555-555-5555") should return a boolean.', () => {
              expect(typeof telephoneCheck("555-555-5555") === 'boolean')
              .toBeTruthy();
            });

            it('telephoneCheck("1 555-555-5555") should return true.', () => {
              expect(telephoneCheck("1 555-555-5555"))
              .toBeTruthy();
            });

            it('telephoneCheck("1 (555) 555-5555") should return true.', () => {
              expect(telephoneCheck("1 (555) 555-5555"))
              .toBeTruthy();
            });

            it('telephoneCheck("5555555555") should return true.', () => {
              expect(telephoneCheck("5555555555"))
              .toBeTruthy();
            });

            it('telephoneCheck("555-555-5555") should return true.', () => {
              expect(telephoneCheck("555-555-5555"))
              .toBeTruthy();
            });

            it('telephoneCheck("(555)555-5555") should return true.', () => {
              expect(telephoneCheck("(555)555-5555"))
              .toBeTruthy();
            });

            it('telephoneCheck("1(555)555-5555") should return true.', () => {
              expect(telephoneCheck("1(555)555-5555"))
              .toBeTruthy();
            });

            it('telephoneCheck("555-5555") should return false.', () => {
              expect(telephoneCheck("555-5555"))
              .toBeFalsy();
            });

            it('telephoneCheck("5555555") should return false.', () => {
              expect(telephoneCheck("5555555"))
              .toBeFalsy();
            });

            it('telephoneCheck("1 555)555-5555") should return false.', () => {
              expect(telephoneCheck("1 555)555-5555"))
              .toBeFalsy();
            });

            it('telephoneCheck("1 555 555 5555") should return true.', () => {
              expect(telephoneCheck("1 555 555 5555"))
              .toBeTruthy();
            });

            it('telephoneCheck("1 456 789 4444") should return true.', () => {
              expect(telephoneCheck("1 456 789 4444"))
              .toBeTruthy();
            });

            it('telephoneCheck("123**&!!asdf#") should return false.', () => {
              expect(telephoneCheck("123**&!!asdf#"))
              .toBeFalsy();
            });

            it('telephoneCheck("55555555") should return false.', () => {
              expect(telephoneCheck("55555555"))
              .toBeFalsy();
            });

            it('telephoneCheck("(6054756961)") should return false.', () => {
              expect(telephoneCheck("(6054756961)"))
              .toBeFalsy();
            });

            it('telephoneCheck("2 (757) 622-7382") should return false.', () => {
              expect(telephoneCheck("2 (757) 622-7382"))
              .toBeFalsy();
            });

            it('telephoneCheck("0 (757) 622-7382") should return false.', () => {
              expect(telephoneCheck("0 (757) 622-7382"))
              .toBeFalsy();
            });

            it('telephoneCheck("-1 (757) 622-7382") should return false.', () => {
              expect(telephoneCheck("-1 (757) 622-7382"))
              .toBeFalsy();
            });

            it('telephoneCheck("2 757 622-7382") should return false.', () => {
              expect(telephoneCheck("2 757 622-7382"))
              .toBeFalsy();
            });

            it('telephoneCheck("10 (757) 622-7382") should return false.', () => {
              expect(telephoneCheck("10 (757) 622-7382"))
              .toBeFalsy();
            });

            it('telephoneCheck("27576227382") should return false.', () => {
              expect(telephoneCheck("27576227382"))
              .toBeFalsy();
            });

            it('telephoneCheck("(275)76227382") should return false.', () => {
              expect(telephoneCheck("(275)76227382"))
              .toBeFalsy();
            });

            it('telephoneCheck("2(757)6227382") should return false.', () => {
              expect(telephoneCheck("2(757)6227382"))
              .toBeFalsy();
            });

            it('telephoneCheck("2(757)622-7382") should return false.', () => {
              expect(telephoneCheck("2(757)622-7382"))
              .toBeFalsy();
            });

            it('telephoneCheck("555)-555-5555") should return false.', () => {
              expect(telephoneCheck("555)-555-5555"))
              .toBeFalsy();
            });

            it('telephoneCheck("(555-555-5555") should return false.', () => {
              expect(telephoneCheck("(555-555-5555"))
              .toBeFalsy();
            });

            it('telephoneCheck("(555)5(55?)-5555") should return false.', () => {
              expect(telephoneCheck("(555)5(55?)-5555"))
              .toBeFalsy();
            });
          });
