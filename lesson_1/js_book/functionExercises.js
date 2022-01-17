/* 1. What does this code log to the console? Does executing the foo function 
    affect the output? Why or why not? */

let bar = 1;
function foo() {
  let bar = 2;
}

foo(); 
console.log(bar); // => 1

// global variable bar from line 4 is not reassigned in line 6 because line 6 
// initializes a new local variable scoped only within the block of the foo 
// method.

/* 2. In the exercises for the previous chapter, you wrote a dynamic greeter 
    program named greeter.js. Add a function to this program that solicits the 
    user's first and last names in separate invocations; the function should 
    return the appropriate name as a string. Use the return values to greet the 
    user with their full name. */


function getFirstAndLastName() {
  let rlSync = require('readline-sync');
  let firstName = rlSync.question('Please enter your first name: ');
  let lastName = rlSync.question('Please enter your last name: ');

  return firstName + ' ' + lastName;
}

function greetPeopleFirstAndLastName() {
  let fullName = getFirstAndLastName();
  console.log(`Hello ${fullName}!`);
}

greetPeopleFirstAndLastName();

/* LS solution:
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`); 
*/

/* 3. Write a program that uses a multiply function to multiply two numbers and 
    returns the result. Ask the user to enter the two numbers, then output the 
    numbers and result as a simple equation. */

function multiply (num1, num2) {
  return num1 * num2;
}

let rlSync = require('readline-sync');
let firstNumber = parseInt(rlSync.question('Enter the first number: '));
let secondNumber = parseInt(rlSync.question('Enter the second number: '));

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

/* LS Solution:
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
*/

/* 4. What does the following code log to the console? */

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// Nothing; the return on line 83 short-circuits the console.log on line 84

/* 5. What does the following code log to the console? */

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

// Nothing; there is no console.log method invocation