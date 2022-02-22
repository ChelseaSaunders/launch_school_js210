"use strict"

// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the end.

/*
Problem:
take an input number and a rotation number (n)
remove n digits from orignal number
in removed digits, move the first digit to the end of the digits
concatenate the rotated digits with the earlier portion of the number

edge cases:
what to do with 0 as rotation number // return orig number
what to do with -1 as rotation number // return undefined
what to do with any non-integer // return undefined
what to do with rotation number that is greater than the number of digits in
  input // return undefined
non-integer test number

DATA:
input is number
output is number
probably easiest to split into string, then into array in order to manipulate

ALGO:
first validate--if parseInt(num, 10) and parseInt(rotations, 10) dont equal
  their un parsed value, return undefined
initiialize negativeNum to num < 0 return
reassign numbr to absolute value
convert number to string
split strig into array of chars
if rotations is less than array length, return undefined
separate numbers to be rotated by calling .splice with
  array.length - rotation num, rotation num, assign to rotating numbers
rotate rotating numbers with function already created

concantenate rotated numbers to remaining numbers
join the array
convert to number
if negativeNum then reasssign num to 0 -num
return that rotated number
*/

function rotateRightmostDigits(num, rotation) {
  if (invalidInput(num, rotation)) return undefined;
  if (rotation === 0) return num;

  let negativeNum = num < 0;
  num = Math.abs(num);
  let numArray = String(num).split('');

  if (rotation > numArray.length) return undefined;
  numArray = rotate(numArray, rotation);

  return convertToNumber(numArray, negativeNum);
}

function invalidInput(number, rotations) {
  return parseInt(number, 10) !== number ||
          parseInt(rotations, 10) !== rotations ||
          rotations < 0;
}

function rotate(arr, rotations) {
  let rotationIndex = arr.length - rotations;
  let rotatingNums =  arr.splice(rotationIndex, rotations);

  let first = rotatingNums[0];
  rotatingNums = rotatingNums.splice(1).concat(first);
  return arr.concat(rotatingNums);
}

function convertToNumber(arr, negative) {
  let number = parseInt(arr.join(''), 10);
  return negative ? 0 - number : number;
}

console.log(rotateRightmostDigits(735291, 1); // 735291 => no rotation
console.log(rotateRightmostDigits(735291, 2); // 7352 19 -> (91 => 1 +9)
console.log(rotateRightmostDigits(735291, 3));
                    // 735 912 ( 291 => 91 +2
console.log(rotateRightmostDigits(735291, 4));
// 73 2915 (5291 => 291 + 5
console.log(rotateRightmostDigits(735291, 5));
                   // 7 52913 (35291 => 5291 +3)
console.log(rotateRightmostDigits(735291, 6));      // 352917 (735291 => 35291 +7)
console.log(rotateRightmostDigits(-735291, 2)); // -735219
console.log(rotateRightmostDigits(735291, 7)); // undefined
console.log(rotateRightmostDigits(735291, 0)); // 735291
console.log(rotateRightmostDigits('abc', 2)); // undefined
console.log(rotateRightmostDigits(12.34, 2)); // undefined
console.log(rotateRightmostDigits(735291, -1)); // undefined
console.log(rotateRightmostDigits(735291, 1.1)); //undefined
console.log(rotateRightmostDigits(735291, 'a')); // undefined