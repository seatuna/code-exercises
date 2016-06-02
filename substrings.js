'use strict';

// Given 2 strings, determine whether any substrings that exist in both strings

let substring = function(str1, str2) {
  let results = [];
  let longest;

  // determines which string is longer
  if(str1.length > str2.length) {
    longest = str1;
  } else {
    longest = str2;
  }

  //function for getting all possible substrings of a string
  let allSubstrings = function(string) {
    let strArray = [];

    for(let i = 0; i < string.length; i++) {
      strArray.push(string.substring(i));
    }

    return strArray;
  }

  //function to determine whether a substring in str1 exists in str2
  let substrings1 = allSubstrings(str1);
  let substrings2 = allSubstrings(str2);

  for(let i = 0; i < longest.length; i++) {
    if(substrings1.indexOf(substrings2[i]) !== -1) {
      results.push(substrings2[i]);
    }
  }

  console.log(results);
}

substring('blahblahblah','i cannot sleep blah');
