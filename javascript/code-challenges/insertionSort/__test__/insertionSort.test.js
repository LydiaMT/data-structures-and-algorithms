'use strict';

const insertionSort = require('../insertionSort.js');

describe('insertion Sort Array test', () => {

  it('should return the array in place, sorted from lowest to highest value', () => {
    let array = [8,4,23,42,16,15];
    insertionSort(array);
    expect(array).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('can sort negetive numbers', () => {
    let array = [-88,4,23,42,16,15];
    insertionSort(array);
    expect(array).toEqual([-88, 4, 15, 16, 23, 42]);
  });

});
