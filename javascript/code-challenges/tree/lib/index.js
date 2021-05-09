'use strict';

const Node = require('./node');
const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-search-tree');


// ------- BinaryTree tests -------
let one = new Node (1);
let two = new Node (2);
let three = new Node (3);
let four = new Node (4);
let five = new Node (5);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
let bt = new BinaryTree(one);
console.log('my binary Tree', bt);

// ------- BinarySearchTree tests -------
let sortedTree = new BinarySearchTree();
sortedTree.add(1);
sortedTree.add(3);
sortedTree.add(5);
sortedTree.add(7);
sortedTree.add(9);
sortedTree.add(11);

console.log(sortedTree);
console.log('This should return true', sortedTree.contains(3));
console.log('This should return false', sortedTree.contains(2));
sortedTree.add(2);
console.log(sortedTree);
console.log('This should return true', sortedTree.contains(1));
console.log('This should return true', sortedTree.contains(2));
console.log('This should return true', sortedTree.contains(3));
console.log('This should return true', sortedTree.contains(5));
console.log('This should return true', sortedTree.contains(7));
console.log('This should return true', sortedTree.contains(9));
console.log('This should return true', sortedTree.contains(11));
console.log('This should return false', sortedTree.contains(12));
