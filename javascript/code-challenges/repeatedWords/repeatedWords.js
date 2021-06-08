'use strict';

const repeatedWord = (string) => {
  let words = string.toLowerCase().split(/[\s|,|.]/);
  for( let i = 0; i < words.length; i++){
    if(words.includes(words[i]) && words.indexOf(words[i]) !== words.lastIndexOf(words[i])){
      return words[i];
    }
  }
  return 'no repeated words';
};

module.exports = repeatedWord;
