# Challenge Summary

- [Link to PR](https://github.com/LydiaMT/data-structures-and-algorithms/pull/23)
- [Link to code](https://github.com/LydiaMT/data-structures-and-algorithms/blob/main/javascript/code-challenges/arrayBinarySearch/array-binary-search.js)
- [Link to tests](https://github.com/LydiaMT/data-structures-and-algorithms/blob/main/javascript/code-challenges/arrayBinarySearch/__test__/array-binary-search.test.js)

`npm run test array-binary-search.test.js`

## Challenge Description

Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

NOTE: The search algorithm used in your function should be a binary search.

## Approach & Efficiency

Binary searches look at repeated mid-pointes, and they only work on a sorted array. For this exercise, we will assume the array is sorted: 

- I will need to assign a halfway point
- We will be using a while loop since we don't know how many times we are going to have to loop before we find the value
- Each time the loop completes, the midpoint is reassigned
- Create a conditional to see if the current value of the index matches the value we are checking against
  - if the arr[i] > value ...look for the next midpoint to the left of the array
  - if the arr[i] < value ...look for the next midpoint to the right of the array
  - if the arr[i] === value ...stop the loop and return the currant arr[i]
  - if you have gone through the whole array and the value isn't found, return -1

## Solution

<img src="arrayBinarySearch.jpeg" width="500">
