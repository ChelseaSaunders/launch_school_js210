/* Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII 
numeric representation from the ASCII table, add 32 to that number, then convert 
the number back to a character using the same ASCII table. You can use the 
String.fromCharCode and the String.charCodeAt methods for these operations. For 
example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

Examples

function toLowerCase(string) {
  // …
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

You may use the square brackets ([]) to access a character by index (as shown 
below), and the length property to find the string length. However, you may not 
use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"


PROBLEM

EXPLICIT RULES

IMPLICIT RULES

EXAMPLES

DATA

ALGORITHM 

*/

function toLowerCase(string) {
  let lowerCaseString = ''
  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];

    if (currentChar.charCodeAt(0) >= 65 && currentChar.charCodeAt(0) <= 90) {
      let asciiNumeric = currentChar.charCodeAt(0);         // 65
      asciiNumeric += 32;
      lowerCaseString += String.fromCharCode(asciiNumeric);
    } else lowerCaseString += currentChar;
  }

  return lowerCaseString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

/* LS's much better solution:
function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);

    if (string[index] >= 'A' && string[index] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

*/

