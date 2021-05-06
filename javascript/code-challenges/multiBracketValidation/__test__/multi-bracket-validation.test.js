'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('Multi Bracket Validation Function', () => {

  it('can return TRUE when all pairs are balances', () => {
    expect(multiBracketValidation(`(){}[[]]`)).toBe(true);
  });

  it('can return FALSE when the pairs are not properly balances', () => {
    expect(multiBracketValidation(`[({}]`)).toBe(false);
  });

  it('can return TRUE when the pairs are balanced and there are other non-bracket characters throughout the string', () => {
    expect(multiBracketValidation(`()[[Extra Characters]]`)).toBe(true);
  });

  it('can return FALSE when the pairs are not balanced and there are other non-bracket characters throughout the string', () => {
    expect(multiBracketValidation(`{(hello})`)).toBe(false);
  });

});
