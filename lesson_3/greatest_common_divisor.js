/* Create a function that computes the Greatest Common Divisor of two positive 
  integers.

PROBLEM

EXPLICIT RULES

IMPLICIT RULES

EXAMPLES

DATA

ALGORITHM 
create function greatestCommonDivisor that takes two integers as arg's

*/

function gcd(num1, num2) {
  let lesserValue;
  num1 <= num2 ? lesserValue = num1 : lesserValue = num2;

  for (let divisor = lesserValue; divisor >= 1; divisor -= 1) {
    if ((num1 % divisor === 0) && (num2 % divisor === 0)) return divisor;
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
