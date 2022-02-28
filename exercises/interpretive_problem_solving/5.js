"use strict"

// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution. It uses a series of Caesar Ciphers based on the letters of a
// keyword. Each letter of the keyword is treated as a shift value. For
// instance, the letter 'B' corresponds to a shift value of 1, and the letter
// 'd' corresponds to a shift value of 3. In other words, the shift value used
// for a letter is equal to its index value in the alphabet. This means that the
// letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters
// 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by
// applying the current shift value to a Caesar Cipher for that particular
// character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice that in the example, the key isn't moved forward if the character
// isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only
// encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword
// doesn't matter—in other words, the resulting encryption won't change
// depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula
// recta. Each row of the table corresponds to a Caesar Cipher encryption using
// the columns' character letter as a shift value.

/*
Problem:
Take text, and a word.  Use the charachters in the word to encrypt the text.
  Each character in the word corresponds to its index position (0-25) in the
  alphabet.  Shift characters in the text for each value in the word, when the
  last value in the word is used, start over again (see example) until the
  text has been converted.

- Rules:
  - Shift is case insensensitive, BUT encypted string should retain original
    case (if letter was uppercase before encryption it should be upperase after)
  - Non alphabetical charachters should be left in place as-is, BUT should not
    get counted in the shift pattern (eg. if the last alph char was on the shift
    position 1, and then there was a non alpha char, the next alpha would still
    use the next shift position, which is 2)

Questions:
- Validate input, what to do with invalid input
- What to do with empty strings--both as text or as shift
- What to do if shift string is longer than text
- What to do with text strings that contain only non-alpha char

DATA:
Input: string, string
Output string:
Storing key, use string (char index positions)
data manipulation: ustring

ALOGO:
create const all alpha chars *lowercase*
- if shift.length === 0 or if text.match/[a-z]gi/ === null, return text;
- if text.length === 0, return ''
-
convert shift string into array of number shift values
  HELPER FUNCTION:
    - split string into array of chars
    - map over char array using index Of from alpha string
initialize empty string to encrypted
create shiftCount, assign to 0
Use a for loop to iterate through string - i= 0, i < text length, + 1
if text[i].match (/[^a-z]/i) add char to encrypted
else
helper function to encrypt char, and add to string
  HELPER FUNCTION currentChar, encryptArray[shiftCount]:
    - get currentChar index pos from alpha, using alpha indexOf and lowercase c
      char
    - add encrypt value
      - if greater than or equal to the length of alpha, then reassign to new
        value - alpha length
    - assign encrypt to alpha[posiotn]
    - if the orig char was uppercase reassign enncrypt value to .toUpperCase()

reassign shiftCount (use helper function)
  HELPER FUNCTION:
    - reassign shiftCount to shiftCount + 1
    - if that is === to the length of the encrypt array, reassign to 0
return encrypt string
*/

const alpha = 'abcdefghijklmnopqrstuvwxyz';

function vigenereCypher(text, shift) {
  if (shift.length === 0 ||
      text.match(/[a-z]/gi) === null ||
      text.length === 0) { return text; }

  let encryptKey = generateEncryptKey(shift);
  let encrypted = '';
  let shiftCount = 0;

  for (let i = 0; i < text.length; i += 1) {
    let currentChar = text.charAt(i);
    if (currentChar.match(/[^a-z]/i)) {
      encrypted += currentChar;
    } else {
      encrypted += encryptChar(currentChar, encryptKey[shiftCount]);
      shiftCount = calculateShiftCount(shiftCount, encryptKey);
    }
  }

  return encrypted;
}

function generateEncryptKey(shiftString) {
  return shiftString.split('').map((char) => alpha.indexOf(char));
}

function encryptChar(char, shiftValue) {
  let position = alpha.indexOf(char.toLowerCase());
  position += shiftValue;
  if (position >= alpha.length) position -= alpha.length;
  let encryptChar = alpha[position];
  return char === char.toUpperCase() ? encryptChar.toUpperCase() : encryptChar;
}

function calculateShiftCount(count, keyArr) {
  count += 1;
  return count >= keyArr.length ? count - keyArr.length : count;
}

console.log(vigenereCypher("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereCypher('', '')); // ''
console.log(vigenereCypher("Pineapples don't go on pizzas!", ''));  // Pineapples don't go on pizzas!
console.log(vigenereCypher('', 'meat')); // ''
console.log(vigenereCypher('abc', 'abcd')); // 0, 1, 2; ace
console.log(vigenereCypher('123', 'ab'));