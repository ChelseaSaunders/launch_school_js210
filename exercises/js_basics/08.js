/* Write a function that takes a string of digits and returns the appropriate 
  number as an integer. The string may have a leading + or - sign; if the first 
  character is a +, your function should return a positive number; if it is a -, 
  your function should return a negative number. If there is no sign, return a 
  positive number.

  You may assume the string will always contain a valid number. */

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function stringToSignedInteger(str) {
  let digits = str.split('');
  let leadingChar;

  if (digits[0] === '+' || digits[0] === '-') {
    leadingChar = digits.shift();
  }

  let num = 0;

  digits.forEach((digit) => {
    num *= 10;
    num += NUMBERS[digit];
  })

  return leadingChar === '-' ? num = 0 - num : num;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

/* LS BETTER SOLUTION:
function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}
*/