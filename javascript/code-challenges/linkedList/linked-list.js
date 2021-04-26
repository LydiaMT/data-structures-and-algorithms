'use strict';
// ===========================================================================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// ===========================================================================
class LinkedList {
  constructor() {
    // Linked List initalizer
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ADDS a new node at the BEGINNING of the linked list
  insert(val){
    var newNode = new Node(val);
    // checks edge case
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    //new node is now this.head
    newNode.next = this.head;
    // this.head now equals the new node
    this.head = newNode;
    // adds to the lenght(incase we need to use this later)
    this.length++;
    return this;
  }

  includes(value){
    var current = this.head;
    if(!this.head) return false;
    while(current) {
      // does it equal the value?
      if(current.value === value) {
        return true;
      }
      if(current !== current.next){
        // make current value the next value for the following loop
        current = current.next;
      } else {
        // break out of the loop
        current = null;
      }
    }
    // no matches, return false
    return false;
  }

  toString(){
    let output = '';
    var current = this.head;
    while(current){
      output += (`{ ${current.value} } => `);
      // if I'm not pointing to myself...
      if(current !== current.next){
        // on the next loop...point to the next node
        current = current.next;
        // else..I am point to myself becuase I'm at the end
      } else {
        // so make me null
        current = null;
      }
    }
    output += (`NULL`);
    return output;
  }

}
// ===========================================================================
let newLinkedList = new LinkedList();
newLinkedList.insert(10);
newLinkedList.insert(20);
newLinkedList.insert(30);
newLinkedList.insert(40);
newLinkedList.insert(50);
// ===========================================================================
module.exports = LinkedList;
