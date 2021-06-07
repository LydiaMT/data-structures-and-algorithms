'use strict';

const Hashmap = require('../hashtable');

describe('hashtable test should', () => {

  let hashmap = new Hashmap(3);
  hashmap.set('brian', 'nations');
  hashmap.set('alex', 'boberson');
  hashmap.set('alex', 'johnson');
  hashmap.set('alex', 'thompson');
  hashmap.set('xale', 'coolness');
  hashmap.set('sally', 'samsonite');
  hashmap.set('tom', 'tiller');

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    expect(hashmap.contains('alex')).toBe(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    expect(hashmap.get('alex')).toStrictEqual(['alex', 'thompson']);
    expect(hashmap.get('Lydia')).toStrictEqual('no values at this key');
    expect(hashmap.get('lydia')).toStrictEqual('no values at this key');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashmap.contains('Lydia')).toBe(false);
  });

  it('Successfully handle a collision within the hashtable', () => {
    expect(hashmap.storage[0].head.val).toContain('tom');
    expect(hashmap.storage[0].head.next.val).toContain('sally');

  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashmap.get('tom')).toStrictEqual(['tom', 'tiller']);
    expect(hashmap.get('sally')).toStrictEqual(['sally', 'samsonite']);
  });

  it('Successfully hash a key to an in-range value', () => {
    expect(hashmap.size).toBe(3);
  });

});
