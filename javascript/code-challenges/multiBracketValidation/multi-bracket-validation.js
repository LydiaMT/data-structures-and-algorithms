'use strict';

const multiBracketValidation = (input) => {
  let arrayified = input.split('');
  // helper funciton to remove non-bracket characters from arrayified
  function bracketCharacter(arr){
    for( let i = 0; i < arr.length; i++ ){
      if(arr[i] === '(' || arr[i] === '[' || arr[i] === '{' || arr[i] === ')' || arr[i] === ']' || arr[i] === '}'){
        return true;
      } return false;
    }
  }

  // initializers
  let filteredArray = arrayified.filter(bracketCharacter);
  let stack = [];
  let map ={
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };

  for( let i = 0; i < filteredArray.length; i++){
    // add to stack
    if(filteredArray[i] === '(' || filteredArray[i] === '[' || filteredArray[i] === '{' ){
      stack.push(filteredArray[i]);
    } else {
      // remove from stack
      let last = stack.pop();
      if(filteredArray[i] !== map[last]) return false;
    }
  }
  // determin if any unbalanced pairs remain
  if (stack.length !== 0) return false;
  return true;

};

module.exports = multiBracketValidation;
