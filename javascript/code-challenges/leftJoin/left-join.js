class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList(){
    if(!this.head) return 'no list';
    let current = this.head;
    while(current){
      current = current.next;
    }
  }
}

class Hashmap {
  constructor(size){
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key){ //takes in an arbitrary key and returns an index in the collection.
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  set(key, val) { //takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
    let hash = this.hash(key);
    if(!this.storage[hash]) {
      let ll = new LinkedList();
      ll.add([key,val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
    }
  }

  contains(key){ //takes in the key and returns a boolean, indicating if the key exists in the table already.
    let hashedKey = this.hash(key);
    if(!this.storage[hashedKey]) return false;
    return true;
  }

  get(key){ //takes in the key and returns the value from the table.
    if(!this.contains(key)) {
      return 'no values at this key';
    }
    let hashedKey = this.hash(key);
    let current = this.storage[hashedKey].head;
    while(current){
      if(current.val[0] === key){
        return current.val;
      }
      current = current.next;
    }
    return 'no values at this key';
  }

}

function leftJoin(hm1, hm2){
  for( let i = 0; i < hm1.size && i < hm2.size; i++){
    if(hm1.storage[i].head.val[0] === hm2.storage[i].head.val[0]){
      let valueToAdd = hm2.storage[i].head.val[1];
      let currentArray = hm1.storage[i].head.val;
      currentArray.push(valueToAdd);
    } else {
      let currentArray = hm1.storage[i].head.val;
      currentArray.push(null);
    }
  }
  return hm1;
}

let hashmap1 = new Hashmap(5);
let hashmap2 = new Hashmap(5);

hashmap1.set('1', 'one');
hashmap1.set('2', 'two');
hashmap1.set('3', 'three');
hashmap1.set('4', 'four');
hashmap1.set('5', 'five');
hashmap2.set('1', 'uno');
hashmap2.set('2', 'dos');
hashmap2.set('3', 'tres');
hashmap2.set('4', 'cuatro');
hashmap2.set('5', 'cinco');
leftJoin(hashmap1, hashmap2);

module.exports = { leftJoin, Hashmap };
