"use strict"

// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the
// maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

// Examples:

/*
Rules:
take a number, rotate digits such that the first digit is appended to the end
  of the number and the second digit (now first after rotation) is added to
  new number
Repeat this step (add additional first digits to same number) util there is only
  one digit left, then append that digit to the new number

DATA:
input is number
output is number
use strings

ALGO:
create the function that takes a number
set neagative to helper method, which will return true if number < 0
if negative set number to Math.abs(number)
convert number to a string
use rotation helper method on that strng
  - rotated
  - while string length is > 1
      - set rotatenum to string[0]
      - rotated + string[1]
    - set string to sting.slice(2) + rotatateNum
  - append str to rotated
  return rotated
convert to num:
if first position in string is 0, remove zero
then call parseInt on number base 10, reassign number to that
if negative 0 - rotated number
return rotated
*/

function maxRotation(num) {
  let negative = num < 0;
  if (negative) num = Math.abs(num);
  num = String(num);
  num = rotate(num);
  num = convertToNum(num, negative);
  return num;
}

function rotate(numString) {
  let rotated = '';

  while (numString.length > 1) {
    let rotateNum = numString[0];
    rotated += numString[1];
    numString = numString.slice(2) + rotateNum;
  }


  rotated += numString;
  return rotated;
}

function convertToNum(number, neg) {
  while (number[0] === 0) { number = number.slice(1) }

  number = parseInt(number, 10);
  if (neg) number = 0 - number;
  return number;
}

console.log(maxRotation(735291));          // 321579
// 735291
// 3 52917
// 32 9175
// 321 759
// 3215 97
// 32157 9

console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// 105
// 0 51
// 01 5
console.log(maxRotation(8703529146));      // 7321609845
// 8703529146
// 7 035291468
// 73 52914680
// 732 9146805
// 7321
//
//
//
console.log(maxRotation(-105)) // -15