'use strict';

const Node = require('../lib/node');
const BinaryTree = require('../lib/binary-tree');
const BinarySearchTree = require('../lib/binary-search-tree');

// =============== BT tests ===============
describe('With the Binary Tree constructor class', () => {

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

  it('a new node can be created and added to the tree', () => {
    expect(bt.root).toBeTruthy();
    expect(bt.root.left).toBeTruthy();
    expect(bt.root.right).toBeTruthy();
  });

  it('a node has a value left & right property', () => {
    expect(bt.root.left.value).toBe(2);
    expect(bt.root.right.value).toBe(3);
  });

  it('preOrder will log or traverse in the right way', () => {
    expect(bt.preOrder()).toEqual([1, 2, 3, 4, 5]);
  });

  it('inOrder will log or traverse in the right way', () => {
    expect(bt.inOrder()).toEqual([2, 1, 4, 3, 5]);
  });

  it('postOrder will log or traverse in the right way', () => {
    expect(bt.postOrder()).toEqual([2, 4, 5, 3, 1]);
  });

});

// =============== BST tests ===============
describe('With the binary search tree constructor class,', () => {

  let sortedTree = new BinarySearchTree();
  sortedTree.add(7);
  sortedTree.add(3);
  sortedTree.add(9);
  sortedTree.add(5);
  sortedTree.add(11);
  sortedTree.add(8);
  sortedTree.add(1);
  sortedTree.add(2);
  console.log(sortedTree);

  it('a new node can be created and added to the tree, keeping the tree appropriately sorted', () => {
    expect(sortedTree.root.value).toBe(7);
    expect(sortedTree.root.left.value).toBe(3);
    expect(sortedTree.root.left.left.value).toBe(1);
    expect(sortedTree.root.left.right.value).toBe(5);
    expect(sortedTree.root.left.left.right.value).toBe(2);
    expect(sortedTree.root.right.value).toBe(9);
    expect(sortedTree.root.right.right.value).toBe(11);
    expect(sortedTree.root.right.left.value).toBe(8);
  });

  it('contains will return true if the tree contains the value', () => {
    expect(sortedTree.contains(2)).toBe(true);
  });

  it('contains will return false if the tree contains the value', () => {
    expect(sortedTree.contains(20)).toBe(false);
  });

});
