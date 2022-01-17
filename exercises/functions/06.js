/* What will the following code log to the console and why? Don't run the code 
  until after you have tried to answer. */

let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // 7. since a is passed as an argument, the function does not r
// reassign global variable a because the a in the function is a local variable