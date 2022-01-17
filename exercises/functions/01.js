/* What will the following code log to the console and why? Don't run the code 
  until after you have tried to answer. */

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction(); 
console.log(myVar);

/*  'This is global' The myVar initialized in line 7 is only accessible within 
the function, and also shadows the myVar from line 4 from being accessible 
within that function. */


