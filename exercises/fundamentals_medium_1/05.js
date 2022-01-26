/* What will the following code snippets log? */

//Code Snippet 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));


function counter(count) {
  // ...
}

/* after hoisting:
function counter(count) {
  // ...
}

var rate;

counter = 5; -- reassignment
rate = 3;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15 
*/

//Code Snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
/* AFTER HOISTING:
function counter(count) {
  // ...
}

var rate;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is NaN

counter = 5;
rate = 3;
*/

// Code Snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/* AFTER HOISTING:
function counter(count) {
  // ...
}

var rate;

counter = 5; -- reassignment
rate = 3;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15
*/

// Code Snippet 4
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/* LS NOTES:
Notice that after hoisting, the first and third code snippets are effectively 
  the same. Notice also, that in the first three code snippets, the variable 
  declaration for counter is effectively overwritten by the function declaration 
  with the same name.

  The differentiating factor for the second code snippet is the position of the 
  call to console.log relative to the variable assignments; since the 
  assignments happen after the console.log call, the expression counter * rate 
  evaluates to NaN.

  You can't declare a variable multiple times when one or more of those 
  declarations use let or const. Since snippet 4 declares counter using let, it 
  raises a SyntaxError. However, the error occurs on line 4 -- the function 
  declaration -- from the original code. Since SyntaxErrors usually occur during 
  the creation phase, hoisting has no direct effect on the behavior. Therefore, 
  we have omitted the hoisted code snippet for snippet 4. The syntax error will 
  occur before hoisting takes place.
*/