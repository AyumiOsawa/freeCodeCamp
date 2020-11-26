const translatePigLatin = require('./index');

test(
  "'california' should return 'aliforniacay'",
  () => {
    const str1 = 'california';
    expect(translatePigLatin(str1)).toBe('aliforniacay');
  }
);

test("'paragraphs' should return 'aragraphspay'",
 () => {
   const str2 = 'paragraphs';
   expect(translatePigLatin(str2)).toBe('aragraphspay');
 }
);

test("'glove' should return 'oveglay'",
 () => {
   const str3 = 'glove';
   expect(translatePigLatin(str3)).toBe('oveglay');
 }
);

test("'algorithm' shoud return 'algorithmway'",
 () => {
   const str4 = 'algorithm';
   expect(translatePigLatin(str4)).toBe('algorithmway');
 }
);

test("'eight' should return 'eightway'",
 () => {
   const str5 = 'eight';
   expect(translatePigLatin(str5)).toBe('eightway');
 }
);

test("'schwartz' should return 'artzschway'",
 () => {
   const str6 = 'schwartz';
   expect(translatePigLatin(str6)).toBe('artzschway');
 }
);

test("'rhythm' should return 'rhythmay'",
 () => {
   const str7 = 'rhythm';
   expect(translatePigLatin(str7)).toBe('rhythmay');
 }
);
