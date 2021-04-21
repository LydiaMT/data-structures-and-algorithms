const binarySearch = require('../array-binary-search.js');

describe('Testing challenge Array Binary Search', () => {
  test('It should return the index position the array of the value that matches the key value', () => {
    expect(binarySearch([4,8,15,16,23,42], 15	)).toStrictEqual(2);
  });
});

describe('Testing challenge Array Binary Search', () => {
  test('If they key is not in the array, return -1', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4	)).toStrictEqual(-1);
  });
});
