'use strict';

// incomplete

function longest(arr, n) {
  let lengths = [];
  let longestIndex;

  for(let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }

  let uniqLengths = lengths.filter(function(a, b){
    return lengths.indexOf(a) === b;
  });

  if(uniqLengths.length > 1) {
    arr.sort(function(a, b) {
      if(a.length < b.length) {
        return 1;
      } else if (a.length > b.length) {
        return -1;
      } else {
        return 0;
      }
    });

    return arr[n-1];
  } else {
    return arr[0];
  }
}
