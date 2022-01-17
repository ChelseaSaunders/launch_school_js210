/* Write a function logMultiples that takes one argument number. It should log 
  all multiples of the argument between 0 and 100 (inclusive) that are also odd 
  numbers. Log the values in descending order.

  You may assume that number is an integer between 0 and 100.

PROBLEM
take a positive ingeger
log to console all numbers between 1-100 (including 1 and 100) that are 
multiples of the input number

EXPLICIT RULES
number will be integer berween 1 and 100

IMPLICIT RULES
? if no multiples? (should be at least one since input number is included in the 
  100 range)

EXAMPLES
logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21

DATA
integers

ALGORITHM

- create function printMultiples that takes one integer as argument
- create for loop, set index to 1, condition to index is <= 100, and incriment
  by 1
  - if input number % i is 0, output i

*/

function printMultiples(integer) {
  for (let i = 100; i >= 1; i -= 1) {
    if (i % 2 === 0 && i % integer === 0) {
      console.log(i);
    }
  }
}

console.log(printMultiples(17));
console.log(printMultiples(21));