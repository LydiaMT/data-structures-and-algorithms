'use strict';

const Queue = require('../queues');

// ======================================== QUEUES TEST DAY 1 ======================================== //
describe('------- QUEUES DAY 1-------', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.size).toEqual(2);
    expect(queue.isEmpty()).toEqual(false);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    expect(queue.peek() && queue.dequeue()).toEqual('Exception, empty queue');
  });

});
