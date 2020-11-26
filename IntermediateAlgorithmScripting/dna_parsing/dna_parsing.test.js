const pairElement = require('./index');

test(
  'passing the following inputs should return the correct outputs.',
  () => {
    expect(pairElement("ATCGA")).toEqual([
      ["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]
    ]);
    expect(pairElement("TTGAG")).toEqual([
      ["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]
    ]);
    expect(pairElement("CTCTA")).toEqual([
      ["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]
    ]);
  }
)
