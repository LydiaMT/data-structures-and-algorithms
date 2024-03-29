'use stict';

// You will have a PUSH stack and a POP stack
// PUSH STACK is for enqueue requests; POP STACK is for dequeue requests
// ENQUEUE will push to the PUSH STACK. DEQUEUE will remove from the POP STACK

/// ============================== QUEUE ==============================

class PseudoQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
    this.size = 0;
  }

  enqueue(val) {
    this.pushStack.push(val);
    this.size = this.pushStack.length + this.popStack.length;
  }

  dequeue() {
    if (this.popStack.length > 0) {
      this.size = this.pushStack.length + this.popStack.length - 1;
      return this.popStack.pop();
    }
    while(this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    this.size = this.pushStack.length + this.popStack.length - 1;
    return this.popStack.pop();
  }

}

/// ============================== STACK ==============================
class Node {
  constructor(val){ //instance of a node
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){ //instance of a stack
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // methods
  push(val){
    let newNode = new Node(val);
    if (this.length === 0){
      this.first = newNode;
      this.last = newNode;
    }else{
      let temp = this.first;
      this.first = newNode;
      this.first.next= temp;
    }
    this.length++;
    return this.length;
  }

  pop(){
    if (this.length === 0) return null;
    let temp = this.first;
    if (this.length === 1){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp;
  }

  peek(){
    if(this.length === 0) return null;
    let temp = this.first;
    return temp;
  }

}

let queue = new PseudoQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

module.exports = PseudoQueue;
