/* Write a program that asks the user to enter an integer greater than 0, then 
  asks if the user wants to determine the sum or the product of all numbers 
  between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.*/

let readlineSync = require('readline-sync');

let num;
let numberAnswer = false;

while (numberAnswer === false) {
  num = parseFloat(readlineSync.question('Please enter an integer greater than 0: '));
  if ((num === parseInt(num)) && (num > 0)) {
    numberAnswer = true;

  } else console.log('Error: invalid answer.')
}

let mathAnswer = false;
let mathType;

while (mathAnswer === false) {
  mathType = (readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ')).toLowerCase();
  if (mathType === 's' || mathType === 'p') mathAnswer = true;
  else console.log('Error: invalid answer.');
}

if (mathType === 's') {
  let total = 0;
  for (let i = 1; i <= num; i += 1) total += i;
  console.log(`The sum of the integers between 1 and ${num} is ${total}.`);
} else if (mathType === 'p') {
  let total = 1
  for (let i = 1; i <= num; i += 1) total *= i;
  console.log(`The product of the integers between 1 and ${num} is ${total}.`);
}