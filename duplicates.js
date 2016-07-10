'use strict';

// Remove duplicates in array

const removeDuplicates = function(arr) {
  let noDupes = {};
  let count = 0;
  let noDupesLength = Object.keys(noDupes).length;

  arr.forEach(function(v) {
    for(let i = 0; i <= noDupesLength; i++) {
      if(v !== noDupes[i]) {
        noDupes[count] = v;
        count++;
      }
    }
  });

  return Object.keys(noDupes);
}

console.log(removeDuplicates([1,1,1,4,2,6,7,8,4,2,3]));
