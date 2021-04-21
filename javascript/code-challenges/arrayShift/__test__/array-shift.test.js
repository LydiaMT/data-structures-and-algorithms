const insertShiftArray = require('../array-shift.js');

describe('Testing challenge Array Shift', () => {
  test('It should return an array with the value inserted at the middle of the array', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
    expect(insertShiftArray([4,8,15,23,42], 160)).toStrictEqual([4,8,15,160,23,42]);
    expect(Array.isArray(insertShiftArray([4,8,15,23,42], 16))).toBeTruthy();
  });

});
