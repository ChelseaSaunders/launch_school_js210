/* What will the following code log to the console and why? Don't run the code 
  until after you have tried to answer. */

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // this is global... var has block scope so when it's in a 
  // function it's still available outside