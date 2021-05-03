'use strict';
// `node stacks-and-queues.js` is how brian logs things in the terminal console

// ==================== Stacks =========================

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0; // size is like length here
  }

  // PUSH ADDS to the TOP of the stack
  push(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // POP REMOVES the first item from the stack
  pop(){
    if(!this.first) return 'Exception, empty stack';
    var temp = this.first;
    // if there's only one node
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  // PEEK is SHOW me the TOP item in the stack
  peek(){
    if(!this.first) return 'Exception, empty stack';
    var temp = this.first;
    return temp.value;
  }

  // Returns TRUE if stack is empty, and FALSE if stack has nodes
  isEmpty(){
    if( this.size === 0) return true;
    return false;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack;
stack.peek();
stack.isEmpty();

module.exports = Stack;



