'use strict';

function binarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right){
    let middle = left + Math.floor((right-left) / 2);
    if (key === arr[middle]){
      return middle;
    }
    if ( key < arr[middle]){
      right = middle - 1;
    }
    else {
      left = middle + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
