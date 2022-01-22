/* Read through the code shown below. What does it log to the console at lines 9 
  and 13? */

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]