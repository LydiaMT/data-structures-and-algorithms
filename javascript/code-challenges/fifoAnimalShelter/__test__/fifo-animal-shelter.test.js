'use strict';

const { Animal, AnimalShelter } = require('../fifo-animal-shelter');

// ======================================== QUEUES TEST DAY 1 ======================================== //
describe('------- QUEUES DAY 3-------', () => {
  it('Can enqueue a cat', () => {
    let cat = new Animal('cat');
    let shelter = new AnimalShelter();
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    expect(shelter.cat.peek()).toBe(cat);
  });

  it('Can enqueue a dog', () => {
    let dog = new Animal('dog');
    let shelter = new AnimalShelter();
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    expect(shelter.dog.peek()).toBe(dog);
  });

  it('Can dequeue a cat', () => {
    let cat = new Animal('cat');
    let shelter = new AnimalShelter();
    shelter.enqueue(cat);
    shelter.dequeue(cat);
    expect(shelter.cat.isEmpty()).toBe(true);
  });

  it('Can dequeue a dog', () => {
    let dog = new Animal('dog');
    let shelter = new AnimalShelter();
    shelter.enqueue(dog);
    shelter.dequeue(dog);
    expect(shelter.dog.isEmpty()).toBe(true);
  });

  it('Returns null if you try to enqueue anything other than dog or cat', () => {
    let fish = new Animal('fish');
    let shelter = new AnimalShelter();
    expect(shelter.enqueue(fish)).toBe(null);
  });


  it('Returns null if you try to denqueue anything other than dog or cat', () => {
    let dog = new Animal('dog');
    let fish = new Animal('fish');
    let shelter = new AnimalShelter();
    shelter.enqueue(dog);
    // expect(shelter.dog.peek()).toBe('dog');
    expect(shelter.dequeue(fish)).toBe(null);
  });

});
