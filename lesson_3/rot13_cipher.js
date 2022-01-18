/* 
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates 
a String into a new String:

For each character in the original String:
  - If the character is a letter in the modern English alphabet, change it to 
    the character 13 positions later in the alphabet. Thus, a becomes n. If you 
    reach the end of the alphabet, return to the beginning. Thus, o becomes b.
  - Letter transformations preserve case. A becomes N while a becomes n.
  - Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and returns that String transformed 
by the rot13 cipher.

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.

This happens since there are 26 characters in the modern English alphabet: 2 
sets of 13.

PROBLEM

EXPLICIT RULES

IMPLICIT RULES

EXAMPLES

DATA

ALGORITHM 

*/
function isUpperCaseLetter(character) {

}

function isLowerCaseLetter(character) {

}

function encodeUpperCaseLetter(character) {

}

function encodeLowerCaseLetter(character) {

}

function rot13(string) {
  let cipherString = ''

  for (let index = 0; index < string.length; index += 1){
    let currentChar = string[index]

    if (isUpperCaseLetter(currentChar)) {
      cipherString += encodeUpperCaseLetter(currentChar);
    } else if (isLowerCaseLetter(currentChar)) {
      cipherString += encodeLowerCaseLetter(currentChar);
    } else {
      cipherString += currentChar;
    }

  return cipherString;
}

let testString = 'Teachers open the door, but you must enter by yourself.';
let customTestStringWithNumbers = 'Testing, 1, 2, 3!';
console.log(rot13(testString));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13(testString)));
// logs: Teachers open the door, but you must enter by yourself.

console.log(rot13(customTestStringWithNumbers));
// logs: Grfg_at, 1, 2, 3!

console.log(rot13(rot13(customTestStringWithNumbers)));
// logs: Testing, 1, 2, 3!