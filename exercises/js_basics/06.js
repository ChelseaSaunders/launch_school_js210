/* In this exercise, you will write a program that asks the user for a phrase, 
then outputs the number of characters in that phrase. Go over the documentation 
for String to find an appropriate method to use. */

let rlSync = require('readline-sync')
console.log('Please enter a phrase: ');
let phrase = rlSync.prompt();

console.log(`There are ${phrase.length} characters in "${phrase}".`);