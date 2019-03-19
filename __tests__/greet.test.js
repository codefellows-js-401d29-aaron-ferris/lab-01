'use strict';

//export

const greet = require('../lib/greet.js');

describe('Greet Module', () => {
  //setting simple filepath
  let greeting = greet.greeting;

  it('When input (name), returns Hello (name)', () => {
    expect(greeting('Mr. Bean')).toEqual('Hello Mr. Bean');
  });

  it('When input world, returns Hello world', () => {
    expect(greeting('world')).toEqual('Hello world');
  });

  it('When input is a number, returns null', () =>{
    expect(greeting(5)).toEqual(null);
  });

  it('When input is a array, returns null', () =>{
    expect(greeting(['Rowan Atkinson', 'Sean Bean'])).toEqual(null);
  });

});