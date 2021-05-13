'use strict';

const Queue = require('../stacksAndQueues/queues');

class Node {
  constructor(value, parent = null, children = []){
    this.value = value;
    this.parent = parent;
    this.children = children;
  }
}

class K_aryTree{
  constructor(value){
    var node = new Node(value);
    this.root = node;
  }

  fizzBuzzTree(){
    var currentNode = this.root;
    var queue = new Queue();
    while(currentNode && currentNode.children){
      for(let i = 0; i < currentNode.children.length; i++){
        queue.enqueue(currentNode.children[i]);
      }
      if(currentNode.value % 15 === 0 ){
        currentNode.value = 'FizzBuzz';
      } else if (currentNode.value % 5 === 0 ){
        currentNode.value = 'Buzz';
      } else if (currentNode.value % 3 === 0){
        currentNode.value = 'Fizz';
      } else {
        currentNode.value = String(currentNode.value);
      }
      currentNode = queue.dequeue();
    }
    return this;
  }

}

var tree = new K_aryTree(1);
tree.root.children.push(new Node(3));
tree.root.children[0].parent = tree;
tree.root.children.push(new Node(5));
tree.root.children[1].parent = tree;
tree.root.children.push(new Node(7));
tree.root.children[2].parent = tree;
tree.root.children[0].children.push(new Node(15));
tree.root.children[0].children[0].parent = tree.root.children[0];
tree.root.children[0].children.push(new Node(30));
tree.root.children[0].children[1].parent = tree.root.children[0];

console.log(tree.fizzBuzzTree());

module.exports = { Node, K_aryTree };

