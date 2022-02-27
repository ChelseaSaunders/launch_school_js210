"use strict"

// Write a function that implements the Caesar Cipher. The Caesar Cipher is one
// of the earliest and simplest ways to encrypt plaintext so that a message can
// be transmitted securely. It is a substitution cipher in which each letter in
// a plaintext is substituted by the letter located a given number of positions
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3
// positions, it will be substituted with the letter 'D'. This shift value is
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper
// case). Any other character is left as is. The substituted letters are in the
// same letter case as the original letter. If the key value for shifting
// exceeds the length of the alphabet, it wraps around from the beginning.

/* PROBLEM:
Create a program that takes text and an integer, and shifts every letter value
  in the text by the integer number based on the alphabetical position of the
  letter, and keeping the letter case in tact.

RULES:
- keep the letter case in tact (so if a letter is lowercase, replacement shouls
  be lowercase)
- if adding the letter shift value to the current letter value position is
  greater than 26 (then start back at zero, with exess number, so if you had 28,
  thats 2 more than max alpha value, so you would land on 'B', the second alpha
  charatcter)
- ignore non-letter values

Questions:
- Do we have to validate input? --make sure text is strng; make sure
  shift number is intgeter
- What to do with negative shift (work the shift in reverse or treat as ivalid)
- What to do with empty strings? --> presumably return an empty string


DATA:
input: string, integer
output: rotated string
processing:
- array to hold alpha values


ALGO:
create constant; array with alphabetic charaters in order, lowecase

create function
*validate input here
initialize encrypted to empty string;

format shift numvber
  helper function:
    if absolute value of number is greater than or equal to 26, reassign to
      remainder of number / 26
    if that number is negative, reassign to 26 - number;
    return number
if number is 0, return original string

for loop, with 0 as initial value; contineue as long as shoters that text length
  and incriment by 1
  currentChar = text.charAt i
  if currentChar.match(^[a-z]i), concat currectChar to encrypted
  else
    - create helper method, replace current letter, use current letter and shift
      number
    HELPER FUNCTION
      set current charachter position to alph.indexOf(currentLetter.toLowerCase)
      - add shift number to current position
         if that value is greater than alpha.length
         reassign to that number - alpha.length
      let newletter = array[position above]
      if initial letter === initialLetter.toUpperCAse, return
      newletterToUpperCAse, otherwise return new letter
    append this new charahter to encrypted string

  return encrypted string
*/


// Examples:

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
                'z'];

function caesarEncrypt(text, shiftNum) {
  shiftNum = simplifyShiftNum(shiftNum)
  if (shiftNum === 0 || text.length === 0) return text;
  let encrypted = '';

  for (let i = 0; i < text.length; i += 1) {
    let currentChar = text.charAt(i);
    if (!alpha.includes(currentChar.toLowerCase())) {
      encrypted += currentChar;
    } else {
      encrypted += encodeLetter(currentChar, shiftNum);
    }
  }
  return encrypted;
}

function simplifyShiftNum(num) {
  if (Math.abs(num) >= 26) num = num % 26;
  if (num < 0) num = 26 - num;
  return num;
}

function encodeLetter(letter, shift) {
  let charPosition = alpha.indexOf(letter.toLowerCase());
  charPosition += shift;
  if (charPosition >= alpha.length) charPosition -= alpha.length;
  if (letter === letter.toLowerCase()) {
    return alpha[charPosition];
  } else {
    return alpha[charPosition].toUpperCase();
  }
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));  //z, a, b, c, =>     // "d"
console.log(caesarEncrypt('a', 47));  // 47 - 26; 21 * remainder of 47 and 26  // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"