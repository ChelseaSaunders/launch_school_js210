function isUpperCaseLetter(character) {
  let characterCode = character.charCodeAt(0);
  return !!(characterCode >= 65 && characterCode <= 90);
}

function isLowerCaseLetter(character) {
  let characterCode = character.charCodeAt(0);
  return !!(characterCode >= 97 && characterCode <= 122);
}

function encodeUpperCaseLetter(character) {
  let newCharacterCode = character.charCodeAt(0) + 13;
  if (newCharacterCode > 90) {
    newCharacterCode -= 90;
    newCharacterCode += 64;
  }

  return String.fromCharCode(newCharacterCode);
}

function encodeLowerCaseLetter(character) {
  let newCharacterCode = character.charCodeAt(0) + 13;
  if (newCharacterCode > 122) {
    newCharacterCode -= 122;
    newCharacterCode += 96;
  }

  return String.fromCharCode(newCharacterCode);
}

function rot13(string) {
  let cipherString = ''

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index]

    if (isUpperCaseLetter(currentChar)) {
      cipherString += encodeUpperCaseLetter(currentChar);
    } else if (isLowerCaseLetter(currentChar)) {
      cipherString += encodeLowerCaseLetter(currentChar);
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