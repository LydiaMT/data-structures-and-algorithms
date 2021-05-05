'use strict';

// bring in Queue class and functionality from previous code challenge
const Queue = require('../stacksAndQueues/queues');

class Animal {
  constructor(type){
    this.type = type;
  }
}

class AnimalShelter {
  constructor(){
    this.cat = new Queue();
    this.dog = new Queue();
  }

  // ADDS a cat or a dog to the corrosponding queue
  enqueue(animal){
    console.log(animal);
    // adds animal to the shelter, can be DOG or CAT
    if(animal.type !== 'dog' && animal.type !== 'cat') return null;
    if(animal.type === 'dog'){
      this.dog.enqueue(animal);
      return this;
    }
    if(animal.type === 'cat'){
      this.cat.enqueue(animal);
      return this;
    }
  }

  // REMOVES a cat or a dog to the corrosponding queue
  dequeue(pref){
    if(pref.type !== 'dog' && pref.type !== 'cat') return null;
    if(pref.type === 'dog'){
      this.dog.dequeue(pref);
    }
    else{
      this.cat.dequeue(pref);
    }
  }

}

// let dog = new Animal('dog');
// let cat = new Animal('cat');
// let shelter = new AnimalShelter();
// shelter.enqueue(dog);
// shelter.enqueue(dog);
// shelter.enqueue(dog);
// shelter.enqueue(cat);
// shelter.enqueue(cat);
// shelter.enqueue(cat);
// shelter.dequeue('dog');
// shelter.dequeue('cat');

module.exports = { Animal, AnimalShelter } ;
