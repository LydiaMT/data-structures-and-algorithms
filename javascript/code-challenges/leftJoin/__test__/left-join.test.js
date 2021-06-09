'use strict';

const { leftJoin, Hashmap } = require('../left-join.js');

describe('Left Join Test', () => {

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

  it('should combine values if the keys match', () => {
    expect(hashmap1.storage[0].head.val[2]).toBe('dos');
    expect(hashmap1.storage[1].head.val[2]).toBe('uno');
    expect(hashmap1.storage[2].head.val[2]).toBe('cinco');
    expect(hashmap1.storage[3].head.val[2]).toBe('cuatro');
    expect(hashmap1.storage[4].head.val[2]).toBe('tres');
  });

});
