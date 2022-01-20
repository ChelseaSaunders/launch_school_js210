/* Given a string that consists of some words and an assortment of 
  non-alphabetic characters, write a function that returns that string with all 
  of the non-alphabetic characters replaced by spaces. If one or more 
  non-alphabetic characters occur in a row, you should only have one space in 
  the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line " */

function cleanUp(string) {
  let alphaString = removeNonLetters(string);

  let cleanString = '';

  for (let idx = 0; idx < alphaString.length; idx += 1) {
    if (alphaString[idx] != ' ' || cleanString[cleanString.length - 1] != ' ') {
      cleanString += alphaString[idx];
    }
  }

  return cleanString;
}

function removeNonLetters(string) {
  return string.replace(/[^A-Za-z]/g, ' ');
}

console.log(cleanUp("---what's my +*& line?"));