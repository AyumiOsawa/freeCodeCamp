const bubbleSort = require('./index');

describe('The function should return correct outputs.',
  () => {
  it('bubbleSort should be a function.',
    () => {
    expect(typeof bubbleSort === 'function')
    .toBeTruthy();
  });

  it('bubbleSort should return a sorted array (least to greatest).',
      () => {
    const answer1 = bubbleSort([1,0,3,2,4,5]);
    const isSorted = answer1.every((item, index, array) => {
      if (index === array.length - 1) {
        return true;
      } else {
        return item < array[index + 1]
      };
    });
    
    expect(isSorted)
    .toBeTruthy();
  });

  it('bubbleSort should return an array that is unchanged except for order.',
      () => {
        const input = [4,2,34,312,5,0];
        const inputSet = new Set(input);
        const outputSet = new Set(bubbleSort(input));
        const IsEqualSet = (set1, set2) => {
          if (set1.size !== set2.size) {
            return false;
          };
          for (item1 of set1) {
            if (!set2.has(item1)) {
              return false;
            };
          };
          return true;
        };

    expect(IsEqualSet(inputSet, outputSet))
    .toBeTruhty();
  });
});
