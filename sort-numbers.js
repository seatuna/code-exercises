'use strict';

// Sort array of integers without using .sort

const sortNumbers = function(arr) {
  let result = [];

  while(arr.length > 0) {
    let min = arr.reduce(function(prev, curr) {
      return prev < curr ? prev : curr;
    });

    for(let i = 0; i < arr.length; i++) {
      if(min === arr[i]) {
        result.push(arr[i]);
        arr.splice(i, 1);
      }
    }
  }

  return result;
}

console.log(sortNumbers([23,6,7,-1,0,9,4,10,14,1,-3,9]));
