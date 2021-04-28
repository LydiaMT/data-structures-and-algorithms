# Singly Linked List

- [Link to PR](https://github.com/LydiaMT/data-structures-and-algorithms/pull/27)
- [Link to code](https://github.com/LydiaMT/data-structures-and-algorithms/blob/main/javascript/code-challenges/linkedList/linked-list.js)
- [Link to tests](https://github.com/LydiaMT/data-structures-and-algorithms/blob/main/javascript/code-challenges/linkedList/__test__/linked-list.test.js)

## Test
`npm run test linked-list.test.js`

1. The two lists return a combined linked list
2. Nodes from the returned liked lists alternate between list1 and list2's nodes
3. If one list is longer, remaining nodes are attached to the end of the returned list

## Challenge

Write a function called `zipLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. **Try and keep additional space down to O(1)**. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Example 

### `zipLists(list1, list2)`

ARG `list1`	| ARG `list2`	| OUTPUT
-----|-----|-----
head -> [1] -> [3] -> [2] -> X| 	head -> [5] -> [9] -> [4] -> X	| head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
head -> [1] -> [3] -> X	| head -> [5] -> [9] -> [4] -> X	| head -> [1] -> [5] -> [3] -> [9] -> [4] -> X
head -> [1] -> [3] -> [2] -> X| 	head -> [5] -> [9] -> X	| head -> [1] -> [5] -> [3] -> [9] -> [2] -> X


## Approach & Efficiency

<img src="img/linkedlist4.jpeg" width ="500">

## API

- [Xiaoyun Yang - Data Structure with JavaScript Object: Linked List](https://xiaoyunyang.github.io/post/data-structure-with-javascript-object-linked-list/)
- [Colt Steele - Master Class, E6 Classes](https://www.udemy.com/share/101XY2BUQedlZVRXQ=/)