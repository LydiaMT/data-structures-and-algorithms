// Write a function called insertShiftArray which takes in an array and the value to be added.
// Without utilizing any of the built-in methods available to your language,
// return an array with the new value added at the middle index.

// ------------ Example ------------
// Input	                  Output
// [2,4,6,8], 5	          [2,4,5,6,8]
// [4,8,15,23,42], 16	     [4,8,15,16,23,42]

const insertShiftArray = (arr, value) => {

  let newArray = [];
  let middle = arr.length / 2;
  if (arr.length % 2 !== 0) {
    middle += 0.5;
  }
  for(let i = 0; i <= arr.length; i++){
    if (i < middle) {
      newArray.push(arr[i]);
    }
    else if ( i === middle) {
      newArray.push(value);
    }
    else {
      newArray.push(arr[i-1]);
    }
  }
  return newArray;
};

module.exports = insertShiftArray;
