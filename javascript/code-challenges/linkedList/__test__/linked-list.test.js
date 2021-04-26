'use strict';

const LinkedList = require('../linked-list');

describe('------- LINKED LIST TEST -------', () => {
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
