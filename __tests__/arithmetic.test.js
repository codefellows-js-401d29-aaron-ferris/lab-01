'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic Module', () => {
  //setting simple names to cut outarithmetic
  const add = arithmetic.add
  const sub = arithmetic.subtract
  const mult = arithmetic.mult
  const div = arithmetic.div

  //test arrays
  const one = [2,'garbanzo', 5 , 7]; //string in array
  const two =  [6, 3]; //two positive integers
  const three = [-4,2]; //one positive one negative integer
  const four = [-6,-6]; //two negative intigers
  const five = [.5, .25]; //decimals
  const six = [10, 2, 5] //three integers
  //for subtraction
  const subTest = [2,4]; //two positive integers for negative value

  //division
  const divTest = [9, 4, 0 ,3]; //zero test
  //non-array test
  const string = 'Mr. Bean';



  //addition tests
  it('add will return null for non-integers', () => {
   expect(add(one)).toEqual(null);
  });
  
  it('can add 2 numbers', () => {
    expect(add(two)).toEqual(9);
  });

  it('can add negative and positive numbers', () => {
    expect(add(three)).toEqual(-2);
  });

  it('can add two negative numbers', () => {
    expect(add(four)).toEqual(-12);
  });
  
  it('can add decimals', () =>{
    expect(add(five)).toEqual(.75);
  });

  it('can add three numbers', () =>{
    expect(add(six)).toEqual(17);
  });

  //subtraction tests
  it('subtract will return null for non-integers', () => {
    expect(sub(one)).toEqual(null);
   });
   
   it('can subtract 2 numbers for positive value', () => {
     expect(sub(two)).toEqual(3);
   });
 
   it('can subtract negative and positive numbers', () => {
     expect(sub(three)).toEqual(-6);
   });
 
   it('can subtract two negative numbers', () => {
     expect(sub(four)).toEqual(0);
   });
   
   it('can subtract decimals', () =>{
     expect(sub(five)).toEqual(.25);
   });
   it('can subtract 3 numbers', () => {
     expect(sub(six)).toEqual(3)
   })

   it('can subtract 2 positive numbers for negative value', () => {
    expect(sub(subTest)).toEqual(-2)
   })

   //multiplication tests
   it('multiplication will return null for non-integers', () => {
    expect(mult(one)).toEqual(null);
   });
   
   it('can multiply 2 numbers', () => {
     expect(mult(two)).toEqual(18);
   });
 
   it('can multiply negative and positive numbers', () => {
     expect(mult(three)).toEqual(-8);
   });
 
   it('can multiply two negative numbers', () => {
     expect(mult(four)).toEqual(36);
   });
   
   it('can multiply decimals', () =>{
     expect(mult(five)).toEqual(.125);
   });

   it('can multiply three numbers', () =>{
    expect(mult(six)).toEqual(100);
  });

   //division tests
   it('division will return null for non-integers', () => {
    expect(div(one)).toEqual(null);
   });
   
   it('can divide 2 numbers', () => {
     expect(div(two)).toEqual(2);
   });
 
   it('can divide negative and positive numbers', () => {
     expect(div(three)).toEqual(-2);
   });
 
   it('can divide two negative numbers', () => {
     expect(div(four)).toEqual(1);
   });
   
   it('can divide decimals', () =>{
     expect(div(five)).toEqual(2);
   });

   it('can divide three numbers', () =>{
     expect(div(six)).toEqual(1)
   })

   it('divide by 0 returns null', () => {
      expect(div(divTest)).toEqual(null);
   });

});

