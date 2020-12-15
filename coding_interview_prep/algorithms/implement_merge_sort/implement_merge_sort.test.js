const mergeSort = require('./index');

describe('The function should return correct outputs.',
  () => {
  it('mergeSort should be a function.',
    () => {
    expect(typeof mergeSort === 'function')
    .toBeTruthy();
  });

  it('mergeSort should return a sorted array (least to greatest).',
      () => {
    const answer = mergeSort([1,0,3,2,4,5,2]);
    const isSorted = answer.every((item, index, array) => {
      if (index === array.length - 1) {
        return true;
      } else {
        return item <= array[index + 1]
      };
    });

    expect(isSorted)
    .toBeTruthy();
  });

  it('mergeSort should return an array that is unchanged except for order.',
      () => {
        const input = [4,2,34,312,5,0];
        const inputSet = new Set(input);
        const outputSet = new Set(mergeSort(input));
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
    .toBeTruthy();
  });
});
