/* 
Implement a function that takes a string and a number times as arguments. The 
function should return the string repeated times number of times. If times is 
not a number, return undefined. If it is a negative number, return undefined 
also. If times is 0, return an empty string. You may ignore the possibility that 
times is a number that isn't an integer.

function repeat(string, times) {
  // …
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

PROBLEM

EXPLICIT RULES

IMPLICIT RULES

EXAMPLES

DATA

ALGORITHM 

*/
function repeat(string, times) {
  if (parseInt(times) != times || times < 0) return undefined;
  else if (times === 0) return '';
  else {
    let repeatedString = '';
    for (let count = times; count > 0; count -= 1) {
      repeatedString += string;
    }
    return repeatedString;
  }
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined