'use strict';

// Write a console program that prints the numbers from 1 to 100. But for
// multiples of three print Company instead of the number and for the
// multiples of five print Name. For numbers which are multiples of both
// three and five print ExploricaTours.


const CompanyName = function() {
  for(let i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
      console.log('CompanyName');
    } else if(i % 3 === 0) {
      console.log('Company');
    } else if(i % 5 === 0){
      console.log('Name');
    } else {
      console.log(i);
    }
  }
}

// print Triangles using *. Example output was given.

const TriangleA = function() {
  let count = 1;

  for (let i = 5; count <= 12; i--) {
    console.log((" ").repeat(i) + ('*').repeat(count));
    count += 2;
  }
}

const TriangleB = function () {
  let countA = 1;
  let countB = 9;

  for (let i = 5; countA <= 12; i--) {
    console.log((" ").repeat(i) + ('*').repeat(countA));
    countA += 2;
  }

  for (let i = 1; countB > 0; i++) {
    console.log((" ").repeat(i) + ('*').repeat(countB));
    countB -= 2;
  }
}
