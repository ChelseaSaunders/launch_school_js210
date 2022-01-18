const UPPERCASE_START = 65;
const UPPERCASE_END = 90;
const LOWERCASE_START = 97;
const LOWERCASE_END = 122;
const ENCRYPT_INCREMENT = 13;

function isUpperCaseLetter(characterCode) {
  return !!(characterCode >= UPPERCASE_START && characterCode <= UPPERCASE_END);
}

function isLowerCaseLetter(characterCode) {
  return !!(characterCode >= LOWERCASE_START && characterCode <= LOWERCASE_END);
}

function encodeUpperCaseLetter(characterCode) {
  let newCharacterCode = characterCode + ENCRYPT_INCREMENT;
  if (newCharacterCode > UPPERCASE_END) {
    newCharacterCode -= UPPERCASE_END;
    newCharacterCode += 64;
  }

  return String.fromCharCode(newCharacterCode);
}

function encodeLowerCaseLetter(characterCode) {
  let newCharacterCode = characterCode + ENCRYPT_INCREMENT;
  if (newCharacterCode > LOWERCASE_END) {
    newCharacterCode -= LOWERCASE_END;
    newCharacterCode += 96;
  }

  return String.fromCharCode(newCharacterCode);
}

function rot13(string) {
  let cipherString = ''

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index]
    let currentCharCode = currentChar.charCodeAt(0);

    if (isUpperCaseLetter(currentCharCode)) {
      cipherString += encodeUpperCaseLetter(currentCharCode);
    } else if (isLowerCaseLetter(currentCharCode)) {
      cipherString += encodeLowerCaseLetter(currentCharCode);
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