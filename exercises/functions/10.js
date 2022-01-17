/* What will the following code log to the console and why? Don't run the code 
  until after you have tried to answer. */

logValue(); // hello world; with hoisting it moves the function declaration to 
// the top

function logValue() {
  console.log('Hello, world!');
}


/* Further exploration: 

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // string 
*/