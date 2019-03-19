'use strict';
//export
const greet = module.exports = {};

//global variable
let result;

//helper function
function typehelper(a) {
  if (typeof a !== 'string') {
    result = null;
  }
}

greet.greeting = function (name) {
  result = `Hello ${name}`;
  typehelper(name);
  return result;
};