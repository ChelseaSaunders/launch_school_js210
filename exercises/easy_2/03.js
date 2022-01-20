/* Write a function that takes one argument, a positive integer, and returns a 
  string of alternating '1's and '0's, always starting with a '1'. The length 
  of the string should match the given integer.

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/

function stringy(num) {
  let string = '';

  for (let i = 1; i <= num; i += 1) {
    if (i % 2 === 0) {
      string += '0';
    } else {
      string += '1';
    }
  }

  return string;
}

console.log(stringy(1));
console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));