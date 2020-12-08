const updateInventory = require(`./index`);

describe(`the function should return the correct output`, () => {
  it(`The function updateInventory should return an array.`,
      () => {
    expect(Array.isArray(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])))
    .toBeTruthy();
  });

  it(`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"],
      [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"], [7, "Toothpaste"]]) should return an array with a
      length of 6.`,
      () => {
    expect(Array.isArray(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])))
    .toBeTruthy();
    expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length)
    .toBe(6);
  });

  it(`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"],
      [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"], [7, "Toothpaste"]]) should return
      [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"],
      [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].`,
      () => {
    expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
    .toEqual([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]);
  });

  it(`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"],
      [5, "Microphone"]], []) should return [[21, "Bowling Ball"],
      [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].`,
      () => {
    expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []))
    .toEqual([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]);
  });

  it(`updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"], [7, "Toothpaste"]]) should return
      [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"],
      [7, "Toothpaste"]].`,
      () => {
    expect(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"],[67, "Bowling Ball"], [7, "Toothpaste"]]))
    .toEqual([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);
  });

  it(`updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"],
      [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"],
      [1, "Bowling Ball"], [1, "Toothpaste"]]) should return
      [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"],
      [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].`,
      () => {
    expect(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]))
    .toEqual([[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]);
  });
});
