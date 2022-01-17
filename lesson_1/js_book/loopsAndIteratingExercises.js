/* 1. Modify the age.js program you wrote in the exercises for the Input/Output
  chapter. The updated code should use a for loop to display the future ages.

  Original code:

let rlSync = require('readline-sync')
yourAge = Number(rlSync.question('How old are you? '))

let ten = 10
let twenty = 20
let thirty = 30
let fourty = 40

console.log(`In ${ten} years, you will be ${yourAge + ten} years old.`)
console.log(`In ${twenty} years, you will be ${yourAge + twenty} years old.`)
console.log(`In ${thirty} years, you will be ${yourAge + thirty} years old.`)
console.log(`In ${fourty} years, you will be ${yourAge + fourty} years old.`)
*/

let rlSync = require('readline-sync')
// yourAge = parseInt(rlSync.question('How old are you? '))

function displayDecadeAges (age) {
  console.log(`You are ${yourAge} years old.`)
  for (let decade = 10; decade <= 40; decade += 10) {
    console.log(`In ${decade} years, you will be ${age + decade} years old.`);
  }
}

// displayDecadeAges(yourAge);

/* 2. Write a function that computes and returns the factorial of a number by 
  using a for loop. The factorial of a positive integer n, signified by n!, is 
  defined as the product of all integers between 1 and n, inclusive: */

function factorial (number) {
  total = 1
  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }
  return total;
}

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));

/* The following code causes an infinite loop (a loop that never stops 
  iterating). Why?
  
  let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
  */

/* The problem occurs on line 3 where we assign 1 to counter inside the
  conditional part of the while loop. JavaScript accepts this code since the 
  assignment always returns a truthy value (1 in this case), the loop condition 
  never becomes false. Furthermore, the test on line 7 never becomes true since 
  the assignment on line 3 ensures that counter is always equal to 2 when we 
  execute line 7. */

/* Does the following code produce an error? Why or why not? What output does 
  this code send to the console? 

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

*/

/* The following code uses a randomNumberBetween function to generate a number 
  between its first and second arguments. It uses a while loop to try to 
  generate a number greater than 2. Refactor the code so that you don't need to 
  call randomNumberBetween from two different locations, lines 6 and 10. Do not 
  change the arguments you pass to randomNumberBetween. */

/* ORIGINAL CODE: 
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

*/

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);
 
console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

/* 6. Reimplement the factorial function from exercise 2 using recursion. Once 
  again, you may assume that the argument is always a positive integer. */

  function factorialUsingRecursion (number) {
    if number === 1 {
      return 1;
    }
    return number * factorialUsingRecursion(number - 1);
  }
  