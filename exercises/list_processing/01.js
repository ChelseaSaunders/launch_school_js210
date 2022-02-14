"use strict"

// Write a function that takes one argument, a positive integer, and returns the
// sum of its digits. Do this without using for, while, or do...while loops -
// instead, use a series of method calls to perform the sum.
// ALGO:
// convert num to string
// split string into array
// convert each mumber back into number - map
// sum all of those numbers - reduce

function sum(num) {
  return String(num)
    .split('')
    .map((n) => parseInt(n, 10))
    .reduce((sum, n) => sum + n);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45