/* Write a function that takes two arguments:

    a string to be split
    a delimiter character

The function logs the split strings to the console, as shown below:
Examples

function splitString(string, delimiter) {
  // …
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

You may use the square brackets ([]) to access a character by index (as shown 
below), and the length property to find the string length. However, you may not 
use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"


PROBLEM

EXPLICIT RULES
if no delimiter is passed, console log "error: no delimiter"

IMPLICIT RULES
separate console logs for each split substring
if empty string is delimiter, just logs each character

EXAMPLES

DATA

ALGORITHM 

*/

function splitString(string, delimeter) {
  if (delimeter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  } 

  let substring = ''
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimeter) {
      console.log(substring);
      substring = '';
    } else if (delimeter === '') {
      console.log(string[index]);
    } else {
      substring += string[index];
    }
  }

  if (substring) console.log(substring);
}

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o


splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world


splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

