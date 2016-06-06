'use strict';

// This doesn't work for all cases yet, will need to fix this!
// Currently has an error with indexOf
// Given 2 strings, determine whether any substrings that exist in both strings

let substring = function(str1, str2) {
  let results = [];
  let longest;
  let shortest;

  // determines which string is longer
  if(str1.length > str2.length) {
    longest = str1;
    shortest = str2;
  } else {
    longest = str2;
    shortest = str1;
  }

  //function for getting all possible substrings of a string
  let allSubstrings = function(string) {
    let strArray = [];

    for(let i = 0; i < string.length; i++) {
      strArray.push(string.substring(i));
    }

    console.log(strArray);
  }

  //function to determine whether a substring in str1 exists in str2
  let substrings1 = allSubstrings(longest);
  let substrings2 = allSubstrings(shortest);

  for(let i = 0; i < longest.length; i++) {
    if(substrings2.indexOf(substrings1[i]) !== -1) {
      results.push(substrings1[i]);
    }
  }

  console.log(results);
}

substring('blahblahblah what is sleep idk','i cannot sleep blah');
