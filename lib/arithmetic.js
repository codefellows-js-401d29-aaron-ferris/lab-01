'use strict';
// export
const arithmetic = module.exports = {};

//global variable
let result;

//helper function for non-numbers
function typehelper(arr) {
  arr.forEach((value) => {
    if (typeof value !== 'number') {
      result = null;
    }
  });
}

function infinityhelper() {
  if (result === Infinity) {
    result = null;
  }
}
//function validArguments(inputs, diasallow){
//   return (inputs.length>= 2&& ! inputs.includes(disallow) && allValuesNumeric(inputs) ||false
// }

// function allValuesNumeric(inputs){
//   return inputs.every(isNumber);
// }

// function isNumber(input){
//   return typeof input==='number';
// }




//add function
arithmetic.add = function (arr) {
  result = 0;
  arr.forEach((value) => {
    result += value;
  });
  typehelper(arr);
  return result;
};
// arithmetic.add = function(...numbers){
// return validArguments(numbers)
//  ? numbers.reduce( (sum, val) => sum+ value, 0): null;
// }



//subtract
arithmetic.subtract = function (arr) {
  result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result -= arr[i];
  }
  typehelper(arr);
  return result;
};

//arithmetic.subtract = function(...numbers){
//   return validArguments(numbers)
//   ? numbers.reduce( (result, n) => result &&  result-n) 
//   : null;
// }

//multiply function
arithmetic.mult = function (arr) {
  result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
  }
  typehelper(arr);
  return result;
};

// arithmetic.mult = function(...numbers) {
//   return validArguments(numbers)
//   ? numbers.reduce( (result,n) => result*n, 1): null;
// }

//divide function
arithmetic.div = function (arr) {
  result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result /= arr[i];
  }
  typehelper(arr);
  infinityhelper(result);
  return result;
};

// arithmetic.div = function(...numbers) {
//   return validArguments(numbers, 0)
//   ? numbers.reduce( (result,n) =>result && result-n)
//   : null;
// }