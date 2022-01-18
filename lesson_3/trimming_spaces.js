/* Write a function that takes a string as an argument, and returns the string 
stripped of spaces from both ends. Do not remove or alter internal spaces.

Example

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

You may use the square brackets ([]) to access a character by index (as shown 
below), and the length property to find the string length. However, you may not 
use any other properties or methods from JavaScript's built-in String class.

'hello'[0];       // "h"
'hello'[4];       // "o"

PROBLEM

EXPLICIT RULES

IMPLICIT RULES

EXAMPLES

DATA

ALGORITHM 

*/
function trim(string) {
  let firstCharIndex = 0;

  if (string[firstCharIndex] === ' ') {
    while (string[firstCharIndex] === ' ') firstCharIndex += 1;
  }

  let lastCharIndex = string.length - 1;

  if (string[lastCharIndex] === ' ') {
    while (string[lastCharIndex] === ' ') lastCharIndex -= 1;
  }

  let newString = ''
  for (let index = firstCharIndex; index <= lastCharIndex; index += 1) {
    newString += string[index];
  }

  return newString;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
