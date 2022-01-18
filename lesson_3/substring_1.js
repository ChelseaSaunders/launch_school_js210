/* Write a function that returns a substring of a string based on a starting 
index and length.

function substr(string, start, length) {
  // …
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

The start argument is the starting index. If negative, treat it as strLength + 
start where strLength is the length of the string. For example, if start is -3, 
treat it as strLength - 3.

The length argument is the maximum length of the desired substring. If length 
exceeds the number of characters available, just use the available characters.

You may use the square brackets ([]) to access a character by index (as shown 
below), and the length property to find the string length. However, you may not 
use any other properties or methods from JavaScript's built-in String class.

let a = 'hello';
a[0];             // "h"
a[4];             // "o"
PROBLEM

EXPLICIT RULES

IMPLICIT RULES

EXAMPLES

DATA

ALGORITHM 

*/


function substr(string, start, length) {
  let startIndex = start;
  if (start < 0) startIndex = (string.length + start);

  let tooLong = startIndex + length;
  if (tooLong > string.length) tooLong = string.length;

  let subString = '';
  
  for (let index = startIndex; index < tooLong; index += 1){
    subString += string[index];
  }

  return subString;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
