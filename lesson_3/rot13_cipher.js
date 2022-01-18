// ASCII values:

const UPPERCASE_START = 65;
const UPPERCASE_END = 90;
const LOWERCASE_START = 97;
const LOWERCASE_END = 122;
const ENCRYPT_INCREMENT = 13;

function characterType(characterCode) {
  if (characterCode >= UPPERCASE_START && characterCode <= UPPERCASE_END) {
    return 'uppercase';
  } else if (characterCode >= LOWERCASE_START && characterCode <= LOWERCASE_END) {
    return 'lowercase';
  }
}

function encodeLetter(characterCode, letterRangeStart, letterRangeEnd) {
  let newCharacterCode = characterCode + ENCRYPT_INCREMENT;

  if (newCharacterCode > letterRangeEnd) {
    newCharacterCode -= (letterRangeEnd + 1); 
    newCharacterCode += letterRangeStart;
  }

/* Note: The reason for adding 1 to letterRangeEnd is because we need to start 
new values at 0. If a number is 1 past the last letter, it should evaluate
to the beginning of the letter range, NOT the beginning of the letter range
+ 1  */

  return String.fromCharCode(newCharacterCode);
}

function rot13(string) {
  let cipherString = ''

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index]
    let charCode = currentChar.charCodeAt(0);
    let charType = characterType(charCode);

    if (charType === 'uppercase') {
      cipherString += encodeLetter(charCode, UPPERCASE_START, UPPERCASE_END);
    } else if (charType === 'lowercase') {
      cipherString += encodeLetter(charCode, LOWERCASE_START, LOWERCASE_END);
    } else {
      cipherString += currentChar;
    }
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
// logs: Grfgvat, 1, 2, 3!

console.log(rot13(rot13(customTestStringWithNumbers)));
// logs: Testing, 1, 2, 3!