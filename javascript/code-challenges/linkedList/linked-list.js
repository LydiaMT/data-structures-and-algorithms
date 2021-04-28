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
    newNode.next = this.head; //new node is now this.head
    this.head = newNode; // this.head now equals the new node
    this.length++; // adds to the lenght(incase we need to use this later)
    return this;
  }

  // Checks to see if a VALUE is already INCLUDED in the LL
  includes(value){
    var current = this.head;
    if(!this.head) return false;
    while(current) {
      // does it equal the value?
      if(current.value === value) {
        return true;
      }
      if(current !== current.next){
        current = current.next; // make current value the next value for the following loop
      } else {
        current = null; // break out of the loop
      }
    }
    return false; // no matches, return false
  }

  // CONVERT current LL to STRING
  toString(){
    let output = '';
    var current = this.head;
    while(current){
      output += (`{ ${current.value} } => `);
      // if I'm not pointing to myself...
      if(current !== current.next){ // on the next loop...point to the next node
        current = current.next; // else..I am point to myself becuase I'm at the end
      } else {
        current = null; // so make me null
      }
    }
    output += (`NULL`);
    return output;
  }

  // ADD new value to the END of the LL
  append(value) {
    // instantiate a new node to add to our LL
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      // traversal happens here
      let current = this.head; // start the traversal at the beginning (head) of the LL
      while(current.next) { // this is the actual traversal
        current = current.next; // this moves you along in your traversal
      }
      current.next = node;
    }
    this.length++; //ADDED
    return this;
  }

  // INSERT a value BEFORE a given value
  insertBefore(value, newVal){
    // edge case
    if(!this.head){
      return 'no linked list';
    } else {
      let checkValue = this.head;
      if(checkValue.value === value){
        this.head = new Node(newVal);
        this.head.next = checkValue;
      }
      this.length++; //ADDED
      while(checkValue.next){
        if(checkValue.next.value === value){
          let newNode = new Node(newVal);
          let tempValue = checkValue;
          newNode.next = tempValue.next;
          tempValue.next = newNode;
          return true;
        } else {
          checkValue = checkValue.next;
        }
      }
    }
  }

  // INSERT a value AFTER a given value
  insertAfter(value, newVal){
    // edge case
    let newNode = new Node (newVal);
    if(!this.head){
      this.head = newNode;
    }
    // start at the beginning of the list
    let checkValue = this.head;
    this.length++; //ADDED
    while(checkValue.next) { // traverse the list
      if(checkValue.value === value){
        let tempValue = checkValue.next;
        checkValue.next = newNode;
        checkValue.next.next = tempValue;
        return true;
      } else {
        checkValue = checkValue.next;
      }
    }
  }

  valueFromEnd(k){
    // edge case
    if(!this.head || k < 0 || k >= this.length) return 'Exception';
    let i = 1; // Start at 1 because we're indexing from 0
    let current = this.head;
    // use the length tracker that was created in append()
    while(current.next && i !== (this.length - k) ){
      current = current.next;
      i++;
    }
    return current.value;
  }

  zipLists(list1, list2){
    let list3, tail, previousNode;
    list3 = new LinkedList('');
    tail = list3;
    while(list1 || list2){
      if(list1 !== null) tail.value += list1.value;
      if(list2 !== null) tail.value += list2.value;
      tail.next = new LinkedList('');
      previousNode = tail;
      tail = tail.next;

      list1 = list1 ? list1.next : list1;
      list2 = list2 ? list2.next : list2;
    }
    previousNode.next = null;
    return list3;
  }

  // ZIPs two linked lists and alternates their values
  static zipLists(list1, list2){
    let list3 = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while(current1 || current2){
      if(current1 !== null) {
        // call on the append() function above to do the work
        list3.append(current1.value);
        current1 = current1.next ;
      }
      if(current2 !== null) {
        list3.append(current2.value);
        current2 = current2.next;
      }
    }
    return list3;
  }

}
// ===========================================================================
let newLinkedList1 = new LinkedList();
newLinkedList1.append(1);
newLinkedList1.append(2);
newLinkedList1.append(3);
newLinkedList1.append(4);
newLinkedList1.append(5);
let newLinkedList2 = new LinkedList();
newLinkedList2.append('a');
newLinkedList2.append('b');
newLinkedList2.append('c');
newLinkedList2.append('d');
newLinkedList2.append('e');
// called in this way because of the static utility function
let newLinkedList3 = LinkedList.zipLists(newLinkedList1, newLinkedList2);
newLinkedList3.toString();
// ===========================================================================
module.exports = LinkedList;
