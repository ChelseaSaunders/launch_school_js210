"use strict"

// Write a function that computes the difference between the square of the sum
// of the first n positive integers and the sum of the squares of the first n
// positive integers.

/*
- generate array of all digits
- assign sum to reduce sum + currentNum on array
- assign square to reduce square ** currentNum on array
- return square - sum;

*/

function sumSquareDifference(num) {
  let integers = generateIntegerArray(num)
  let sumSquared = integers.reduce((sum, currentNum) => sum + currentNum) ** 2;
  let squaresSummed = integers.map((num) => num ** 2)
                              .reduce((sum, currentNum) =>  sum += currentNum);
  return sumSquared - squaresSummed;
}

function generateIntegerArray(number) {
  let integers = []
  for (let i = 1; i <= number; i += 1) integers.push(i);
  return integers;
}
// Examples:

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150