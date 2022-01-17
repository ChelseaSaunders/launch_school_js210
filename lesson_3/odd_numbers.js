/* Write a function that takes a positive integer as an argument, and logs all 
  the odd numbers from 1 to the passed in number (inclusive). All numbers should 
  be logged on separate lines. 

PROBLEM
take a number, log every odd number beginning with 1 and including the given 
number (provided it's odd), and output each integer, on its own line

Implicit rules:
don't modify argument

EXAMPLES
19 would log:
1
3
5
7
9
11
13
15
17
19

DATA
input is integer, output will be string in console, but no need to convert since
console.log will do that

ALGORITHM
- create function oddNumbers that takes int as an argument
- initialize for loop with index initialized to 1, and condition as less than or
  equal to int, and addng two to int as incrimenter
  - log each int to the console

*/

function oddNumbers(int) {
  for (let i = 1; i <= int; i += 2) console.log(i);
}

console.log(oddNumbers(9));
console.log(oddNumbers(1));
console.log(oddNumbers(6));