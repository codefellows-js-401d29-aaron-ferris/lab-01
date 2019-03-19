'use strict';
// export
const arithmetic = module.exports = {};

//global variable
let result;

//helper function for non-numbers
function typehelper(arr) {
  arr.forEach((value) => {
    if( typeof value !== "number"){ 
      result = null; 
    }
  });
};

function infinityhelper(){
  if (result === Infinity){
    result=null;
  }
}

//add function
arithmetic.add = function(arr) {
  result = 0;
  arr.forEach((value) => {
    result += value;
  });
  typehelper(arr);
  return result;
};

//subtract
arithmetic.subtract = function (arr) {
  result = arr[0];
  for (let i=1; i<arr.length; i++){
    result -= arr[i];
  };  
  typehelper(arr);
  return result
};

//multiply function
arithmetic.mult = function(arr){
  result = arr[0];
  for (let i=1; i<arr.length; i++){
    result *= arr[i];
  };  
  typehelper(arr);
  return result
}

//divide function
arithmetic.div = function(arr){
  result = arr[0];
  for (let i=1; i<arr.length; i++){
    result /= arr[i];
  };  
  typehelper(arr);
  infinityhelper(result);
  return result;
}
