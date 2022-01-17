/* What will the following code log to the console and why? Don't run the code 
  until after you have tried to answer. */

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // 7; since a is passed as an argument, it is the same as the 
// last problem, but this also shows varaible shadowing since the argument has 
// the same name as the variable. if the argument was named anything other than
// a, then line 7 would be reassigning the global variable a since there would 
// not be a local variable a in scope