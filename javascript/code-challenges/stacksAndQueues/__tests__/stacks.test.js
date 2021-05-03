'use strict';

const Stack = require('../stacks');

// ======================================== STACKS TEST DAY 1 ======================================== //
describe('------- STACK DAY 1-------', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.peek()).toEqual(2);
    expect(stack.isEmpty()).toEqual(false);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
    stack.pop();
    expect(stack.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(stack.peek() && stack.pop()).toEqual('Exception, empty stack');
  });

});
