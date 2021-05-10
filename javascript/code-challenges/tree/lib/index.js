'use strict';

const Node = require('./node');
const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-search-tree');

// ------- BinaryTree tests -------
let a = new Node (2);
let b = new Node (7);
let c = new Node (5);
let d = new Node (2);
let e = new Node (6);
let f = new Node (9);
let g = new Node (5);
let h = new Node (11);
let i = new Node (4);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = g;
e.right = h;
c.right = f;
f.left = i;

let one = new Node (2);
let two = new Node (5);
let three = new Node (7);
let four = new Node (4);
let five = new Node (5);
one.left = two;
one.right = three;
three.left = four;
three.right = five;

let bt = new BinaryTree(a);
let bt2 = new BinaryTree(one);

// ------- BinarySearchTree tests -------
let sortedTree = new BinarySearchTree();
sortedTree.add(1);
sortedTree.add(3);
sortedTree.add(5);
sortedTree.add(7);
sortedTree.add(9);
sortedTree.add(11);
