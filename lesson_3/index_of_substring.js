/* Write two functions that each take two strings as arguments. Their expected 
  behaviors are as follows:
  - The indexOf function searches for the first instance of a substring in 
    firstString that matches the string secondString, and returns the index of 
    the character where that substring begins.
  - The lastIndexOf function searches for the last instance of a substring in 
    firstString that matches the string secondString, and returns the index of 
    the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified 
by secondString.

You may use the square brackets ([]) to access a character by index (as shown 
below), and the length property to find the string length. However, you may not 
use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"

PROBLEM
(first)


EXPLICIT RULES

IMPLICIT RULES

EXAMPLES
function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

DATA

ALGORITHM 

*/

function indexOf(firstString, secondString) {
  for(let index = 0; index < firstString.length; index += 1) {
    if (firstString[index] === secondString[0]) {
      for (secondIndex = 0; secondIndex < secondString.length; secondIndex += 1) {
        if (firstString[index + secondIndex] != secondString[secondIndex]) break;
        else if (secondIndex + 1 === secondString.length) return index;
      }
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let lastIndexFirstString = firstString.length - 1;

  for(let index = lastIndexFirstString; index >= 0; index -= 1) {
    if (firstString[index] === secondString[0]) {
      for (secondIndex = 0; secondIndex < secondString.length; secondIndex += 1) {
        if (firstString[index + secondIndex] != secondString[secondIndex]) break;
        else if (secondIndex + 1 === secondString.length) return index;
      }
    }
  }
  return -1;  
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1)