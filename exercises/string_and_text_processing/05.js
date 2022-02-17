"use strict"

// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// changed to lowercase. Leave all other characters unchanged.

function swapCase(str) {
  let swapped = '';
  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (char.match(/[^a-z]/gi)) {
      swapped += char;
    } else if (char.match(/[/a-z]/)) {
      swapped += char.toUpperCase();
    } else {
      swapped += char.toLowerCase();
    }
  }

  return swapped;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"