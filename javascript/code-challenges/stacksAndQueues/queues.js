'use strict';
// ==================== Queues =========================

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.size = 0, // houses the lenght and to enqueue and dequeue
    this.next = null, // mainly for dequeue
    this.first = null,
    this.last = null;
  }

  // ADDS to the END
  enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // REMOVES from the BEGINNING
  dequeue(){
    if(!this.first) return 'Exception, empty queue';
    var temp = this.first;
    // if there is only one node
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  // RETURNS the value of the node located in the FRONT of the queue
  peek(){
    if(!this.first) return 'Exception, empty queue';
    var temp = this.first;
    return temp.value;
  }

  // Returns TRUE if stack is empty, and FALSE if stack has nodes
  isEmpty(){
    if( this.size === 0) return true;
    return false;
  }

}

let queue = new Queue();
queue.enqueue(10);

module.exports = Queue;
