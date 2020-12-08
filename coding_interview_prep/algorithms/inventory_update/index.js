// INVENTORY UPDATE
//
// Compare and update the inventory stored in a 2D array against a second 2D
// array of a fresh delivery. Update the current existing inventory item
// quantities (in arr1). If an item cannot be found, add the new item and
// quantity into the inventory array. The returned inventory array should be in
// alphabetical order by item.
//
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

const updateInventory = (arr1, arr2) => {
  const concatinated = [...arr1, ...arr2];

  //  sort the concatinated by the order of name
  const workingConcatenated = [...arr1, ...arr2];
  let sorted = [];

  for (let compareIndex = 0;
          compareIndex < concatinated.length;
          compareIndex++) {
      let frontmost = [ ,'ZZ'];
      let frontmostIndex = 0;
      for (let compareAgianstIndex = 0;
          compareAgianstIndex < workingConcatenated.length;
          compareAgianstIndex++) {
              if (frontmost[1] > workingConcatenated[compareAgianstIndex][1]) {
                  frontmost = workingConcatenated[compareAgianstIndex];
                  frontmostIndex = compareAgianstIndex;
              };
          };
      workingConcatenated.splice(frontmostIndex, 1);
      sorted.push(frontmost);
  };

  //  compare to the next one and update
  let updatedList = [];
  let skip = false;
  for (let compareIndex = 0;
      compareIndex < sorted.length;
      compareIndex++) {
          if (!skip
              && compareIndex + 1 < sorted.length
              && sorted[compareIndex][1] === sorted[compareIndex + 1][1]
              ) {
              updatedList.push([
                                  sorted[compareIndex][0] + sorted[compareIndex + 1][0],
                                  sorted[compareIndex][1]
                              ]);
                  skip = true;
              } else if (skip) {
                  console.log('skipped')
                  console.log('checkcing', sorted[compareIndex])
                  skip = false;
              } else {
                  updatedList.push(sorted[compareIndex]);
              };
      }

  console.log('updatedList',updatedList)
  return updatedList;
};

module.exports = updateInventory;
