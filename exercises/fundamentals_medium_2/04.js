/* The doubler function in the code below takes two arguments: a number to 
  double and return, and a string containing the name of the function's caller. 
*/

// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

/* Write a makeDoubler function that takes a caller name as an argument, and 
  returns a function that has the same behavior as doubler, but with a preset 
  caller. */

const double = makeDoubler('Victor');
console.log(double(5));                             // returns 10
// logs:
// This function was called by Victor.

function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

function makeDoubler(caller) {
  return function(number) {
    return doubler(number, caller);
  }
}

/* LS SOLUTION:

This solution leverages that functions in JavaScript are first-class objects. It 
satisfies the requirement that makeDoubler must take a caller name and it 
returns a variation of the doubler function.

function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.

Notice that the returned anonymous function expression assigned to the doubler 
variable still retains access to the caller variable in its closure, even after 
the makeDoubler function returns. */

