'use strict';

function insertionSort(arrayToSort) {
  for(let i = 1; i < arrayToSort.length; i++){
    let j = i - 1;
    let temp = arrayToSort[i];
    while( (j >= 0) && (temp < arrayToSort[j]) ){
      arrayToSort[j + 1] = arrayToSort[j];
      j--;
    }
    arrayToSort[j + 1] = temp;
  }
  return arrayToSort;
}

module.exports = insertionSort;
