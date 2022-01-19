const UPPERCASE_START = 'A'.charCodeAt();
const UPPERCASE_END = 'Z'.charCodeAt();
const LOWERCASE_START = 'a'.charCodeAt();
const LOWERCASE_END = 'z'.charCodeAt();
const ENCRYPT_INCREMENT = 13;

function isUpperCase(characterCode) {
  return !!(characterCode >= UPPERCASE_START && characterCode <= UPPERCASE_END);
}

function isLowerCase(characterCode){
  return !!(characterCode >= LOWERCASE_START && characterCode <= LOWERCASE_END);
}

function encodeLetter(characterCode, letterRangeStart, letterRangeEnd) {
  let newCharacterCode = characterCode + ENCRYPT_INCREMENT;

  if (newCharacterCode > letterRangeEnd) {
    newCharacterCode -= (letterRangeEnd + 1); 
    newCharacterCode += letterRangeStart;
  }

  return String.fromCharCode(newCharacterCode);
}

function rot13(string) {
  let cipherString = ''

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index]
    let charCode = currentChar.charCodeAt(0);

    if (isUpperCase(charCode)) {
      cipherString += encodeLetter(charCode, UPPERCASE_START, UPPERCASE_END);
    } else if (isLowerCase(charCode)) {
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

console.log(rot13(''));
// logs: Grfgvat, 1, 2, 3!

console.log(rot13(rot13('')));