'use strict';

const LinkedList = require('../linked-list');

// ======================================== LINKED LIST TEST DAY 1 ======================================== //
describe('------- LINKED LIST TEST DAY 1-------', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    let first = 1;
    list.insert(first);
    expect(list.head.value).toEqual(1);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    let headTest = 'test';
    list.insert(headTest);
    expect(list.head.value).toEqual('test');

  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    let head = 'Head';
    let tail = 'Tail';
    list.insert(tail);
    list.insert(head);
    expect(list.tail.value).toEqual('Tail');
    expect(list.head.value).toEqual('Head');

  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    expect(list.includes(3)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    expect(list.includes(6)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insert(6);
    list.insert(7);
    expect(list.toString()).toBe('{ 7 } => { 6 } => { 5 } => { 4 } => { 3 } => { 2 } => { 1 } => NULL');
  });

});

// ======================================== LINKED LIST TEST DAY 2 ======================================== //
describe('------- LINKED LIST TEST DAY 2 -------', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.next.value).toEqual(2);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.next.value).toEqual(2);
    list.append(3);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore(3, 'I am before 3');
    expect(list.toString()).toEqual('{ 1 } => { 2 } => { I am before 3 } => { 3 } => { 4 } => NULL');

  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.insertBefore(3, 'I am before 3');
    expect(list.toString()).toEqual('{ 1 } => { 2 } => { I am before 3 } => { 3 } => { 4 } => NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.next.value).toEqual(2);
  });

});

// ======================================== LINKED LIST TEST DAY 3 ======================================== //
describe('------- LINKED LIST TEST DAY 3 -------', () => {
  it('Where k is greater than the length of the linked list', () => {
    let list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);
    expect(list.valueFromEnd(7)).toEqual('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    let list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);
    expect(list.valueFromEnd(6)).toEqual('Exception');
  });

  it('Where k is not a positive integer', () => {
    let list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);
    expect(list.valueFromEnd(-1)).toEqual('Exception');
  });

  it('Where the linked list is of a size 1', () => {
    let list = new LinkedList();
    list.append(10);
    expect(list.valueFromEnd(1)).toEqual('Exception');
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);
    expect(list.valueFromEnd(3)).toEqual(20);
  });

});
