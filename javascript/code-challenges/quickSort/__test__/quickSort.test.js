'use strict';

const quickSort = require('../quickSort.js');

describe('quick sort Array test', () => {

  it('should return the array in place, sorted from lowest to highest value', () => {
    let array = [8,4,23,42,16,15];
    let left = 0;
    let right = array.length - 1;
    quickSort(array, left, right);
    console.log(array);
    expect(array).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('can sort negetive numbers', () => {
    let array = [-88,4,23,42,16,15];
    let left = 0;
    let right = array.length - 1;
    quickSort(array, left, right);
    console.log(array);
    expect(array).toEqual([-88, 4, 15, 16, 23, 42]);
  });

});
